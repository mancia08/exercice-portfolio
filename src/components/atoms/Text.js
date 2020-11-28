import React from "react";
import styled from "styled-components";
import { style } from "./../../styles/theme";

const TextComponent = styled.h1`
  @import url(${style.font.family.titles.url});
  font-family: ${style.font.family.titles.family};
  font-size: ${(p) =>
    p.section === "header"
      ? style.font.size.mobile.xxl
      : p.section === "main"
      ? style.font.size.mobile.l
      : style.font.size.mobile.xl}px;
  text-align: ${(p) =>
    (p.section === "footer" || p.section === "header") && "center"};
  @media only screen and (min-width: ${style.viewport.tablet}px) {
    font-size: ${(p) =>
      p.section === "header"
        ? style.font.size.tablet.xxl
        : p.section === "main"
        ? style.font.size.tablet.l
        : style.font.size.tablet.xl}px;
  }
  @media only screen and (min-width: ${style.viewport.pc}px) {
    font-size: ${(p) =>
      p.section === "header"
        ? style.font.size.pc.xl
        : p.section === "main"
        ? style.font.size.pc.m
        : style.font.size.pc.l}px;
    text-align: ${(p) => p.section === "header" && "left"};
  }
`;
const Text = (props) => <TextComponent section={props.section}>{props.text}</TextComponent>;

export default Text;
