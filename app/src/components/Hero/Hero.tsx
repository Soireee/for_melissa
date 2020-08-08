import React from "react";
import { StyledHero } from '../styles/StyledHero'
import { ChatBot } from './ChatBot'
import { Twitter } from './Twitter'
import { HeroNews } from './HeroNews'

export const Hero = () => {
  return (
    <StyledHero>
      <section className="hero-section">
        <div className="hero-backImg">
          <div className="hero-container">
            <div className="hero-melissa">
              <img className="hero-melissa-img" src={`${process.env.PUBLIC_URL}/melissa_hero.png`} alt="Logo" />
            </div>
            <ChatBot />
            <Twitter />
          </div>
          <HeroNews />
        </div>
      </section>
    </StyledHero>
  );
};