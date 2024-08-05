import React from "react";
import { auth } from "@/auth";
import Link from "next/link";
import ListingCard from "./ListingCard";
import ListingCardSoldOut from "./ListingCardSoldOut";
import axios from "axios";
import "./Rent2Own.css";

const Rent2Own = async () => {
  const session = await auth();

  try {
    const res = await axios.get("http://localhost:3000/api/properties", {
      params: { section: "rent2own" },
    });

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
      <div className="rent2own" id="rent2own">
        <div className="content">
          <h1 style={{ color: "black" }}>Rent2Own (Coming Soon)</h1>
          <div className="content-description">
            <p>
              Rent to own, your own Artificial Intelligence designed 750 sq ft
              home/apartment, for as little as US$6 per day/per person, zero
              mortgage, zero credit required (Jamaica only).
            </p>
          </div>

          {session?.user?.role === "admin" && (
            <Link href="/submit-property/rent2own">
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
                  )} per month / JM$C ${formatPrice(listing.price)} per month`}
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
                  )} per month / JM$C ${formatPrice(listing.price)} per month`}
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

export default Rent2Own;
