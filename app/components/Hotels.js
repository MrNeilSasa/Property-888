import React from 'react'
import { auth } from '@/auth'
import Link from 'next/link'
import HotelListingCard from './HotelListingCard'
import axios from 'axios'
import '../globals.css'
import './Hotels.css'

const Hotels = async () => {
  const session = await auth()

  try {
    const res = await axios.get('https://property-888.vercel.app/api/hotels')
    //const res = await axios.get('http://localhost:3000/api/hotels')

    const hotels = res.data.hotels

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
      <div className="hotel" id="hotel">
        <div className="content">
          <h1 style={{ color: 'black' }}>Hotel Loan Liquidity</h1>
          <div className="content-description">
            {/* <div className="liquidity">
              <Link href="/add-liquidity">
                <button className="hotel-liquidity">
                  Add Liquidity, for Property 888 Hotel Liquidity Loans.
                </button>
              </Link>
            </div> */}
            <p>
              Property 888 buys selected hotels, partners with TravelnCrypto for bookings, with
              wholesale discount bookings in mUS$C, with subletting of initial bookings, with max
              mark-up of 44%, leading to greater efficiency of occupancy, based on Cryptoeconomics
              3.0 & Tokenomics 3.0, with all loans issued in USDT, repaid in US$C.
            </p>
          </div>

          {session?.user?.role === 'admin' && (
            <div>
              <Link href="/submit-hotel">
                <button className="submit-button" style={{ width: '150px' }}>
                  Submit Hotel
                </button>
              </Link>
            </div>
          )}

          <div className="hotel-listing-section">
            {hotels.map((hotel) => (
              <div key={hotel.hotelid} className="listing-card-style">
                <HotelListingCard
                  hotelid={hotel.hotelid}
                  image={hotel.filename}
                  title={hotel.title}
                  price={`USDT ${formatPrice(hotel.price)}`}
                  url={hotel.url}
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

export default Hotels
