import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <FootOne>
          <FootLogo>Dev-Bucket</FootLogo>
          <FootMotto>
            Ready to help manage your projects along with our well-designed
            pages
          </FootMotto>
          <FootSocial>
            <div>FB</div>
            <div>IG</div>
            <div>Tweet</div>
            <div>Dribble</div>
          </FootSocial>
        </FootOne>
        <FootTwo>
          <FootTwoHold>
            <FootTitle>Home</FootTitle>
            <FootNav>Saas</FootNav>
            <FootNav>Event</FootNav>
            <FootNav>Mobile App</FootNav>
            <FootNav>Desktop App</FootNav>
            <FootNav>Startup</FootNav>
          </FootTwoHold>
          <FootTwoHold>
            <FootTitle>About Us</FootTitle>
            <FootNav>Pricing</FootNav>
            <FootNav>Career</FootNav>
            <FootNav>Contact</FootNav>
            <FootNav>Blog</FootNav>
          </FootTwoHold>
          <FootTwoHold>
            <FootTitle>Account</FootTitle>
            <FootNav>Sign Up</FootNav>
            <FootNav>Sign In</FootNav>
            <FootNav>Forgot Password</FootNav>
          </FootTwoHold>
          <FootTwoHold>
            <FootTitle>Get Help</FootTitle>
            <FootNav>Developers Help</FootNav>
            <FootNav>Docs</FootNav>
            <FootNav>Free Training</FootNav>
            <FootNav>Contact Sales</FootNav>
          </FootTwoHold>
        </FootTwo>
      </Wrapper>
      <Developer>
        @devbucket 2021 - concept created by Olorunda Samuel
      </Developer>
    </Container>
  );
};

export default Footer;

const Container = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.footerBgColor};
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.div`
  width: 1100px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  margin: 50px 0;
`;
const FootOne = styled.div`
  width: 250px;
  @media screen and (max-width: 800px) {
    margin-bottom: 30px;
  }
  @media screen and (max-width: 500px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-bottom: 30px;
  }
`;
const FootLogo = styled.div`
  font-weight: 700;
  margin-bottom: 20px;
  color: ${(props) => props.theme.footerTextTitleColor};
`;
const FootMotto = styled.div`
  font-size: 13px;
  margin-bottom: 25px;
  color: ${(props) => props.theme.footerTextNavColor};
  @media screen and (max-width: 500px) {
    text-align: center;
  }
`;
const FootSocial = styled.div`
  display: flex;
  color: #707070;
`;
const FootTwo = styled.div`
  width: 600px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  @media screen and (max-width: 610px) {
    width: 310px;
    /* justify-content: center; */
    align-items: center;
    flex-direction: column;
  }
`;
const FootTwoHold = styled.div`
  @media screen and (max-width: 500px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    /* background-color: brown; */
    margin-bottom: 9px;
  }
`;
const FootTitle = styled.div`
  font-size: 13px;
  font-weight: 600;
  padding-bottom: 8px;
  color: ${(props) => props.theme.footerTextTitleColor};
`;
const FootNav = styled.div`
  font-size: 12px;
  margin: 10px 0;
  color: ${(props) => props.theme.footerTextNavColor};
  @media screen and (max-width: 500px) {
    margin: 5px 0;
  }
`;

const Developer = styled.div`
  font-weight: 500;
  font-size: 10px;
  margin-bottom: 10px;
  color: #77838f;
`;
