import React from 'react'
import { StyledNews } from "../styles/StyledNews"
import melissa_contact from '../images/melissa_contact@2x.png'

export const Contact = () => {
  const melissa_backImg = {backgroundImage:`url(${melissa_contact})`}
  const newsContent = [
    {
      id: 1,
      dateString: "2020年07月30日",
      tag: "Melissa通信",
      description: "新曲「その手の中にあるものは」がリリースされました！"
    },
    {
      id: 2,
      dateString: "2020年08月01日",
      tag: "Melissa通信",
      description: "アーカイブ「今日もあさかつしていくぞーーー！」がyoutubeに上がりました！"
    },
    {
      id: 3,
      dateString: "2020年08月06日",
      tag: "Melissa通信",
      description: "アーカイブ「今日は、初アーカイブ「今日は、初めてのあさかつしていくぞーーー！」がyoutubeに上がりました！アーカイブ「今日は、初めてのあさかつしていくぞーーー！」がyoutubeに上がりました！めてのあさかつしていくぞーーー！」がyoutubeに上がりました！"
    },
    {
      id: 4,
      dateString: "2020年08月09日",
      tag: "Melissa通信",
      description: "アーカイブ「今日は、初めてのあさかつしていくぞーーー！」がyoutubeに上がりました！"
    },
    {
      id: 5,
      dateString: "2020年11月11日",
      tag: "Melissa通信",
      description: "新曲「夜に駆ける」がリリースされました！"
    }
  ]
  const newsList = newsContent.map(news => {
    return (
      <li className="news-item" key={news.id}>
        <a href="/" className="news-item-link">
          <div className="news-item-box">
            <p className="news-date">{news.dateString}</p>
            <p className="news-tag">{news.tag}</p>
          </div>
          <p className="news-content">{news.description}</p>
        </a>
      </li>
    )
  })
  return (
    <StyledNews>
      <section className="news-section">
        <div style={melissa_backImg} className="news-backImg">
          <div className="news-container">
            <div className="news-header-container">
              <div className="news-header">
                <h2 className="news-header-text">CONTACT</h2>
              </div>
            </div>
            <div className="news-wrapper">
              <div className="news-wrap">
                <ul className="news-list">
                  {newsList}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </StyledNews>
  )
}


