import React from "react";
import "./Values.css";

const Values = () => {
  return (
    <div className="values">
      <div className="values-container">
        <div className="value">
          <h2>ASV: Available Swap Value </h2>
          <h3> 49,437,525 US$C </h3>
        </div>
        <div className="value">
          <h2> Hotel Liquidity/NFT Loans/Request </h2>
          <h3> 28,250,000 USDT </h3>
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
