import React from "react";
import styled from "styled-components";
import { BiSearchAlt } from "react-icons/bi";
import { GoThreeBars } from "react-icons/go";
import { useState } from "react";
import SideBar from "./SideBar";
import { GiCancel } from "react-icons/gi";
import CategoriesStat from "./CategoriesStat";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [toogle, setToggle] = useState(false);

  const toggleSwitch = () => {
    setToggle(!toogle);
  };

  return (
    <>
      <Container>
        <Wrapper>
          <LogoNavs>
            <LogoHold>DevBucket</LogoHold>
            <Navagations>
              <Navs to="/home">
                <span>For You</span>
                <hr />
              </Navs>

              <Navs to="/favourite">
                <span>Favorite</span>
                <hr />
              </Navs>
            </Navagations>
          </LogoNavs>
          <SearchProfile>
            <SearcHold>
              <BiSearchAlt />
              <input type="search" placeholder="Make a Search..." />
            </SearcHold>
            <Navs to="/project/share">
              <Button>Share Your Work</Button>
            </Navs>
            <Avatar>
              <img src="/image/ava.png" alt="" />
            </Avatar>
          </SearchProfile>

          <NavBar>
            <Avatar>
              <img src="/image/ava.png" alt="" />
            </Avatar>
            <BuggerMenu>
              {toogle ? (
                <GiCancel onClick={toggleSwitch} />
              ) : (
                <GoThreeBars onClick={toggleSwitch} />
              )}
            </BuggerMenu>
          </NavBar>
        </Wrapper>
      </Container>
      <CategoriesStat />
      {toogle ? (
        <SideBar
          toogle={toogle}
          setToggle={setToggle}
          toggleSwitch={toggleSwitch}
        />
      ) : null}
    </>
  );
};

export default Header;

const Container = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid lightgray;
  background-color: ${(props) => props.theme.pageBackground};
  color: ${(props) => props.theme.textColor};
`;
const Wrapper = styled.div`
  width: 85%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const LogoNavs = styled.div`
  display: flex;
  /* background-color: aqua; */
  align-items: center;
`;
const LogoHold = styled.div`
  font-weight: 900;
  font-size: 20px;
`;
const Navagations = styled.div`
  display: flex;
  align-items: center;
  margin: 0 20px;

  @media (max-width: 900px) {
    display: none;
  }
`;
const Navs = styled(NavLink)`
  margin: 0 10px;
  font-weight: 600;
  cursor: pointer;
  font-size: 15px;
  /* background-color: beige; */
  color: #000;
  display: flex;
  flex-direction: column;
  text-decoration: none;

  span {
    /* background-color: red; */
    margin-top: 18px;
  }

  hr {
    position: relative;
    width: 100%;
    /* bottom: 0; */
    top: 6px;
    /* border: ${(props) => props.theme.userHeaderActiveNav}; */
    border: 1px solid #377dff;
  }
`;
const SearchProfile = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 900px) {
    display: none;
  }
`;
const SearcHold = styled.div`
  height: 30px;
  width: 300px;
  background-color: #f9f9f9;
  display: flex;
  align-items: center;
  font-size: 25px;
  padding: 0 10px;
  border-radius: 50px;
  border: 1px solid lightgray;
  input {
    background-color: transparent;
    height: 100%;
    width: 100%;
    font-family: Montserrat;
    border: none;
    outline: none;
  }

  @media (max-width: 1000px) {
    width: 200px;
  }
`;
const Button = styled.button`
  height: 35px;
  width: 130px;
  background-color: #377dff;
  font-family: Montserrat;
  border: none;
  color: #fff;
  font-size: 12px;
  font-weight: 700;
  border-radius: 30px;
  margin: 0 20px;
  cursor: pointer;
  transition: all 350ms;
  :hover {
    transform: scale(0.95);
  }
`;
const Avatar = styled.div`
  height: 35px;
  width: 35px;
  border-radius: 50%;
  border: 1px solid black;
  background-color: gray;
  cursor: pointer;
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 50%;
  }
`;

const BuggerMenu = styled.div`
  font-size: 25px;
  display: flex;
  align-items: center;
  margin-left: 15px;
  cursor: pointer;
`;

const NavBar = styled.div`
  display: none;
  @media (max-width: 900px) {
    display: flex;
  }
`;
