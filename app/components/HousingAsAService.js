import React from "react";
import { auth } from "@/auth";
import Link from "next/link";
import ListingCard from "./ListingCard";
import ListingCardSoldOut from "./ListingCardSoldOut";
import axios from "axios";
import "./HousingAsAService.css";

const HousingAsAService = async () => {
  const session = await auth();
  try {
    const res = await axios.get("http://localhost:3000/api/properties", {
      params: { section: "haas" },
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
      <div className="haas" id="haas">
        <div className="content">
          <h1 style={{ color: "black" }}>Housing as a Service (HaaS)</h1>
          <div className="content-description">
            <p>
              HaaS stands for “Home ownership as a Service”, where three
              industries are combined as follows: <br />
              Home ownership as a Service (HaaS) + Solar Power as a Service
              (SPaaS) + Electric Vehicle as a Service (EVaaS), are combined to
              make affordable homes, along with mass adoption of electric
              vehicles (EVs), while allowing the consumer the ability enjoy
              monthly savings when compared to renting, which perfect for a
              economic nuclear family, young professionals, and taxi operators.
            </p>
          </div>

          {session?.user?.role === "admin" && (
            <Link href="/submit-property/haas">
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
                  )} per month / JM$C ${formatPrice(
                    listing.price
                  )} per month (950 sqft + PV Solar + EV)`}
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
                  )} per month / JM$C ${formatPrice(
                    listing.price
                  )} per month (950 sqft + PV Solar + EV)`}
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

export default HousingAsAService;
