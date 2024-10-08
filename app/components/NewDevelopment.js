import React from 'react'
import { auth } from '@/auth'
import Link from 'next/link'
import ListingCard from './ListingCard'
import ListingCardSoldOut from './ListingCardSoldOut'
import axios from 'axios'
import '../globals.css'
import './NewDevelopment.css'

const NewDevelopment = async () => {
  const session = await auth()

  try {
    const res = await axios.get('https://www.property888.xyz/api/properties', {
      //const res = await axios.get("http://localhost:3000/api/properties", {
      params: { section: 'new' },
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
      <div className="new" id="new">
        <div className="content">
          <h1 style={{ color: 'black' }}>New Development/Loan Liquidity.</h1>
          <div className="content-description">
            <p>
              Submit your property to Property 888 for maximum economic development, maximize your
              true property value with 0% interest loans, select from catalog of Artificial
              Intelligence ultra modern design, get early bird pre order access for new real estate
              development projects.
            </p>
          </div>

          {session?.user?.role === 'admin' && (
            <div>
              <Link href="/submit-property/new">
                <button className="submit-button" style={{ width: '150px' }}>
                  Submit Property
                </button>
              </Link>
              <Link href="/newDevelopment-nft">
                <button className="submit-button" style={{ width: '150px' }}>
                  Upload Contract
                </button>
              </Link>
            </div>
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
          </div>
        </div>
      </div>
    )
  } catch (error) {
    console.error('Error fetching listings: ', error)
  }
}

export default NewDevelopment
