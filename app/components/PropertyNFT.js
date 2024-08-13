import React from "react";
import { auth } from "@/auth";
import Link from "next/link";
import ListingCard from "./ListingCard";
import ListingCardSoldOut from "./ListingCardSoldOut";
import axios from "axios";
import "./PropertyNFT.css";

const PropertyNFT = async () => {
  const session = await auth();

  try {
    const res = await axios.get(
      "https://property-888.vercel.app/api/properties",
      {
        //const res = await axios.get("http://localhost:3000/api/properties", {
        params: { section: "propertynft" },
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
      <div className="propertynft" id="propertynft">
        <div className="content">
          <h1 style={{ color: "black" }}>Property NFT (Coming Soon)</h1>
          <div className="content-description">
            <p>
              Convert your property value & title into that of an NFT, with all
              legal paperwork, on, and off chain. Vault NFT, use as collateral,
              then take out TrueSPAC Utility tokens of Choice at 0% interest.
            </p>
          </div>

          {session?.user?.role === "admin" && (
            <Link href="/submit-property/propertynft">
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

export default PropertyNFT;
