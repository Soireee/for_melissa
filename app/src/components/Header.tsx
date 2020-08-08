import React from 'react'
import { StyledHeader } from './styles/StyledHeader'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube, faTwitter } from '@fortawesome/free-brands-svg-icons'
export const Header = () => {
  const headerLink = [
    {
      id: 1,
      name: "TOP",
    },
    {
      id: 2,
      name: "NEWS"
    },
    {
      id: 3,
      name: "MUSIC"
    },
    {
      id: 4,
      name: "CONTACT"
    },
  ]
  const linkList = headerLink.map(link => {
    return (
      <li className="header-right-link" key={link.id}>
        <Link to={`${link.id}`}>{link.name}</Link>
      </li>
    )
  })
  return (
    <StyledHeader>
      <div className="header-content">
        <div className="header-left">
          <Link to="/" className="header-logo">
            melissaKinrenka
          </Link>
        </div>
        <div className="header-right">
          <ul>
            {linkList}
          </ul>
        </div>
        <div className="header-sns">
          <ul>
            <a href="https://www.youtube.com/channel/UCwcyyxn6h9ex4sMXGtpQE_g" className="header-sns-link">
              <FontAwesomeIcon icon={faYoutube} />
            </a>
            <a href="https://twitter.com/home" className="header-sns-link">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </ul>
        </div>
      </div>
    </StyledHeader>
  )
}