import React from "react";
import styled from "styled-components";

const Home3 = () => {
  return (
    <Container>
      <Wrapper>
        <ForImg>
          <ImgBox>
            <ImgMain src="/image/art2.png" />
          </ImgBox>
        </ForImg>

        <ForText>
          <SmallText>Features</SmallText>
          <TextTitle>Connect the tools you already use</TextTitle>
          <TextContent>
            Our extensive developers tool might also strike your fantancy
          </TextContent>
          <ToolsHold>
            <ToolBox1>Tool 1</ToolBox1>
            <ToolBox>Tool 2</ToolBox>
            <ToolBox>Tool 3</ToolBox>
            <ToolBox>Tool 4</ToolBox>
          </ToolsHold>
        </ForText>
      </Wrapper>
    </Container>
  );
};

export default Home3;

const Container = styled.div`
  width: 100%;
  /* min-height: 80vh; */
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  position: relative;
  /* overflow: hidden; */
  margin-bottom: 180px;
  @media screen and (max-width: 700px) {
    margin-bottom: 80px;
  }

  ::before {
    content: "Every";
    color: #377dff;
    position: absolute;
    height: 78px;
    width: 1100px;
    background-color: #377dff;
    border-radius: 0 100px 0 100px;
    top: 150px;
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
  z-index: 1;
  /* background-color: rosybrown; */

  @media screen and (max-width: 500px) {
    justify-content: center;
  }
  @media screen and (max-width: 750px) {
    flex-direction: column-reverse;
  }
`;
const ForImg = styled.div`
  width: 300px;
  /* background-color: red; */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  margin-top: 120px;
  margin-right: 50px;

  @media screen and (max-width: 1100px) {
    margin-top: 50px;
    width: 300px;
  }
  @media screen and (max-width: 1100px) {
    margin-right: 0;
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
  width: 290px;
  margin-top: -65px;
`;

const ForText = styled.div`
  max-width: 400px;
  /* background-color: royalblue; */
  z-index: 1;
  margin-top: 70px;

  @media screen and (max-width: 400px) {
    margin-left: 0;
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
const SmallText = styled.div`
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
  margin-top: 40px;
  margin-bottom: 15px;
  @media screen and (max-width: 1100px) {
    margin: 0;
  }
`;
const TextTitle = styled.div`
  font-size: 30px;
  font-weight: 600;
  margin-bottom: 10px;
  line-height: 35px;
  color: #fff;
  @media screen and (max-width: 1100px) {
    color: ${(props) => props.theme.textColor};
  }
`;
const TextContent = styled.div`
  max-width: 360px;
  line-height: 27px;
  margin-bottom: 10px;
  @media screen and (max-width: 500px) {
    width: 300px;
  }
`;
const ToolsHold = styled.div`
  max-width: 300px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const ToolBox = styled.div`
  height: 50px;
  width: 130px;
  background: ${(props) => props.theme.gradentBackground};
  margin: 10px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 7px;
  font-weight: 700;
`;
const ToolBox1 = styled.div`
  height: 50px;
  width: 130px;
  background-color: #377dff;
  margin: 10px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 7px;
  font-weight: 700;
`;
