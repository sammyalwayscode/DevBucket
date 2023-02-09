import React from "react";
import styled from "styled-components";

const CardComp = (props) => {
  return (
    <Container>
      <Wrapper>
        <IconDiv>
          <IconImg src="/image/Product-Icons.png" alt="" />
        </IconDiv>
        <CardTitle>Accounts</CardTitle>
        <CardContent>
          Manage an unlimited number of account from one place
        </CardContent>
      </Wrapper>
    </Container>
  );
};

export default CardComp;

const Container = styled.div`
  height: 210px;
  width: 180px;
  /* background-color: grey; */
  display: flex;
  margin: 10px;
  justify-content: center;
  align-items: center;
  border-radius: 7px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  background-color: ${(props) => props.theme.pageBackground};
  font-family: Montserrat;
  transition: all 350ms;
  transform: scale(1);
  :hover {
    transform: scale(1.06);
  }

  @media screen and (max-width: 400px) {
    width: 300px;
  }
`;
const Wrapper = styled.div`
  width: 150px;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  @media screen and (max-width: 400px) {
    width: 270px;
  }
`;
const IconDiv = styled.div`
  height: 60px;
  width: 60px;
  background-color: rgba(69, 121, 245, 8%);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;
const IconImg = styled.img`
  width: 40px;
  object-fit: cover;
`;
const CardTitle = styled.div`
  font-weight: bold;
  font-size: 17px;
  margin-bottom: 10px;
  @media screen and (max-width: 400px) {
    font-size: 19px;
  }
`;
const CardContent = styled.div`
  font-size: 13px;
  @media screen and (max-width: 400px) {
    font-size: 15px;
  }
`;
