import React from "react";
import styled from "styled-components";

const CategoriesStat = () => {
  return (
    <Container>
      <Wrapper>
        <CateCards>Projects</CateCards>
        <CateCards>BestedddProjects</CateCards>
        <CateCards>Recomendations</CateCards>
        <CateCards>Git</CateCards>
        <CateCards>Reletated</CateCards>
        <CateCards>Angled</CateCards>
        <CateCards>GitRepositeries</CateCards>
      </Wrapper>
    </Container>
  );
};

export default CategoriesStat;

const Container = styled.div`
  height: 50px;
  width: 100%;
  border-bottom: 1px solid lightgray;
  display: flex;
  justify-content: center;
`;
const Wrapper = styled.div`
  width: 85%;
  display: flex;
  align-items: center;
  overflow-x: scroll;

  ::-webkit-scrollbar {
    display: none;
  }
`;
const CateCards = styled.button`
  height: 30px;
  border: 1px solid lightgray;
  background-color: transparent;
  font-family: Montserrat;
  margin: 0 10px;
  border-radius: 3px;
  cursor: pointer;
  transition: all 350ms;

  :hover {
    transform: scale(0.97);
  }
`;
