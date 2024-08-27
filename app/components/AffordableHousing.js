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
    const res = await axios.get('https://property-888.vercel.app/api/properties', {
      //const res = await axios.get("http://localhost:3000/api/properties", {
      params: { section: 'nftpropertyswap' },
    })

    const availableListings = res.data.availableProperties
    const soldListings = res.data.soldProperties

    const formatPrice = (price) => {
      // Function to format the price with commas (optional)
      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD', // Adjust the currency code if needed
      })
        .format(price)
        .replace(/^\$/, '')
    }

    return (
      <div className="affordable" id="affordable">
        <div className="content">
          <h1 style={{ color: 'black' }}>Affordable Housing</h1>
          <div className="content-description">
            <p>
              Artificial Intelligence designed 750 sq ft & 950 sq ft affordable homes,
              <br />
              30% to 50% cheaper.
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
                  price={`US$${formatPrice(listing.price)} / JM$C${formatPrice(listing.price)}`}
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
