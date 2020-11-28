import React from "react";
import styled from "styled-components";
import {style} from "./../../styles/theme"

const Title = styled.h1`
  @import url(${style.font.family.titles.url});
  font-family: ${style.font.family.titles.family};
  font-size:${style.font.size.mobile.xxl}px;
  text-align:center;
  @media only screen and (min-width:${style.viewport.tablet}px){
    font-size:${style.font.size.tablet.xxl}px
  }
  @media only screen and (min-width:${style.viewport.pc}px){
    font-size:${style.font.size.pc.xl}px;
    text-align:left
  }
  
`;
function TitleText(props) {
  return <Title>{props.text}</Title>;
}

export default TitleText;
