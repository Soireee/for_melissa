import styled from 'styled-components';

export const StyledHeader = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Caveat&display=swap');
border-radius: 16px;
background: #F5F5F5;
box-shadow:  -10px 10px 23px #dadada, 
             10px -10px 23px #ffffff;
color: #919191;

.header-content {
  width: 100%;
  display: flex;
  align-items: center;
  position: fixed;
  padding-top: 10px;
}

.header-right {
  margin-left: auto;
}

.header-right ul {
  display: flex;
  list-style: none;
}
.header-left a, .header-right a {
  display: inline-block;
  padding: 10px 30px;
  list-style: none;
  text-decoration: none;
}

.header-right {
  display: inline-block
}

.header-logo {
  font-family: Caveat, cursive, sans-serif;
  font-size: 28px;
  color: #EF8075;
  font-weight: bold;
}

.header-right a {
  color: #EF8075;

}

.header-sns {
  position: fixed;
  right: 0;
  border: 1px solid #EF8075;
  width: 70px;
  height: 160px;
  padding: 20px 30px;
  margin: auto;
  z-index: 20;
  margin: 0;
  padding: 0;
  list-style: none;
  transform: translate(290px, 150px);
}

.header-sns ul {
  margin: 0;
  padding: 0;
  list-style: none;
  transform: translateX(-290px);
}

.header-sns-link {
  display: block;
  width: 305px;
  margin: 10px 0 auto 10px 0;
  text-align: left;
  transition: all 1s;
  text-align: right;
  border-radius: 50px;
  text-align: left;
  border: 1px solid #EF8075;
  height: 70px;
  margin 0 auto 24px;
}

.header-sns-link:hover {
  transform: translate(-110px, 0);
  background: #EF8075;
}

.header-sns-link svg {
  font-size: 50px;
  width: 30px;
  height: 30px;
  margin: 12px 0 0 4px;
  padding: 8px;
  transform: rotate(0deg);
  color: #EF8075;
  border-radius: 50%;
  background: #ffffff;
}

.header-sns-link svg:hover {
  transition: all .5s;
  transform: rotate(360deg);
  color: #EF8075;
  background: white;
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