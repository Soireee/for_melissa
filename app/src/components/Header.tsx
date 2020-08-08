import React from 'react'
import { StyledHeader } from './styles/StyledHeader'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube, faFacebook } from '@fortawesome/free-brands-svg-icons'
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
    }
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
            <a href="https://twitter.com/home" className="header-sns-link">
              <FontAwesomeIcon icon={faYoutube} />
            </a>
            <li className="header-sns-link">
              <FontAwesomeIcon icon={faFacebook} />
            </li>
          </ul>
        </div>
      </div>
    </StyledHeader>
  )
}