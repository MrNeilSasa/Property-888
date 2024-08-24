import React from "react";
import { auth } from "@/auth";
import Link from "next/link";
import ListingCard from "./ListingCard";
import ListingCardSoldOut from "./ListingCardSoldOut";
import axios from "axios";
import "./Buy.css";

const Buy = async () => {
  const session = await auth();
  const section = "buy";
  try {
    const res = await axios.get(
      "https://property-888.vercel.app/api/properties",
      {
        //const res = await axios.get("http://localhost:3000/api/properties", {
        params: { section: "buy" },
      }
    );

    const availableListings = res.data.availableProperties;
    const soldListings = res.data.soldProperties;

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
      <div className="buy" id="buy">
        <div className="content">
          <h1 style={{ color: "black" }}>Buy <span className="coming-soon">(Coming Soon)</span></h1>
          <div className="content-description">
            <p>
              Purchase real estate using selected Cryptocurrencies, maximize
              purchasing power.
            </p>
          </div>

          {session?.user?.role === "admin" && (
            <Link href="/submit-property/buy">
              <button className="submit-button" style={{ width: "150px" }}>
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
                  price={`US$ ${formatPrice(
                    listing.price
                  )} / JM$C ${formatPrice(listing.price)}`}
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
                  price={`US$ ${formatPrice(
                    listing.price
                  )} / JM$C ${formatPrice(listing.price)}`}
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

export default Buy;
