import React from "react";
import Link from "next/link";
import Image from "next/image";
import "./HotelListingCard.css";

const HotelListingCard = async ({ hotelid, image, title, price, url }) => {
  const imageSrc = `/uploads/${image}`;
  console.log("Image: ", imageSrc);
  return (
    <div className="hotel-listing-card">
      <Link href={url} target="_blank">
        <Image
          className="hotel-image"
          src={imageSrc}
          width={300}
          height={200}
          position="relative"
          alt={"Hotel"}
        />

        <div className="hotel-details">
          <div className="hotel-title">{title}</div>
          <div className="hotel-price">{price}</div>
        </div>
      </Link>
    </div>
  );
};

export default HotelListingCard;
