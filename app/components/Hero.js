import React from 'react';
import Link from 'next/link';
import './Hero.css';
import image from '/public/images/3d-electric-car-building.jpg'
import Image from 'next/image';

const Hero = () => {
    return (
        <div className="hero-container">
            <div className="left-content">
            <h1 className="big-title"><span >AI Designed, Affordable Housing, 30% to 50% Lower Cost, </span> <span className='black'>Tokenized Loans at 0% Interest.</span> </h1>
                <p className='big-words' style={{width: '95%'}}>
                    Property 888 is a Blockchain technology, decentralized application (DApp),
                    that incorporates Artificial Intelligence, for the design and eventual build out of high quality 
                    modern architecture residential properties. Property 888 allows for the tokenization of real estate, 
                    with NFT property loans at 0% interest, with liquidity providers obtaining 12% rewards in US$C, or mUS$C tokens.
                </p>
                <div className="button-groups">
                    <Link href="/add-liquidity">
                        <button className='hero-button'>
                            Add Liquidity
                        </button>
                    </Link>
                    <Link href="https://ramp.alchemypay.org/#/index" target='_blank'>
                        <button className='buyCrypto-button'>
                            Buy Crypto
                        </button>
                    </Link>
                    <Link href="/">
                        <button className='crypto-card-button'>
                            Crypto Card
                        </button>
                    </Link>
                </div>
                    

            </div>
            <div className="right-content">

                <Image src={image} alt="Main page photograph" />
            </div>
        </div>
    );
}

export default Hero;
