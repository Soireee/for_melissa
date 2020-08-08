import styled from 'styled-components';

export const StyledContact = styled.div`
background: #F6F6F6;
.news-section {
  padding-bottom: 80px;
}
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

.news-section {

}

.news-container {
  max-width: 1280px;
  padding-top: 2vh;
}
.news-backImg {
  background-size: contain;
  width: 100%;
  height: 100vh;
}

@keyframes gradientAnimation {
  0% { background-position: 50% 30%, 0 0; }
  50% { background-position: 100% 0%, 0 0; }
  100% { background-position: 80% 30%, 0 0; }
}

`;