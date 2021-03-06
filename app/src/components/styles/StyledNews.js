import styled from 'styled-components';

export const StyledNews = styled.div`
background: #F6F6F6;

.news-section {
  padding-bottom: 10px;
}

.news-section {
  max-width: 1280px;
  margin: 0 auto;
}
.news-container {
  max-width: 1080px;
  margin: 0 auto;
  padding-top: 100px;
}

.news-header-container {
  margin-bottom: 170px;
}

.news-header {
}

.news-header-text {
  font-size: 70px;
  font-weight: 400;
  color: #EF8075;
  letter-spacing: .05em;
}

.news-backImg {
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  height: 100vh;
  margin: 0 auto;
}

.news-list {

}

.news-item {
  list-style: none;
  margin-bottom: 60px;
}

.news-item-link {
  display: flex;
  text-decoration: none;
}

.news-item-box {
  display: flex;
}

.news-item p {
  font-size: 16px;
  font-weight: 600;
  letter-spacing: .05em;
  margin-right: 20px;
}

.news-date, .news-content {
  color: #3A3547;
}

.news-date, .news-tag {
  white-space: nowrap;
}

.news-tag {
  background: white;
  padding: 6px 20px;
  margin-top: -6px;
  color: #FB8075;
  border-radius: 30px;
  opacity: .8;
  max-height: 16px;
}

.news-content {
  line-height: 1.32;
}

// @keyframes gradientAnimation {
//   0% { background-position: 50% 30%, 0 0; }
//   50% { background-position: 100% 0%, 0 0; }
//   100% { background-position: 80% 30%, 0 0; }
// }

`;