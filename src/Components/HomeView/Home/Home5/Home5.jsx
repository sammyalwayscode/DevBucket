import React from "react";
import styled from "styled-components";

const Home5 = () => {
  return (
    <Container>
      <Wrapper>
        <SmallPat>PARTNERS</SmallPat>
        <PatText>
          Trusted by more than 5,000 businesses in 122 countries.
        </PatText>
        <CompinesHold>
          <Comp1>Comp</Comp1>
          <Comp1>Comp</Comp1>
          <Comp1>Comp</Comp1>
          <Comp1>Comp</Comp1>
          <Comp1>Comp</Comp1>
          <Comp1>Comp</Comp1>
        </CompinesHold>
      </Wrapper>
    </Container>
  );
};

export default Home5;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding-bottom: 100px;
`;
const Wrapper = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
`;
const SmallPat = styled.div`
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
  margin-bottom: 10px;
`;
const PatText = styled.div`
  font-weight: 700;
  margin-bottom: 40px;
  @media screen and (max-width: 700px) {
    text-align: center;
  }
`;
const CompinesHold = styled.div`
  width: 650px;
  /* height: 60px; */
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  border-radius: 5px;
  background: ${(props) => props.theme.compGradent};
  @media screen and (max-width: 700px) {
    width: 400px;
  }
  @media screen and (max-width: 420px) {
    width: 300px;
  }
`;
const Comp1 = styled.div`
  margin: 20px 10px;
`;
