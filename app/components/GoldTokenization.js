import React from "react";
import { auth } from "@/auth";
import Link from "next/link";
import ListingCard from "./ListingCard";
import ListingCardSoldOut from "./ListingCardSoldOut";
import axios from "axios";
import "./GoldTokenization.css";

const GoldTokenization = async () => {
  const session = await auth();

  try {
    const res = await axios.get("http://localhost:3000/api/properties", {
      params: { section: "gold" },
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

    const convertPrice = (usdPrice) => {
      // Conversion rates
      const tGLDConversionRate = 0.018; // 1 US$ to tGLD
      const tSPACConversionRate = 350000 / 350; // 1 US$ to mUS$C
      const tGLDPrice = usdPrice / tGLDConversionRate;
      const tSPACPrice = usdPrice / tSPACConversionRate;
      return `US$ ${formatPrice(usdPrice)} /  ${formatPrice(
        tGLDPrice.toFixed(2)
      )}m tGLD /  ${tSPACPrice.toFixed(0)}b TSPAC`;
    };

    return (
      <div className="gold" id="gold">
        <div className="content">
          <h1 style={{ color: "black" }}>Gold & Utility Tokenization</h1>
          <div className="content-description">
            <p>
              Tokenize your property in the price of Gold, using TrueSPAC Gold
              NFT, or tokenize your property using selected TrueSPAC Utility
              token. Once tokenized, NFT or tokens, can be used in DeFi to
              secure DeFi loans at 0% interest, according to percentage
              leveraged, Hodler&apos;s Paradise.
            </p>
          </div>

          {session?.user?.role === "admin" && (
            <Link href="/submit-property/gold">
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

export default GoldTokenization;
