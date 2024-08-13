import React from "react";
import trueSPACWebLogo from "/public/images/TrueSPAC logo.png";
import digiSharesLogo from "/public/images/Digishares Logo.jpg";
import polygonLogo from "/public/images/Polygon_blockchain_logo.png";
import polymathlogo from "/public/images/polymath-poly-logo-82102E2869-seeklogo.com.png";
import dodologo from "/public/images/dodo_new_igslbh.jpg";
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
          style={{ height: "100px", width: "260px", margin: "40px" }}
        />
        <Image
          src={digiSharesLogo}
          alt="DigiShares"
          style={{ height: "100px", width: "255px", margin: "40px" }}
        />
        <Image
          src={polygonLogo}
          alt="Polygon"
          style={{ height: "150px", width: "300px", margin: "40px" }}
        />
        <Image
          src={polymathlogo}
          alt="Polymath"
          style={{ height: "150px", width: "250px", margin: "40px" }}
        />
        <Image
          src={dodologo}
          alt="DODO"
          style={{ height: "120px", width: "250px", margin: "40px" }}
        />
      </div>
    </div>
  );
};

export default TechnologyProviders;
