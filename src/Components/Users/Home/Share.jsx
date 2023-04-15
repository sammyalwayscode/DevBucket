import React from "react";
import styled from "styled-components";

const Share = () => {
  return (
    <Container>
      <Wrapper>
        <UploadsHold>
          <UploadImageDiv>
            <img src="/image/test.png" alt="" />
          </UploadImageDiv>
          <OtherInputDiv>
            <Title>Share One Of your Best Work</Title>
            <InputDiv>
              <ImageBtn>Upload Your Image</ImageBtn>
            </InputDiv>
            <InputDiv>
              <span>Project Title</span>
              <input type="text" placeholder="Give your project a title" />
            </InputDiv>
            <InputDiv>
              <span>Description Title</span>
              <input type="text" placeholder="What you'll love to talk about" />
            </InputDiv>
            <InputDiv>
              <span>Project Description</span>
              <textarea placeholder="Tell us about your project" />
            </InputDiv>
            <InputDiv>
              <span>More Description...</span>
              <textarea placeholder="More about the project" />
            </InputDiv>
            <InputDiv>
              <span>GitHub Repo Link</span>
              <input type="text" placeholder="Link Project to GitHub" />
            </InputDiv>
            <InputDiv>
              <span>Live URL</span>
              <input type="text" placeholder="The Live Link Of Your Project" />
            </InputDiv>

            <ButtonHold>
              <Button>Cancle</Button>
              <Button>Publish</Button>
            </ButtonHold>
          </OtherInputDiv>
        </UploadsHold>
      </Wrapper>
    </Container>
  );
};

export default Share;

const Container = styled.div`
  width: 100%;
  background-color: #f9f9f9;
  min-height: calc(100vh - 90px);
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.div`
  width: 70%;
  height: 70vh;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
    rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
  display: flex;
  justify-content: center;
  align-items: center;

  flex-wrap: wrap;

  @media (max-width: 800px) {
    width: 100%;
  }

  @media (max-width: 500px) {
    flex-direction: column;
  }
`;
const Title = styled.div`
  font-weight: 800;
  margin: 20px 0;
`;
const UploadsHold = styled.div`
  height: 95%;
  width: 98%;
  /* background-color: aliceblue; */
  display: flex;
  border: 1px solid lightgray;
`;
const UploadImageDiv = styled.div`
  width: 400px;
  height: 100%;
  background-color: #f8f8ff;
  border: 1px solid lightgray;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 800px) {
    display: none;
  }
`;
const OtherInputDiv = styled.div`
  width: 520px;
  /* background-color: aquamarine; */
  display: flex;
  overflow: scroll;
  flex-direction: column;
  align-items: center;

  @media (max-width: 800px) {
    width: 100%;
    overflow: auto;
  }
`;

const ImageBtn = styled.button`
  height: 35px;
  width: 400px;
  background-color: #377dff;
  color: #fff;
  border: none;
  transition: all 350ms;
  font-family: Montserrat;
  font-weight: 600;
  cursor: pointer;
  margin: 0 10px;
  @media (max-width: 400px) {
    width: 300px;
  }

  :hover {
    /* background-color: #f1f1f1; */
    transform: scale(0.97);
  }
`;

const InputDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
  input {
    height: 35px;
    width: 400px;
    border: 1px solid lightgray;
    outline: none;
    font-family: Montserrat;
    font-weight: 600;
    padding-left: 8px;

    @media (max-width: 400px) {
      width: 300px;
    }
  }

  span {
    font-size: 12px;
    font-weight: 600;
    margin-bottom: 5px;
  }

  textarea {
    height: 100px;
    width: 400px;
    resize: none;
    border: 1px solid lightgray;
    outline: none;
    font-family: Montserrat;

    @media (max-width: 400px) {
      width: 300px;
    }
  }
`;

const ButtonHold = styled.div`
  display: flex;
`;
const Button = styled.button`
  height: 35px;
  width: 150px;
  border-radius: 40px;
  background-color: transparent;
  border: 1px solid lightgray;
  transition: all 350ms;
  font-family: Montserrat;
  font-weight: 600;
  cursor: pointer;
  margin: 0 10px;

  @media (max-width: 400px) {
    width: 130px;
  }
  :hover {
    background-color: #f1f1f1;
    transform: scale(0.97);
  }
`;
