import React from "react";
import { auth } from "@/auth";
import Link from "next/link";
import HotelListingCard from "./HotelListingCard";
import axios from "axios";
import "../globals.css";
import "./Hotels.css";

const Hotels = async () => {
  const session = await auth();

  try {
    const res = await axios.get("https://property-888.vercel.app/api/hotels");
    //const res = await axios.get("http://localhost:3000/api/hotels");

    const hotels = res.data.hotels;

    const formatPrice = (price) => {
      // Function to format the price with commas (optional)
      return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD", // Adjust the currency code if needed
      })
        .format(price)
        .replace(/^\$/, "");
    };

    return (
      <div className="hotel" id="hotel">
        <div className="content">
          <h1 style={{ color: "black" }}>Hotels/Loans</h1>
          <div className="content-description">
            <div className="liquidity">
              <Link href="/add-liquidity">
                Add Liquidity, for Property 888 Hotel Liquidity Loans.
              </Link>
            </div>
            <p>
              Property 888 buys selected hotels, partners with TravelnCrypto for
              bookings, and subletting of initial bookings in US$C, & mUS$C, at
              lower cost, with greater efficiency of occupancy, based on
              Cryptoeconomics 3.0.
            </p>
          </div>

          {session?.user?.role === "admin" && (
            <div>
              <Link href="/submit-hotel">
                <button className="submit-button" style={{ width: "150px" }}>
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
                  price={`US$ ${formatPrice(hotel.price)}`}
                  url={hotel.url}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error fetching listings: ", error);
  }
};

export default Hotels;
