import React from 'react'
import { StyledContact } from "../styles/StyledContact"
import melissa_news from '../images/melissa_news@2x.png'

export const Contact = () => {
  const melissa_backImg = {backgroundImage:`url(${melissa_news})`}
  return (
    <StyledContact>
      <section className="news-section">
        <div style={melissa_backImg} className="news-backImg">
          <div className="news-container">
            <div className="news-header">
              <h3 className="news-header-text">NEWS</h3>
            </div>
            <div className="news-wrapper">
              <div className="news-wrap">
                <ul className="news-list">
                  <li className="news-item">
                    <p className="news-date">2020/07/30</p>
                    <p className="news-tag">Melissa通信</p>
                    <p className="news-content">新曲「その手の中にあるものは」がリリースされました！</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </StyledContact>
  )
}


