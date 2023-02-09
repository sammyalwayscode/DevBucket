import React from "react";
import styled from "styled-components";
import iconOne from "./resp.png";

const faqData = [
  {
    faqIconType: `${iconOne}`,
    faqTitle: "Cross Platform",
    faqContent:
      "Are you most often visited from mobile devices? No problem! Our template is fully responsive.",
  },
  {
    faqIconType: `${iconOne}`,
    faqTitle: "Cross Platform",
    faqContent:
      "Are you most often visited from mobile devices? No problem! Our template is fully responsive.",
  },
  {
    faqIconType: `${iconOne}`,
    faqTitle: "Cross Platform",
    faqContent:
      "Are you most often visited from mobile devices? No problem! Our template is fully responsive.",
  },
  {
    faqIconType: `${iconOne}`,
    faqTitle: "Cross Platform",
    faqContent:
      "Are you most often visited from mobile devices? No problem! Our template is fully responsive.",
  },
  {
    faqIconType: `${iconOne}`,
    faqTitle: "Cross Platform",
    faqContent:
      "Are you most often visited from mobile devices? No problem! Our template is fully responsive.",
  },
  {
    faqIconType: `${iconOne}`,
    faqTitle: "Cross Platform",
    faqContent:
      "Are you most often visited from mobile devices? No problem! Our template is fully responsive.",
  },
];

const Home6 = () => {
  return (
    <Container>
      <Wrapper>
        <Lap1>
          <FaqSmal>FAQ</FaqSmal>
          <QurstBig>What you should know</QurstBig>
          <SubFaq>
            Check out the key features of our template. They can help you create
            your first-class project.
          </SubFaq>
        </Lap1>
        <Lap2>
          {faqData.map((props) => (
            <SubLap key={props.id}>
              <SidIcon src={props.faqIconType} />
              <AllText>
                <Title> {props.faqTitle} </Title>
                <SubTitle>{props.faqContent}</SubTitle>
              </AllText>
            </SubLap>
          ))}
        </Lap2>
      </Wrapper>
    </Container>
  );
};

export default Home6;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding-bottom: 130px;
`;
const Wrapper = styled.div`
  width: 850px;
  display: flex;
  flex-flow: wrap column;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 850px) {
    width: 700px;
  }
`;
const Lap1 = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
`;
const FaqSmal = styled.div`
  height: 24px;
  width: 74px;
  background-color: rgba(69, 121, 245, 8%);
  font-size: 10px;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  color: #4579f5;
`;
const QurstBig = styled.div`
  font-weight: 800;
  font-size: 20px;
  margin-bottom: 50px;
`;
const SubFaq = styled.div`
  font-size: 12px;
  @media screen and (max-width: 600px) {
    text-align: center;
  }

  @media screen and (max-width: 400px) {
    max-width: 280px;
  }
`;
const Lap2 = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
const SubLap = styled.div`
  display: flex;
  align-items: flex-start;
  margin: 10px;
`;
const SidIcon = styled.img`
  width: 25px;
  margin-right: 15px;
`;
const AllText = styled.div`
  width: 180px;
`;
const Title = styled.div`
  font-size: 15px;
  font-weight: 700;
  margin-bottom: 8px;
`;
const SubTitle = styled.div`
  font-size: 13px;
`;
