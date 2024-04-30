import React from 'react'
import merch1 from '/public/images/Property 888 merch 1.png'
import merch2 from '/public/images/Property 888 merch 2.png'
import Image from 'next/image';
import './Merch.css'

export default function Merch() {
    return (
        <div  className='merch' style={{minHeight: '75vh'}}>
        <h1>Merch</h1>
        <div className='merch-container'>
            <div className='merch-content'>
                    
                    <a href='https://truespac-web3-crypto.printify.me/product/6311176/property-888-dad-hat-with-leather-patch-rectangle'>
                        <Image src={merch1} alt='Property 888 cap' className='merch-img'/>
                    </a>  
                    <p>Property 888 - Dad Hat with Leather Patch (Rectangle)</p>
                    <a href='https://truespac-web3-crypto.printify.me/product/6311176/property-888-dad-hat-with-leather-patch-rectangle'>   
                        <button className='button'> 
                            Buy/Fiat
                        </button>
                    </a>  
                        
                </div>
                <div className='merch-content'>
                    
                <Image src={merch2} alt='Property 888 shirt' className='merch-img' />
                <p>Property 888 T-Shirt</p>
                <a href='https://buy.copperx.io/payment/payment-link/2a7526c1-3303-4269-a086-5740e7d9dd9b'>
                        <button className='button'>
                            Buy/Crypto
                        </button>
                    </a>
                <h5>
                    Rewards 23%
                </h5>
                </div>
        </div>
            
    </div>
    );
  }
  