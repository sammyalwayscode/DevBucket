import React from "react";
import styled from "styled-components";

const OnboardingFour = () => {
  return (
    <Container>
      <Wrapper>
        <TopBoard>
          <TextDiv>
            <Title>Keep track of all projects at your comfort</Title>
            <p>
              Fusce at nisi eget dolor rhoncus facilisis. Mauris ante nisl,
              consectetur et luctus et, porta ut dolor. Curabitur ultricies
              ultrices nulla. Morbi blandit nec est vitae dictum.
            </p>

            <p>
              Etiam vel consectetur diam. Maecenas vitae egestas dolor. Fusce
              tempor magna at tortor aliquet finibus. Sed eu nunc sit amet elit
              euismod faucibus.
            </p>
            <Button>Get Started</Button>
          </TextDiv>
          <ImageDiv>
            <img src="/image/3dfour.png" alt="" />
          </ImageDiv>
        </TopBoard>
        <ButtomBoard>
          <Circle />
          <Circle />
          <Circle />
          <ActiveCircle />
        </ButtomBoard>
      </Wrapper>
    </Container>
  );
};

export default OnboardingFour;

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  align-items: center;
  background-color: ${(props) => props.theme.pageBackground};
  color: ${(props) => props.theme.textColor};
`;
const Wrapper = styled.div`
  width: 85%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  @media (max-width: 500px) {
    width: 90%;
  }
`;
const TopBoard = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 900px) {
    justify-content: center;
    flex-direction: column-reverse;
  }
`;
const ButtomBoard = styled.div`
  display: flex;
  width: 70px;
  justify-content: space-between;
  margin-top: 30px;
  margin-bottom: 20px;
`;
const ImageDiv = styled.div`
  img {
    width: 500px;
  }

  @media (max-width: 500px) {
    img {
      width: 100%;
    }
  }
`;
const TextDiv = styled.div`
  width: 400px;
  text-align: right;
  @media (max-width: 500px) {
    width: 100%;
  }
  @media (max-width: 900px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* align-items: center; */
    text-align: center;
  }
  p {
    font-size: 15px;
  }
`;
const Title = styled.div`
  font-size: 27px;
  font-weight: 800;
  @media (max-width: 500px) {
    font-size: 25px;
  }
`;

const Button = styled.button`
  padding: 10px 70px;
  background-color: #377dff;
  border-radius: 5px;
  outline: none;
  border: 0;
  font-weight: 800;
  color: #fff;
  font-family: Montserrat;
  cursor: pointer;
`;

const Circle = styled.div`
  height: 10px;
  width: 10px;
  background-color: #fff;
  border-radius: 50%;
  cursor: not-allowed;
`;

const ActiveCircle = styled.div`
  height: 10px;
  width: 20px;
  background-color: #fff;
  border-radius: 20px;
  background-color: #377dff;
`;
