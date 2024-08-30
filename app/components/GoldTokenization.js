import React from 'react'
import { auth } from '@/auth'
import Link from 'next/link'
import ListingCard from './ListingCard'
import ListingCardSoldOut from './ListingCardSoldOut'
import axios from 'axios'
import './GoldTokenization.css'

const GoldTokenization = async () => {
  const session = await auth()

  try {
    const res = await axios.get('https://property-888.vercel.app/api/properties', {
      //const res = await axios.get("http://localhost:3000/api/properties", {
      params: { section: 'gold' },
    })

    const availableListings = res.data.availableProperties
    const soldListings = res.data.soldProperties

    function formatPrice(value) {
      // Convert the value to a number in case it's a string
      const number = parseFloat(value)

      // Format the number with US locale and currency, but without the currency symbol
      const formatted = number.toLocaleString('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })

      // Remove the decimal part if it's '.00'
      if (formatted.endsWith('0')) {
        return formatted.slice(0, -1)
      } else if (formatted.endsWith('.000')) {
        return formatted.slice(0, -4)
      } else {
        return formatted
      }
    }

    const convertPrice = (usdPrice) => {
      // Conversion rates
      const tGLDConversionRate = 0.018 // 1 US$ to tGLD
      const tSPACConversionRate = 350000 / 350 // 1 US$ to mUS$C
      const tGLDPrice = usdPrice / tGLDConversionRate
      const tSPACPrice = usdPrice / tSPACConversionRate
      return `US$${formatPrice(usdPrice)} /  ${formatPrice(
        tGLDPrice / 1000000
      )}m tGLD /  ${formatPrice(tSPACPrice.toFixed(3))}b TSPAC`
    }

    return (
      <div className="gold" id="gold">
        <div className="content">
          <h1 style={{ color: 'black' }}>Gold & Utility Tokenization</h1>
          <div className="content-description">
            <p>
              Tokenize your property in the price of Gold using TrueSPAC Gold NFT, and secure the
              value of your property from unexpected market depreciation. Tokenize your property
              using the selected TrueSPAC Utility token, once tokenized, the NFT or tokens can be
              used in DeFi to secure DeFi loans at 0% interest, according to percentage leveraged, a
              Hodler&apos;s Paradise.
            </p>
          </div>

          {session?.user?.role === 'admin' && (
            <Link href="/submit-property/gold">
              <button className="submit-button" style={{ width: '150px' }}>
                Submit Property
              </button>
            </Link>
          )}

          <div className="listing-section">
            {availableListings.map((listing) => (
              <div key={listing.id} className="listing-card-style">
                <ListingCard
                  id={listing.id}
                  mainimage={listing.mainimage}
                  title={listing.title}
                  bedrooms={listing.bedrooms}
                  bathrooms={listing.bathrooms}
                  sqft={listing.sqft}
                  price={convertPrice(listing.price)}
                />
              </div>
            ))}

            {soldListings.map((listing) => (
              <div key={listing.id} className="listing-card-style">
                <ListingCardSoldOut
                  id={listing.id}
                  mainimage={listing.mainimage}
                  title={listing.title}
                  bedrooms={listing.bedrooms}
                  bathrooms={listing.bathrooms}
                  sqft={listing.sqft}
                  price={convertPrice(listing.price)}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  } catch (error) {
    console.error('Error fetching listings: ', error)
  }
}

export default GoldTokenization
