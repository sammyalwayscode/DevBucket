import React from "react";
import styled from "styled-components";

const Home4 = (props) => {
  return (
    <Container>
      <Wrapper>
        <TextDiv>
          <FeatSmall>Features</FeatSmall>
          <SndTitle>Deliver instant answers with knowledge base</SndTitle>
          <SndContant>
            <FirstCont>
              Create and publish answers for customers and reduce your customer
              support volume by at least 20%. Happier customers, fewer
              conversations - everyone wins.
            </FirstCont>
            <IconSubTopic>
              <SbIcon src="/image/qust.png" />
              <SbTopic1>Lunch a help center website</SbTopic1>
            </IconSubTopic>
            <SndCont>
              Your knowledge base software has an auto-generated sitemap and
              configurable SEO options for each article.
            </SndCont>
            <IconSubTopic2>
              <SbIcon2 src="/image/check.png" />
              <SbTopic2>Deliver Instant answers</SbTopic2>
            </IconSubTopic2>
            <TrdContent>
              Your knowledge base software has an auto-generated sitemap and
              configurable SEO options for each article.
            </TrdContent>
          </SndContant>
        </TextDiv>
        <ImageDiv>
          <ImgBox>
            <ImgMain src="/image/art3.png" alt="" />
          </ImgBox>
        </ImageDiv>
      </Wrapper>
    </Container>
  );
};

export default Home4;

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
  padding-bottom: 150px;

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
  margin-top: -90px;

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
  width: 272px;
  margin-top: -40px;
  margin-left: 10px;
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
    max-width: 280px;
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
  margin-top: -22px;
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
`;

const FirstCont = styled.div`
  font-size: 15px;
  margin-bottom: 10px;
`;
const IconSubTopic = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  @media screen and (max-width: 750px) {
    justify-content: center;
  }
`;
const SbIcon = styled.img`
  width: 25px;
  margin-right: 15px;
`;
const SbTopic1 = styled.div`
  font-weight: bold;
`;
const IconSubTopic2 = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  @media screen and (max-width: 750px) {
    justify-content: center;
  }
`;
const SbIcon2 = styled.img`
  width: 25px;
  margin-right: 15px;
`;
const SbTopic2 = styled.div`
  font-weight: bold;
`;
const SndCont = styled.div`
  font-size: 15px;
  margin-bottom: 10px;
`;
const TrdContent = styled.div`
  font-size: 15px;
  line-height: normal;
`;
