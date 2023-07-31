import React, { useState } from "react";
import styled from "styled-components";
import { FiArrowLeftCircle } from "react-icons/fi";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import axios from "axios";
import swal from "sweetalert";
import LoadingState from "../../../Global/loadingState/loading";
import { loginUser } from "../../../Global/reduxGLobal/globalState";

const SignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [loading, setLoading] = useState();

  const formSchema = yup.object().shape({
    email: yup.string().email().required("Enter Your Email"),
    password: yup.string().required("ENter Your Pasword"),
  });

  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm({ resolver: yupResolver(formSchema) });

  const onSummit = handleSubmit(async (value) => {
    console.log(value);
    const { email, password } = value;
    const mainURI = "https://devbucket.onrender.com";
    const localURI = "http://localhost:2001";
    const URI = `${localURI}/api/signInUser`;
    setLoading(true);

    await axios
      .post(URI, { email, password })
      .then((res) => {
        dispatch(loginUser(res.data.data));
        console.log(res.data.data);

        swal({
          title: `Signed In Sucessfully ✌️`,
          text: "You Can Now Start Creating Awesome Projects",
          icon: "success",
          button: "Proceed",
        }).then(() => {
          navigate("/onboardingone");
        });
        setLoading(false);
      })
      .catch((error) => {
        swal({
          title: error.response.data.message,
          text: "An Error Occoured, Do Check your network Connection",
          icon: "error",
        });
        setLoading(false);
      });
  });

  return (
    <Container>
      {loading ? <LoadingState /> : null}
      <Wrapper>
        <InputPart>
          <IconTop to="/">
            <FiArrowLeftCircle />
          </IconTop>
          <SignInputHold>
            <SignTitle>Sign In</SignTitle>
            <SignSubTitle>To Intract with your account</SignSubTitle>
            <InputForm onSubmit={onSummit}>
              <InputDiv
                placeholder="Email"
                {...register("email")}
                type="email"
              />
              <InputDiv
                placeholder="Password"
                {...register("password")}
                type="password"
              />
              <InputButton type="submit">Sign In</InputButton>
            </InputForm>
            <HasAcc>
              Don't have an account?{""}
              <NavLink
                to="/signup"
                style={{
                  textDecoration: "none",
                }}
              >
                <span>Sign Up</span>
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

export default SignIn;

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
  align-items: center;

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
  padding-left: 10px;
  font-family: Montserrat;
  font-weight: 700;
  font-size: 13px;

  background-color: #e8effc;
  ::placeholder {
    color: #377dff;
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
  margin-top: -63px;
`;

const ImgBoxHold = styled.div`
  margin-top: 80px;
`;
