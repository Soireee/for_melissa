import React from 'react'
import { StyledMusic } from "../styles/StyledMusic"
import melissa_music from '../images/melissa_music@2x.png'

export const Music = () => {
  const melissa_backImg = {backgroundImage:`url(${melissa_music})`}
  return (
    <StyledMusic>
      <section className="music-section">
        <div style={melissa_backImg} className="music-backImg">
          <div className="music-container">
            <div className="music-header-container">
              <div className="music-header">
                <h2 className="music-header-text">MUSIC</h2>
              </div>
            </div>
            <div className="music-wrapper">
              <div className="music-wrap">
                <ul className="music-list">
                  <iframe src='https://www.youtube.com/embed/ZArPzQu_cXE'
                    className="youtube-iframe"
                    width='560'
                    height='400'
                    frameBorder='0'
                    allow='autoplay; encrypted-media'
                    allowFullScreen
                    title='video'
                  />
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </StyledMusic>
  )
}


