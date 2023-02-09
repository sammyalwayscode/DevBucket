import React from "react";
import styled from "styled-components";

const Home2 = () => {
  return (
    <Container>
      <Wrapper>
        <TextDiv>
          <FeatSmall>Features</FeatSmall>
          <SndTitle>Our people make the difference</SndTitle>
          <SndContant>
            At any time, you can contact our support center for help, because we
            won over 100 clients.
          </SndContant>
          <SatisticRec>
            <SastNumDisHold>
              <SastNum>99%</SastNum>
              <SastDisc>Average Rating</SastDisc>
            </SastNumDisHold>
            <SastNumDisHold>
              <SastNum>24/7</SastNum>
              <SastDisc>Support</SastDisc>
            </SastNumDisHold>
            <SastNumDisHold>
              <SastNum>5000+</SastNum>
              <SastDisc>Clients</SastDisc>
            </SastNumDisHold>
          </SatisticRec>
        </TextDiv>
        <ImageDiv>
          <ImgBox>
            <ImgMain src="/image/art1.png" alt="" />
          </ImgBox>
        </ImageDiv>
      </Wrapper>
    </Container>
  );
};

export default Home2;

const Container = styled.div`
  /* height: 100%; */
  width: 100%;
  /* min-height: 90vh; */
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  position: relative;
  /* overflow: hidden; */
  /* background-color: red; */
  padding-bottom: 100px;

  @media screen and (max-width: 500px) {
    padding-bottom: 80px;
  }

  ::before {
    content: "Every";
    color: #377dff;
    position: absolute;
    height: 78px;
    width: 1100px;
    background-color: #377dff;
    border-radius: 0 100px 0 100px;
    top: 15px;
  }

  @media screen and (max-width: 900px) {
    min-height: 40vh;
  }
  @media screen and (max-width: 1100px) {
    ::before {
      display: none;
    }
    ::after {
      display: none;
    }
  }
  /* @media screen and (min-width: 1400px) {
    ::before {
      display: none;
    }
    ::after {
      display: none;
    }
  } */
`;
const Wrapper = styled.div`
  width: 1100px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  /* @media screen and (max-width: 1100px); */
`;

const ImageDiv = styled.div`
  width: 500px;
  /* background-color: red; */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  margin-top: -30px;

  @media screen and (max-width: 1100px) {
    margin-top: 50px;
    width: 300px;
  }
`;
const ImgBox = styled.div`
  height: 320px;
  width: 300px;
  background-color: ${(props) => props.theme.pageBackground};
  border-radius: 12px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;
const ImgMain = styled.img`
  width: 300px;
  margin-top: -40px;
`;
const TextDiv = styled.div`
  max-width: 400px;
  margin-left: 50px;
  /* background-color: royalblue; */
  z-index: 1;

  @media screen and (max-width: 900px) {
    margin-left: 20px;
  }
  @media screen and (max-width: 400px) {
    margin-left: 0;
  }
  @media screen and (max-width: 500px) {
    /* margin-bottom: 50px; */
  }
  @media screen and (max-width: 750px) {
    margin-top: 0;
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-bottom: 50px;
  }
`;
const FeatSmall = styled.div`
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
  margin-top: -50px;
  margin-bottom: 15px;
  @media screen and (max-width: 1100px) {
    margin: 0;
  }
`;
const SndTitle = styled.div`
  font-size: 30px;
  font-weight: 600;
  margin-bottom: 25px;
  line-height: 35px;
  color: #fff;
  @media screen and (max-width: 1100px) {
    margin-bottom: 15px;
    color: ${(props) => props.theme.textColor};
  }
`;
const SndContant = styled.div`
  max-width: 360px;
  line-height: 27px;
  margin-bottom: 15px;
`;
const SatisticRec = styled.div`
  max-width: 350px;
  /* background-color: red; */
  display: flex;
  justify-content: space-between;
`;
const SastNumDisHold = styled.div``;
const SastNum = styled.div`
  font-size: 35px;
  font-weight: bold;
  color: #377dff;
  @media screen and (max-width: 500px) {
    font-size: 29px;
  }
`;
const SastDisc = styled.div`
  font-size: 12px;
  font-weight: 500;
`;
