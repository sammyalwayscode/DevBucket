import React from "react";
import styled from "styled-components";
import { FiArrowLeftCircle } from "react-icons/fi";
import { NavLink } from "react-router-dom";

const SignUp = () => {
  return (
    <Container>
      <Wrapper>
        <InputPart>
          <IconTop to="/">
            <FiArrowLeftCircle />
          </IconTop>
          <SignInputHold>
            <SignTitle>Sign Up</SignTitle>
            <SignSubTitle>To Intract with your account</SignSubTitle>
            <InputForm>
              <InputDiv placeholder="Your Name" />
              <InputDiv placeholder="Email " />
              <InputDiv placeholder="Password" />
              <InputButton>Sign Up</InputButton>
            </InputForm>
            <HasAcc>
              Already has an account?{" "}
              <NavLink
                to="/signin"
                style={{
                  textDecoration: "none",
                }}
              >
                <span>Sign In</span>
              </NavLink>
            </HasAcc>
          </SignInputHold>
        </InputPart>
        <ImagePart>
          <ImgBoxHold>
            <ImgBox>
              <ImgMain src="/image/art3.png" />
            </ImgBox>
          </ImgBoxHold>
        </ImagePart>
      </Wrapper>
    </Container>
  );
};

export default SignUp;

const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Montserrat;
  background-color: ${(props) => props.theme.pageBackground};
`;
const Wrapper = styled.div`
  width: 55%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  @media (max-width: 800px) {
    justify-content: center;
  }
`;
const InputPart = styled.div``;
const ImagePart = styled.div`
  display: flex;
  flex-flow: column wrap;
  align-items: flex-end;
  @media (max-width: 800px) {
    display: none;
  }
`;
const IconTop = styled(NavLink)`
  font-size: 30px;
  text-decoration: none;
  color: ${(props) => props.theme.textColor};
`;
const SignInputHold = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
`;
const SignTitle = styled.div`
  font-size: 25px;
  font-weight: 700;
  color: ${(props) => props.theme.textColor};
`;
const SignSubTitle = styled.div`
  font-size: 12px;
  color: #77838f;
`;
const InputForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
`;
const InputDiv = styled.input`
  height: 45px;
  width: 280px;
  margin: 10px 0;
  border: none;
  outline: none;
  border-radius: 5px;

  background-color: #e8effc;
  ::placeholder {
    font-family: Montserrat;
    font-weight: 700;
    font-size: 13px;
    color: #377dff;
    padding-left: 20px;
  }
`;
const InputButton = styled.button`
  height: 40px;
  border: none;
  outline: none;
  font-family: Montserrat;
  font-weight: 700;
  color: #fff;
  background-color: #377dff;
  border-radius: 3px;
  margin-top: 10px;
`;
const HasAcc = styled.div`
  font-size: 12px;
  font-weight: 500;
  color: ${(props) => props.theme.textColor};
  span {
    color: #377dff;
    cursor: pointer;
  }
`;

const ImgBox = styled.div`
  height: 320px;
  width: 300px;
  /* background-color: ${(props) => props.theme.pageBackground}; */
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;
const ImgMain = styled.img`
  width: 290px;
  margin-top: -65px;
`;

const ImgBoxHold = styled.div`
  margin-top: 80px;
`;
