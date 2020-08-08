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

}
.hero-melissa {
  max-width: 480px;
  padding: 100px 40px;
}

.hero-melissa-img {
  max-height: 95vh;
  height: 100%;
  width: 100%;
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