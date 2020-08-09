import styled from 'styled-components';

export const StyledMusic = styled.div`
background: #F6F6F6;

.music-section {
  padding-bottom: 10px;
}

.music-section {
  max-width: 1280px;
  margin: 0 auto;
}
.music-container {
  max-width: 1080px;
  margin: 0 auto;
  padding-top: 100px;
}

.music-header-container {
  margin-bottom: 170px;
}

.music-header {
}

.music-header-text {
  font-size: 70px;
  font-weight: 400;
  color: #EF8075;
  letter-spacing: .05em;
}

.music-backImg {
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  height: 100vh;
  margin: 0 auto;
}

.music-list {

}

.music-item {
  list-style: none;
  margin-bottom: 60px;
}

.music-item-link {
  display: flex;
  text-decoration: none;
}

.music-item-box {
  display: flex;
}

.music-item p {
  font-size: 16px;
  font-weight: 600;
  letter-spacing: .05em;
  margin-right: 20px;
}

.music-date, .music-content {
  color: #3A3547;
}

.music-date, .music-tag {
  white-space: nowrap;
}

.music-tag {
  background: white;
  padding: 6px 20px;
  margin-top: -6px;
  color: #FB8075;
  border-radius: 30px;
  opacity: .8;
  max-height: 16px;
}

.music-content {
  line-height: 1.32;
}

// @keyframes gradientAnimation {
//   0% { background-position: 50% 30%, 0 0; }
//   50% { background-position: 100% 0%, 0 0; }
//   100% { background-position: 80% 30%, 0 0; }
// }

`;