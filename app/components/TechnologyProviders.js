import React from "react";
import trueSPACWebLogo from "/public/images/TrueSPAC logo.png";
import digiSharesLogo from "/public/images/Digishares Logo.jpg";
import polygonLogo from "/public/images/Polygon_blockchain_logo.png";
import polymathlogo from "/public/images/polymath-poly-logo-82102E2869-seeklogo.com.png";
import dodologo from "/public/images/dodo_new_igslbh.jpg";
import chainlinklogo from "/public/images/Chainlink-Logo-Blue.png";
import morphoBluelogo from "/public/images/MorphoBlueLogo.png";
import Image from "next/image";
import "./TechnologyProviders.css";

const TechnologyProviders = () => {
  return (
    <div>
      <h1 className="centre">Technology Providers</h1>
      <div className="logos">
        <Image
          src={trueSPACWebLogo}
          alt="TrueSPAC Web3 Crypto"
          style={{
            height: "97px",
            width: "282px",
            marginTop: "40px",
            marginBottom: "40px",
            marginLeft: "15px",
            marginRight: "15px",
          }}
        />
        <Image
          src={digiSharesLogo}
          alt="DigiShares"
          style={{
            height: "97px",
            width: "337px",
            marginTop: "40px",
            marginBottom: "40px",
            marginLeft: "15px",
            marginRight: "15px",
          }}
        />
        <Image
          src={polygonLogo}
          alt="Polygon"
          style={{
            height: "91px",
            width: "274px",
            marginTop: "40px",
            marginBottom: "40px",
            marginLeft: "15px",
            marginRight: "15px",
          }}
        />
        <Image
          src={polymathlogo}
          alt="Polymath"
          style={{
            height: "137px",
            width: "250px",
            marginTop: "40px",
            marginBottom: "40px",
            marginLeft: "15px",
            marginRight: "15px",
          }}
        />
        <Image
          src={dodologo}
          alt="DODO"
          style={{
            height: "137px",
            width: "333px",
            marginTop: "40px",
            marginBottom: "40px",
            marginLeft: "30px",
            marginRight: "30px",
          }}
        />
        <Image
          src={chainlinklogo}
          alt="ChainLink"
          style={{
            height: "100px",
            width: "406px",
            marginTop: "40px",
            marginBottom: "40px",
            marginLeft: "15px",
            marginRight: "15px",
          }}
        />
        <Image
          src={morphoBluelogo}
          alt="Morpho Blue"
          style={{
            height: "85px",
            width: "425.6px",
            marginTop: "40px",
            marginBottom: "40px",
            marginLeft: "15px",
            marginRight: "15px",
          }}
        />
      </div>
    </div>
  );
};

export default TechnologyProviders;
