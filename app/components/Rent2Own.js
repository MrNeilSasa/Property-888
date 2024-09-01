import React from 'react'
import { auth } from '@/auth'
import Link from 'next/link'
import ListingCard from './ListingCard'
import ListingCardSoldOut from './ListingCardSoldOut'
import axios from 'axios'
import './Rent2Own.css'

const Rent2Own = async () => {
  const session = await auth()

  try {
    const res = await axios.get('https://www.property888.xyz/api/properties', {
      //const res = await axios.get("http://localhost:3000/api/properties", {
      params: { section: 'rent2own' },
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
      <div className="rent2own" id="rent2own">
        <div className="content">
          <h1 style={{ color: 'black' }}>
            Rent2Own <span className="coming-soon">(Coming Soon)</span>
          </h1>
          <div className="content-description">
            <p>
              Rent to own your own artificial intelligence (AI) designed 750 sq ft home/apartment,
              for as little as US$6 per day/per person, zero mortgage, zero credit required (Jamaica
              only), adjusted for inflation per year.
            </p>
          </div>

          {session?.user?.role === 'admin' && (
            <Link href="/submit-property/rent2own">
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
                  price={`${formatPrice(listing.price)} US$C per month / ${formatPrice(
                    listing.price
                  )} JM$C
                    per month`}
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

export default Rent2Own
