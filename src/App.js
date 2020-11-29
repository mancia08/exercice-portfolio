import React from "react";
import styled from "styled-components";
import { style } from "./styles/theme";
import Header from "./components/organisms/Header";
import FirstLine from "./components/templates/FirstLine";
import SecondLine from "./components/templates/SecondLine";
import Footer from "./components/organisms/Footer";

const Body = styled.body`
background-color: ${style.color.secondaryTransparent};
margin:0;
padding:0`

const Container = styled.main`
background-color:white;
transform: skewY(-9deg);
padding-top:100px;
padding: 50px;

  @media only screen and (min-width: ${style.viewport.pc}px) {
    display: flex;
    flex-direction: row-reverse;
    padding:100px;
  }
`;

const App = () => (
  <Body>
    <Header />
    <br/>
    <Container>
      <FirstLine />
      <SecondLine />
    </Container>
    <Footer/>
  </Body>
);

export default App;
