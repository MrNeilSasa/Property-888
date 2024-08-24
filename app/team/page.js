import React from 'react'
import './Team.css'
import antonioImg from '/public/images/Antonio-Profile-Pic.png'
import rodgerImg from '/public/images/Rodger-Profile-Pic.jpeg'
import advisor1 from '/public/images/Claus-Profile-Pic.png'
import Image from 'next/image'
const Team = () => {
  const teamMembers = [
    {
      imageSrc: rodgerImg,
      name: 'Rodger McKenzie',
      title: 'Founder CEO/CTO',
      linkedInUrl: 'https://www.linkedin.com/in/rodgermckenzie/',
    },
    {
      imageSrc: antonioImg,
      name: 'Antonio Neil',
      title: 'Blockchain/Full Stack Engineer',
      linkedInUrl: 'https://www.linkedin.com/in/antonio-neil-a6aa0b24a/',
    },
    // Add more team member objects here
  ]

  const advisors = [
    {
      imageSrc: advisor1,
      name: 'Claus Skaaning',
      title: 'CEO Digishares/Real Estate Exchange',
      linkedInUrl: 'https://www.linkedin.com/in/clausskaaning/',
    },
  ]

  return (
    <div>
      <div className="team-page">
        <div className="team-section">
          <h1>Team</h1>
          <div className="team-members">
            {teamMembers.map((member) => (
              <TeamMember key={member.name} {...member} />
            ))}
          </div>
        </div>
        <div className="advisor-section">
          <h1> Advisor</h1>
          <div className="advisors">
            {advisors.map((advisor) => (
              <TeamMember key={advisor.name} {...advisor} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

const TeamMember = ({ imageSrc, name, title, linkedInUrl }) => {
  return (
    <div className="team-member-card">
      <a href={linkedInUrl} target="_blank" rel="noopener noreferrer">
        <Image src={imageSrc} alt={name + "'s profile picture"} className="team-member-image" />
      </a>
      <div className="team-member-info">
        <h3 className="team-member-name">{name}</h3>
        <p className="team-member-title">{title}</p>
      </div>
    </div>
  )
}

export default Team
