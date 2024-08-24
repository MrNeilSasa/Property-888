import React from 'react'
import Image from 'next/image'
import profileIcon from '/public/images/profile-icon.png'
import logo from '/public/images/TrueSPAC logo.png'
import './partner.css'

const StrategicPartners = () => {
  const lawyerData = [
    { image: profileIcon, name: 'Bob Green' },
    { image: profileIcon, name: 'Tiffany Edwards' },
    { image: profileIcon, name: 'James Hamilliton' },
  ]

  const brokerData = [
    { image: profileIcon, name: 'John Brown' },
    { image: profileIcon, name: 'Peter Thomas' },
    { image: profileIcon, name: 'Jamilia Harris' },
  ]

  return (
    <div className="container">
      <div className="lawyers">
        <h1>Lawyers</h1>
        <div className="partners">
          {lawyerData.map((lawyer) => (
            <Partner key={lawyer.name} {...lawyer} />
          ))}
        </div>
      </div>
      <div className="brokers">
        <h1>Real Estate Brokers/Agents</h1>
        <div className="partners">
          {brokerData.map((broker) => (
            <Partner key={broker.name} {...broker} />
          ))}
        </div>
      </div>
      <div className="developers">
        <h1>Developers</h1>
      </div>
      <div className="contractors">
        <h1>Contractors</h1>
      </div>
      <div className="architects">
        <h1>Architects</h1>
      </div>
      <div className="payments">
        <h1>Crypto Payments/Rent</h1>
      </div>
      <div className="trueSPAClogo">
        <Image src={logo} alt="trueSPAC Logo" style={{ height: '150px', width: '450px' }} />
      </div>
    </div>
  )
}

const Partner = ({ image, name }) => {
  return (
    <div className="partner-card">
      <Image src={image} alt={name + "'s profile picture"} className="partner-image" />

      <div className="partner-info">
        <h3 className="partner-name">{name}</h3>
      </div>
    </div>
  )
}

export default StrategicPartners
