import axios from 'axios'
import ImageSlider from '../../components/ImageSlider'
import Link from 'next/link'
import Image from 'next/image'
import telegramIcon from '/public/images/telegram-icon-6896828_1280.png'
import './IndividualProperty.css'

const IndividualProperty = async ({ params }) => {
  try {
    // Get the property ID from the URL parameters

    function formatPrice(value) {
      // Convert the value to a number in case it's a string
      const number = parseFloat(value)

      // Format the number with US locale and currency, but without the currency symbol
      const formatted = number.toLocaleString('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })

      // Remove the decimal part if it's '.00'
      return formatted.endsWith('.00') ? formatted.slice(0, -3) : formatted
    }

    console.log('ID: ', params.id)

    const response = await axios.get(`https://property-888.vercel.app/api/properties/${params.id}`)

    // const response = await axios.get(
    //   `http://localhost:3000/api/properties/${params.id}`
    // );

    const property = response.data.property

    if (!property) {
      return <div>Loading. . . </div>
    }

    const addListingButton = shouldShowAddListingButton(property.section)

    const detailsArray = property.details.split('\n')

    let price
    if (property.section === 'rent2own') {
      price = `US$C ${formatPrice(property.price)} per month / JM$C ${formatPrice(
        property.price
      )} per month`
    } else if (property.section === 'haas') {
      if (property.price === '816.00') {
        price = `Price: US$108,000/US$816 per month /816 JM$C per month \n
                (950 sqft + PV Solar + New Compact EV or New Mini SUV EV), \n
                  based on 10% deposit, 9% mortgage rate, 25 years.`
      } else if (property.price === '1073.00') {
        price = `US$142,000/US$1,073 per month /1,073 JM$C \n
                  per month (1200 sqft + PV Solar + New Full Size SUV EV), \n
                  based on 10% deposit, 9% mortgage rate, 25 years.`
      }
    } else if (property.section === 'securities') {
      const usdPrice = formatPrice(property.price)
      const iSPACPrice = formatPrice(property.price / 10) // 1 iSPAC is worth 10 US$
      price = `US$${usdPrice} / ${iSPACPrice} iSPAC`
    } else if (property.section === 'gold') {
      const usdPrice = formatPrice(property.price)
      // Conversion rates
      const tGLDConversionRate = 350000 / 8.333 // 1 US$ to tGLD
      const mUSDCConversionRate = 350000 / 350 // 1 US$ to mUS$C
      const tGLDPrice = formatPrice(property.price / tGLDConversionRate)
      const mUSDCPrice = formatPrice(property.price / mUSDCConversionRate)
      price = `US$${usdPrice} / ${tGLDPrice}m tGLD / ${mUSDCPrice}b  mUS$C`
    } else {
      price = `US$${formatPrice(property.price)} / JM$C${formatPrice(property.price)}`
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
            <Link href="https://t.me/Property_888 " target="_blank" className="telegramLink">
              <Image src={telegramIcon} alt="telegram" style={{ height: '30px', width: '30px' }} />
              <span className="link-text">Property 888 Telegram Group</span>
            </Link>

            <p>Phone Number: 1 (876) 207-5897</p>
          </div>
        </div>
      </div>
    )
  } catch (error) {
    console.error('Error property details: ', error)
  }
}

function shouldShowAddListingButton(propertySection) {
  return (
    propertySection === 'new' ||
    propertySection === 'haas' ||
    propertySection === 'rent2own' ||
    propertySection === 'nftpropertyswap'
  )
}

export default IndividualProperty
