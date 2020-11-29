import React from "react";
import styled from "styled-components";
import { style } from "./../../styles/theme";
import About from "./../organisms/About";
import Experience from "./../organisms/Experience";
import Education from "./../organisms/Education";

const FirstColumn = styled.main`
  transform: skewY(9deg);
  @media only screen and (min-width: ${style.viewport.pc}px) {
    width: 65%;
    margin-left: 10%;
  }
`;

const FirstLine = () => 
  <FirstColumn>
    <About />
    <Experience />
    <Education />
  </FirstColumn>


export default FirstLine;
