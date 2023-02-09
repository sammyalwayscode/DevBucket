import React from "react";
import styled from "styled-components";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import Home from "../Home";
import Home2 from "../Home2/Home2";
import Home3 from "../Home3/Home3";
import Home4 from "../Home4/Home4";
import Home5 from "../Home5/Home5";
import Home6 from "../Home6/Home6";

const HomeMain = (props) => {
  return (
    <Container>
      <Header theme={props.theme} setTheme={props.setTheme} />
      <Home theme={props.theme} setTheme={props.setTheme} />
      <Home2 theme={props.theme} setTheme={props.setTheme} />
      <Home3 />
      <Home4 />
      <Home5 />
      <Home6 />
      <Footer />
    </Container>
  );
};

export default HomeMain;

const Container = styled.div`
  height: 100%;
  width: 100%;
  font-family: Montserrat;
  background-color: ${(props) => props.theme.pageBackground};
  color: ${(props) => props.theme.textColor};
`;
