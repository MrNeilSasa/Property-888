import React from 'react'
import { auth } from '@/auth'
import Link from 'next/link'
import ListingCard from './ListingCard'
import ListingCardSoldOut from './ListingCardSoldOut'
import axios from 'axios'
import './AffordableHousing.css'

const AffordableHousing = async () => {
  const session = await auth()

  try {
    const res = await axios.get('https://www.property888.xyz/api/properties', {
      //const res = await axios.get("http://localhost:3000/api/properties", {
      params: { section: 'nftpropertyswap' },
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
      return formatted.endsWith('.00') ? formatted.slice(0, -3) : formatted
    }

    return (
      <div className="affordable" id="affordable">
        <div className="content">
          <h1 style={{ color: 'black' }}>Affordable Housing</h1>
          <div className="content-description">
            <p>
              Artificial Intelligence designed 750 sq ft & 950 sq ft affordable homes,
              <br />
              30% to 50% lower cost.
            </p>
          </div>

          {session?.user?.role === 'admin' && (
            <Link href="/submit-property/affordable">
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
                  price={`US$${formatPrice(listing.price)} / ${formatPrice(listing.price)} JM$C`}
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
                  price={`US$ ${formatPrice(listing.price)} / JM$C ${formatPrice(listing.price)}`}
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

export default AffordableHousing
