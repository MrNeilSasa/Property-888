import axios from "axios";
import ImageSlider from "../../components/ImageSlider";
import Link from "next/link";
import "./IndividualProperty.css";

const IndividualProperty = async ({ params }) => {
  try {
    // Get the property ID from the URL parameters

    console.log("ID: ", params.id);
    /*
  const response = await axios.get(
    `https://property888.onrender.com:443/api/properties/${id}`
  );*/

    const response = await axios.get(
      `http://localhost:3000/api/properties/${params.id}`
    );

    const property = response.data.property;

    if (!property) {
      return <div>Loading. . . </div>;
    }

    const addListingButton = shouldShowAddListingButton(property.section);

    const detailsArray = property.details.split("\n");

    let price;
    if (property.section === "rent2own") {
      price = `US$ ${property.price} per month / JM$C ${property.price} per month`;
    } else if (property.section === "haas") {
      price = `US$ ${property.price} per month (950 sqft + PV Solar + EV) / JM$C ${property.price} per month (950 sqft + PV Solar + EV)`;
    } else if (property.section === "securities") {
      const usdPrice = property.price;
      const iSPACPrice = property.price / 10; // 1 iSPAC is worth 10 US$
      price = `US$ ${usdPrice} / iSPAC ${iSPACPrice}`;
    } else if (property.section === "gold") {
      const usdPrice = property.price;
      // Conversion rates
      const tGLDConversionRate = 350000 / 8.333; // 1 US$ to tGLD
      const mUSDCConversionRate = 350000 / 350; // 1 US$ to mUS$C
      const tGLDPrice = usdPrice / tGLDConversionRate;
      const mUSDCPrice = usdPrice / mUSDCConversionRate;
      price = `US$ ${usdPrice} / tGLD ${tGLDPrice}m / mUS$C ${mUSDCPrice}b`;
    } else {
      price = `US$ ${property.price} / JM$C ${property.price}`;
    }

    return (
      <div>
        <div className="slider">
          <ImageSlider id={params.id} />
        </div>
        <div className="info">
          <div className="mycard">
            <h1>{property.title}</h1>
            <br />
            <p>{`  ${property.bedrooms} bedrooms | ${property.bathrooms}  bathrooms |  ${property.sqft} sq ft`}</p>
            <p>{`Price: ${price}`}</p>

            {addListingButton && (
              <Link href="add-liquidity">
                <button className="hero-button">Add Liquidity</button>
              </Link>
            )}
            {detailsArray.map((detail, index) => (
              <p key={index}>{detail}</p>
            ))}
          </div>
          <div className="contact-card">
            <h1>Contact Information</h1>
            <br />
            <p>Email: info@property888.xyz</p>
            <p>Phone Number: 1 (876) 207-5897</p>
          </div>
        </div>

        {/* Render other property details as needed */}
      </div>
    );
  } catch (error) {
    console.error("Error property details: ", error);
  }
};

function shouldShowAddListingButton(propertySection) {
  return (
    propertySection === "new" ||
    propertySection === "haas" ||
    propertySection === "rent2own" ||
    propertySection === "nftpropertyswap"
  );
}

export default IndividualProperty;
