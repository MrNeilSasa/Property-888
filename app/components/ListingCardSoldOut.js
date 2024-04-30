import "./ListingCard.css";
import bedroom from "/public/images/bed_FILL0_wght400_GRAD0_opsz24.png";
import bathroom from "/public/images/bathroom_FILL0_wght400_GRAD0_opsz24.png";
import squareft from "/public/images/crop_square_FILL0_wght400_GRAD0_opsz24.png";
import { Watermark } from "@hirohe/react-watermark";
import Image from "next/image";

const ListingCardSoldOut = ({
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
      <Image
        className="listing-image"
        src={imageSrc}
        width={300}
        height={200}
        alt="Property"
      />
      <div className="listing-details">
        <Watermark
          text="Sold"
          textSize={isMobile ? 30 : 50}
          opacity={0.6}
          gutter={125}
          rotate={0}
          textColor="#ff0000"
        >
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
        </Watermark>
      </div>
    </div>
  );
};

ListingCardSoldOut.getInitialProps = async ({ req }) => {
  const userAgent = req.headers["user-agent"]; // Get user agent from request header
  const isMobile = userAgent.match(/mobile/i); // Simple check for mobile presence (can be refined)
  return { isMobile };
};

export default ListingCardSoldOut;
