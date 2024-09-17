import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import './misc.css'
import houseCalc from '/public/images/house-calculator.jpg'

const page = () => {
  return (
    <div className="misc">
      <h1>Miscellaneous</h1>
      <Link href="https://www.jnbank.com/calculators/mortgage-calculator/">
        <Image
          className="house-calc"
          src={houseCalc}
          alt="House Calulator with link to JN Mortgage Calculator"
        />
      </Link>
      {/* <p className="fair-use">(Fair Use: Click image to view calculator)</p> */}
    </div>
  )
}

export default page
