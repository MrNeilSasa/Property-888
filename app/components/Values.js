import React from "react";
import "./Values.css";

const Values = () => {
  return (
    <div className="values">
      <div className="values-container">
        <div className="value">
          <h2>ASV: Available Swap Value </h2>
          <h3> 49,437,525.89821 US$C </h3>
        </div>
        <div className="value">
          <h2> Demand/Hotel Liquidity/NFT Loans </h2>
          <h3> 38,658,000 USDT </h3>
        </div>
        <div className="value">
          <h2> NFT Value Locked </h2>
          <h3> - USDT </h3>
        </div>
      </div>
    </div>
  );
};

export default Values;
