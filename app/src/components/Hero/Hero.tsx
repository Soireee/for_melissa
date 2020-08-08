import React from "react";
import { StyledHero } from '../styles/StyledHero'

export const Hero = () => {
  return (
    <StyledHero>
      <section className="hero-section">
        <div className="hero-backImg">
          <div className="hero-container">
            <div className="hero-melissa">
              <img className="hero-melissa-img" src={`${process.env.PUBLIC_URL}/melissa_hero.png`} alt="Logo" />
            </div>
          </div>
        </div>
      </section>
    </StyledHero>
  );
};