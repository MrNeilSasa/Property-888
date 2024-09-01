import React from 'react'
import { auth } from '@/auth'
import Link from 'next/link'
import ListingCard from './ListingCard'
import ListingCardSoldOut from './ListingCardSoldOut'
import axios from 'axios'
import './HousingAsAService.css'

const HousingAsAService = async () => {
  const session = await auth()
  try {
    const res = await axios.get('https://property-888.vercel.app/api/properties', {
      //const res = await axios.get('http://localhost:3000/api/properties', {
      params: { section: 'haas' },
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
      <div className="haas" id="haas">
        <div className="content">
          <h1 style={{ color: 'black' }}>Housing as a Service (HaaS)</h1>
          <div className="content-description">
            <p className="normal-screens">
              HaaS stands for “Home ownership as a Service” where three industries are combined as
              follows: Home ownership as a Service (HaaS) + Solar Power as a Service (SPaaS) +
              Electric Vehicle as a Service (EVaaS), are combined to make affordable homes, along
              with mass adoption of electric vehicles (EVs), while allowing the consumer the ability
              to enjoy monthly savings when compared to renting, which is perfect for an economic
              nuclear family, young professionals, & taxi operators.
            </p>
            <p className="moblie-screens">
              Home ownership as a Service (HaaS) + Solar Power as a Service (SPaaS) + Electric
              Vehicle as a Service (EVaaS) provides superior monthly savings, perfect for the
              nuclear family, young professionals, and taxi operators.
            </p>
          </div>

          {session?.user?.role === 'admin' && (
            <Link href="/submit-property/haas">
              <button className="submit-button" style={{ width: '150px' }}>
                Submit Property
              </button>
            </Link>
          )}

          <div className="listing-section">
            {availableListings.map((listing) => {
              let formattedPrice
              console.log('Listing price for Hass:', listing.price)
              if (listing.price === '816.00') {
                formattedPrice = `US$108,000 / US$816 per month / 816 JM$C per month (950 sqft + PV Solar + New Compact EV or New Mini SUV EV), 
                based on 10% deposit, 9% mortgage rate, 25 years.
`
              } else if (listing.price === '1073.00') {
                formattedPrice = `US$142,000 / US$1,073 per month / 1,073 JM$C per month (1200 sqft + PV Solar + New Full Size SUV EV), 
                based on 10% deposit, 9% mortgage rate, 25 years`
              }

              return (
                <div key={listing.id} className="listing-card-style">
                  <ListingCard
                    id={listing.id}
                    mainimage={listing.mainimage}
                    title={listing.title}
                    bedrooms={listing.bedrooms}
                    bathrooms={listing.bathrooms}
                    sqft={listing.sqft}
                    price={formattedPrice}
                  />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    )
  } catch (error) {
    console.error('Error fetching listings: ', error)
  }
}

export default HousingAsAService
