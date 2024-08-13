import React from "react";
import { auth } from "@/auth";
import Link from "next/link";
import ListingCard from "./ListingCard";
import ListingCardSoldOut from "./ListingCardSoldOut";
import axios from "axios";
import "./SecuritiesToken.css";

const SecuritiesToken = async () => {
  const session = await auth();

  try {
    const res = await axios.get(
      "https://property-888.vercel.app/api/properties",
      {
        //const res = await axios.get("http://localhost:3000/api/properties", {
        params: { section: "securities" },
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

    const convertPrice = (usdPrice) => {
      const iSPACPrice = usdPrice / 100;
      return `US$ ${formatPrice(usdPrice)} / iSPAC ${formatPrice(iSPACPrice)}`;
    };

    return (
      <div className="securities" id="securities">
        <div className="content">
          <h1 style={{ color: "black" }}>Securities Token</h1>
          <div className="content-description">
            <p>
              TrueSPAC Investment (iSPAC) Securities tokens that are designed
              for fractional ownership, allowing project developers to raise
              capital in USD or US$C Stablecoin.
            </p>
          </div>

          {session?.user?.role === "admin" && (
            <Link href="/submit-property/securities">
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
    );
  } catch (error) {
    console.error("Error fetching listings: ", error);
  }
};

export default SecuritiesToken;
