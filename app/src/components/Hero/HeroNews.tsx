import React from 'react'
import { Link } from "react-router-dom";

export const HeroNews = () => {
  return (
    <div className="hero-news-section">
      <Link to="/" className="hero-news-container">
        <div className="hero-news-topic">
          <p className="hero-news-topic-text">Melissa通信:</p>
        </div>
        <div className="hero-news-content">
          <p className="hero-news-content-text">新曲「夜に駆ける」がリリースされました！</p>
        </div>
      </Link>
    </div>
  )
}