import React from "react";
import styled from "styled-components";
import { style } from "./styles/theme";
import Header from "./components/organisms/Header";
import FirstLine from "./components/templates/FirstLine";
import SecondLine from "./components/templates/SecondLine";

const Container = styled.main`
  @media only screen and (min-width: ${style.viewport.pc}px) {
    display: flex;
    flex-direction: row-reverse;
  }
`;

const App = () => (
  <>
    <Header />
    <Container>
      <FirstLine />
      <SecondLine />
    </Container>
  </>
);

export default App;
