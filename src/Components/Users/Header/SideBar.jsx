import React from "react";
import { MdOutlineClear } from "react-icons/md";
import styled from "styled-components";

const SideBar = ({ setToggle, toggle, toggleSwitch }) => {
  return (
    <Container>
      <Wrapper>
        <WrapperHold>
          <CancleShare>
            <CancleBtn onClick={toggleSwitch}>
              <MdOutlineClear />
            </CancleBtn>
            <Button>Share Your Work</Button>
          </CancleShare>

          <Navigations>
            <Navs>For You</Navs>
            <Navs>Favourite</Navs>
          </Navigations>
          <AvatarName>
            <Avatar>
              <img src="/image/ava.png" alt="" />
            </Avatar>
            <Name>Olorunda</Name>
          </AvatarName>
        </WrapperHold>
      </Wrapper>
    </Container>
  );
};

export default SideBar;

const Container = styled.div`
  height: calc(100vh - 50px);
  width: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  position: fixed;
  transition: all 500ms;
`;
const Wrapper = styled.div`
  width: 250px;
  height: 100%;
  background-color: #fff;
  display: flex;
  justify-content: center;
`;

const WrapperHold = styled.div`
  width: 85%;
`;

const CancleShare = styled.div`
  width: 100%;
  margin: 20px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const CancleBtn = styled.div`
  font-size: 25px;
  cursor: pointer;
`;
const Button = styled.button`
  height: 35px;
  width: 130px;
  /* background-color: #377dff; */
  background-color: transparent;
  border: 1px solid lightgray;
  font-family: Montserrat;
  /* border: none; */
  color: #000;
  font-size: 12px;
  font-weight: 700;
  border-radius: 30px;
  cursor: pointer;
  transition: all 350ms;
  :hover {
    transform: scale(0.95);
  }
`;
const Navigations = styled.div``;
const Navs = styled.div`
  font-size: 14px;
  font-weight: 700;
  margin: 15px 0;
  cursor: pointer;
`;
const AvatarName = styled.div`
  display: flex;
  align-items: center;
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

const Name = styled.div`
  margin-left: 10px;
  font-weight: 600;
`;
