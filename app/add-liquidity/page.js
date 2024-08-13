import React from "react";
import "./AddLiquidity.css";

const AddLiquidity = () => {
  return (
    <div className="container">
      <div className="left">
        <p className="centered-text">
          Add/provide liquidity through a single side liquidity pool. <br />
          Swap USDT, DAI, USDC, WETH, WBTC, for US$C, obtain LP tokens, with 12%
          fixed rewards.
        </p>
      </div>
      <div className="right">
        <iframe
          title="DodoSwap - TrueSPAC Liquidity Pool"
          src="https://swap.dodoex.io/TrueSPAC?full-screen=true"
          width="375px"
          height="494px"
          frameborder="0"
          style={{ borderRadius: "16px" }}
        />
        <p>
          By connecting your wallet, and completing a swap to provide liquidity:
        </p>

        <p>
          I AGREE with the following: No Cryptocurrency, No money, or other
          consideration, is being solicited, nothing on this webpage (
          <a href="http://www.property888.xyz/add-liquidity">
            www.property888.xyz/add-liquidity
          </a>
          ), shall constitute an offer to sell, or a solicitation of offer to
          purchase (for cash or exchange) Securities.{" "}
        </p>
        <p>
          US$C, mUS$C, tGLD, TSPAC are TrueSPAC Utility tokens that can be used
          within Decentralized Finance (DeFi), are not Shares, or Securities of
          any type, they do not entitle you to any ownership, or other interest
          in Property 888 , or any properties listed on Property 888 website.{" "}
        </p>
        <p>
          The Swap widget is powered by DODO Exchange, a 3rd party DEX, the
          tokens obtained by way of swap, does not allow purchase, or rental, of
          any real estate properties shown on Property 888. Consumers of
          Property 888 services, that require the mentioned Utility tokens, are
          only able to obtain said tokens via a DEX or CEX, which would see LP
          token holder(s) having the option to hodle, swap, or sell their LP
          tokens.
        </p>

        <strong>
          <u>Restricted Countries: </u>
        </strong>
        <p>
          The following jurisdictions are restricted in participating in
          Property 888, or TrueSPAC Web3 Crypto goods and services; Afghanistan
          , Balkans, Belarus, Burma, Central African Republic, Congo, Ethiopia,
          Hong Kong, Iran, Iraq, Lebanon, Libya, Mali , Nicaragua, North Korea,
          Russia, Somalia, Sudan, South Sudan, Syria, Ukraine/Russia, Venezuela,
          Yemen, and Zimbabwe.
        </p>
      </div>
    </div>
  );
};

export default AddLiquidity;
