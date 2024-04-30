import React from "react";
import Link from "next/link";
import Image from "next/image";
import "./ListingCard.css";
import bedroom from "/public/images/bed_FILL0_wght400_GRAD0_opsz24.png";
import bathroom from "/public/images/bathroom_FILL0_wght400_GRAD0_opsz24.png";
import squareft from "/public/images/crop_square_FILL0_wght400_GRAD0_opsz24.png";

const ListingCard = async ({
  id,
  mainimage,
  title,
  bedrooms,
  bathrooms,
  sqft,
  price,
}) => {
  const imageSrc = `/uploads/${mainimage}`;

  return (
    <div className="listing-card">
      <Link
        href={`/individual-property/${id}`}
        style={{ color: "black", textDecoration: "none" }}
      >
        {/* Add Link component and set 'to' prop */}
        <Image
          className="listing-image"
          src={imageSrc}
          overrideSrc={imageSrc}
          width={300}
          height={200}
          position="relative"
          alt="Property"
        />
        <div className="listing-details">
          <div className="listing-description">{title}</div>
          <div className="icon-container">
            <div className="icon">
              <Image src={bedroom} width={24} height={24} alt="bedroom icon" />
            </div>

            <div>{`${bedrooms} Bedrooms`}</div>
          </div>
          <div className="icon-container">
            <div className="icon">
              <Image
                src={bathroom}
                width={24}
                height={24}
                alt="bathroom icon"
              />
            </div>

            <div>{`${bathrooms} Bathrooms`}</div>
          </div>
          <div className="icon-container">
            <div className="icon">
              <Image
                src={squareft}
                width={24}
                height={24}
                alt="square foot icon"
              />
            </div>

            <div>{`${sqft} sq ft`}</div>
          </div>
          <div className="price">{price}</div>
        </div>
      </Link>
    </div>
  );
};

export default ListingCard;
