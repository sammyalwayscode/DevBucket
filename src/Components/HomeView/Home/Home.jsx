import React from "react";
import styled from "styled-components";
import CardComp from "../CardComp/CardComp";

const Home = (props) => {
  return (
    <Container>
      <Wrapper>
        <TextDiv>
          <WelcomeSml>Welcome</WelcomeSml>
          <TextTitle>Ready to help you in your projects!</TextTitle>
          <TextContent>
            Our sales team will get in touch to better understand your needs,
            and will help you with the sign-up process
          </TextContent>
          <ButtonCtrl>
            <TextBtn>Start Now</TextBtn>
            <TextBtn>Contact Sales</TextBtn>
          </ButtonCtrl>
        </TextDiv>
        <CardDiv>
          <CardComp />
          <CardComp theme={props.theme} setTheme={props.setTheme} />
          <CardComp theme={props.theme} setTheme={props.setTheme} />
          <CardComp theme={props.theme} setTheme={props.setTheme} />
          <CardComp theme={props.theme} setTheme={props.setTheme} />
          <CardComp theme={props.theme} setTheme={props.setTheme} />
        </CardDiv>
      </Wrapper>
    </Container>
  );
};

export default Home;

const Container = styled.div`
  /* height: 100vh;
  min-height: 100vh; */
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  position: relative;
  /* font-family: Montserrat;
  background-color: ${(props) => props.theme.pageBackground};
  color: ${(props) => props.theme.textColor}; */
  /* overflow: hidden; */
  /* margin: 50px 0; */
  margin-bottom: 200px;

  ::before {
    content: "Every";
    color: #377dff;
    position: absolute;
    height: 78px;
    width: 1100px;
    background-color: #377dff;
    border-radius: 0 100px 0 100px;
    top: 60px;
  }

  ::after {
    content: "Man";
    color: #377dff;
    position: absolute;
    height: 78px;
    width: 670px;
    background-color: #377dff;
    bottom: 60px;
    right: 125px;
    border-radius: 0 0 100px 100px;
  }

  @media screen and (max-width: 900px) {
    height: 100%;
    min-height: 70vh;
    margin-bottom: 50px;
  }
  @media screen and (max-width: 1100px) {
    ::before {
      display: none;
    }
    ::after {
      display: none;
    }
  }
  @media screen and (min-width: 1400px) {
    /* ::before {
      display: none;
    } */
    ::after {
      display: none;
    }
  }
`;
const Wrapper = styled.div`
  max-width: 1100px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
  z-index: 1;

  @media screen and (max-width: 1100px) {
    justify-content: center;
  }
`;
const CardDiv = styled.div`
  max-width: 600px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin-right: 30px;
  /* background-color: rosybrown; */
  @media screen and (max-width: 900px) {
    justify-content: center;
    margin-right: 0;
  }
`;
const TextDiv = styled.div`
  max-width: 400px;
  margin-left: 50px;
  /* background-color: royalblue; */
  @media screen and (max-width: 900px) {
    margin-left: 20px;
  }
`;
const WelcomeSml = styled.div`
  height: 24px;
  width: 74px;
  background-color: rgba(69, 121, 245, 8%);
  font-size: small;
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  color: #4579f5;
  margin-top: -120px;
  margin-bottom: 6px;
  @media screen and (max-width: 1100px) {
    margin: 0;
  }
`;
const TextTitle = styled.div`
  font-size: 32px;
  font-weight: 600;
  margin-bottom: 37px;
  line-height: 35px;
  color: #fff;

  @media screen and (max-width: 1100px) {
    margin-bottom: 15px;
    color: ${(props) => props.theme.textColor};
  }
`;
const TextContent = styled.div`
  max-width: 360px;
  line-height: 27px;
  margin-bottom: 25px;
`;
const ButtonCtrl = styled.div`
  width: 260px;
  /* background-color: pink; */
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const TextBtn = styled.button`
  height: 34px;
  width: 120px;
  background-color: #377dff;
  border: none;
  border-radius: 5px;
  color: #fff;
  font-size: 12px;
  font-weight: 600;
  font-family: Montserrat;
  transition: all 350ms;
  transform: scale(1);

  :hover {
    transform: scale(0.94);
  }
`;
