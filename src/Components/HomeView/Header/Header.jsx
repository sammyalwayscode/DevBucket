import React, { useContext } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { GlobalProvider } from "../../Global/ContexGlobal/GlobalContex";
import { FaMoon } from "react-icons/fa";
import { MdOutlineWbSunny } from "react-icons/md";

const Header = () => {
  const { setTheme, theme } = useContext(GlobalProvider);

  const changeTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <Container>
      <Wrapper>
        {/* <LogoDiv src="/image/ttlogo.png" alt="" /> */}

        <LogoHold>Dev-Bucket.</LogoHold>
        <SignDiv>
          {/* <NavLink to="signup">
            <SignBtn>Sign Up</SignBtn>
          </NavLink> */}
          <ToggleHold>
            {theme === "light" ? (
              <div style={{ cursor: "pointer" }} onClick={changeTheme}>
                <FaMoon color="#377dff" size="20px" />
              </div>
            ) : (
              <div style={{ cursor: "pointer" }} onClick={changeTheme}>
                <MdOutlineWbSunny color="#fff" size="20px" />
              </div>
            )}
          </ToggleHold>
          <NavLink to="signin">
            <SignBtn>Log In</SignBtn>
          </NavLink>
          {/* <SignBtn >Change</SignBtn> */}
        </SignDiv>
      </Wrapper>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Montserrat;
  background-color: ${(props) => props.theme.pageBackground};
  padding-bottom: 20px;
`;
const Wrapper = styled.div`
  width: 1100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
// const LogoDiv = styled.img`
//   width: 50px;
//   margin: 10px;
// `;

const LogoHold = styled.div`
  font-weight: 900;
  font-size: 20px;
`;

const SignDiv = styled.div`
  display: flex;
  align-items: center;
`;
const SignBtn = styled.button`
  height: 34px;
  width: 120px;
  margin: 12px;
  background-color: #377dff;
  border: none;
  border-radius: 5px;
  color: #fff;
  font-size: 14px;
  font-weight: 600;
  font-family: Montserrat;
  transition: all 350ms;
  transform: scale(1);

  :hover {
    transform: scale(0.94);
  }
`;

const ToggleHold = styled.div``;
