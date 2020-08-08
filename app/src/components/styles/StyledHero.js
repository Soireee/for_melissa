import styled from 'styled-components';

export const StyledHero = styled.div`
.hero-backImg {
  height: 100vh;
  background: linear-gradient(
    185deg,
    rgba(255, 255, 255, 1),
    rgba(250, 240, 243, 0.9),
    rgba(248, 205, 199, 0.9),
    rgba(245, 152, 142, 0.8),
    rgba(239, 128, 117, 0.7)
  )
  0 0 / 1000% no-repeat,
  0 0 / cover no-repeat;
  animation: gradientAnimation 60s ease infinite;
}

@keyframes gradientAnimation {
  0% { background-position: 50% 30%, 0 0; }
  50% { background-position: 100% 0%, 0 0; }
  100% { background-position: 80% 30%, 0 0; }
}

.hero-container {
  display: flex;
  max-width: 1280px;
  padding-top: 2vh;
}

.hero-melissa {
  max-width: 440px;
  max-height: 70vh;
  margin-top: 65px;
  width: 35%;
}

.hero-melissa-img {
  height: 100%;
  width: 100%;
  object-fit: contain;
}

.chatbot-section {
  width: 35%;
  height: 400px;
  background: #ffffff;
  margin-bottom: 80px;
  position: relative;
  transform: translate(-16px, 127px);
}

.chatbot-container {
  margin-top: 40px;
  width: 300px;
  height: 300px;
  background: orange;
}

.tw-section {
  width: 30%;
}

.tw-container {
  margin-top: 100px;
}

.tw-header {

}

.tw-header-text {
  font-size: 30px;
  font-weight: 400;
  color: #EF8075;
  letter-spacing: .05em;
}

.hero-news-section {
  position: absolute;
  bottom: 0;
  right: 0;
  height: 40px;
  margin-left: auto;
  max-width: 510px;
  width: 100%;
}

.hero-news-section a {
  padding-bottom: 2px;
  margin-bottom: 2px;
  text-decoration-color: #FDF0EF;
  text-underline-position: under;
}

.hero-news-topic {
  background: #ffffff;
  color: #EF8075;
  border-radius: 12px;
}

.hero-news-container {
  display: flex;
  position: absolute;
  bottom: 15px;
  right: 0;
}

.hero-news-container p {
  color: #EF8075;
  letter-spacing: .05em;
  font-weight: bold;
  padding: 0 10px;
  margin-block-start: 0;
  margin-block-end: 0;
}

.hero-news-content p {
  color: #ffffff;
}

@media screen and (max-width: 780px) {
  max-width: 1280px;
  min-height: 0px;
  .header-center-text {
    font-size: 18px;
    left: 5%
  }
}
`;