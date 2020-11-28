import React from "react";
import styled from "styled-components";
import { style } from "./../../styles/theme";

const Title = styled.h1`
  @import url(${style.font.family.titles.url});
  font-family: ${style.font.family.titles.family};
  font-size: ${(p) =>
    p.type === "header"
      ? style.font.size.mobile.xxl
      : p.type === "section"
      ? style.font.size.mobile.l
      : style.font.size.mobile.xl}px;
  text-align: ${(p) =>
    (p.type === "footer" || p.type === "header") && "center"};
  @media only screen and (min-width: ${style.viewport.tablet}px) {
    font-size: ${(p) =>
      p.type === "header"
        ? style.font.size.tablet.xxl
        : p.type === "section"
        ? style.font.size.tablet.l
        : style.font.size.tablet.xl}px;
  }
  @media only screen and (min-width: ${style.viewport.pc}px) {
    font-size: ${(p) =>
      p.type === "header"
        ? style.font.size.pc.xl
        : p.type === "section"
        ? style.font.size.pc.m
        : style.font.size.pc.l}px;
    text-align: ${(p) => p.type === "header" && "left"};
  }
`;
const TitleText = (props) => <Title type={props.type}>{props.text}</Title>;

export default TitleText;
