import React from "react";
import styled from "styled-components";
import { style } from "./../../styles/theme";

const TextComponent = styled.p`
  font-weight: ${(p) => p.type === "title" && "bold"};
  @import url(${style.font.family.titles.url});
  @import url(${style.font.family.main.url});
  color: ${(p) =>
    p.color === "brown"
      ? style.color.secondary
      : p.color === "blue"
      ? style.color.primary
      : style.color.text};
  font-family: ${(p) =>
    p.type === "title"
      ? style.font.family.titles.family
      : style.font.family.main.family};
  font-size: ${(p) =>
    p.type === "title"
      ? p.section === "header"
        ? style.font.size.mobile.xxl
        : p.section === "main"
        ? style.font.size.mobile.l
        : style.font.size.mobile.xl
      : p.color === "brown"
      ? style.font.size.mobile.xs
      : p.color === "black"
      ? style.font.size.mobile.s
      : (p.section = "main"
          ? style.font.size.mobile.s
          : style.font.size.mobile.m)}px;
  text-align: ${(p) =>
    (p.section === "footer" || p.section === "header") && "center"};
  text-transform: ${(p) => p.color === "brown" && "uppercase"};
  @media only screen and (min-width: ${style.viewport.tablet}px) {
    font-size: ${(p) =>
      p.type === "title"
        ? p.section === "header"
          ? style.font.size.tablet.xxl
          : p.section === "main"
          ? style.font.size.tablet.l
          : style.font.size.tablet.xl
        : p.color === "brown"
        ? style.font.size.tablet.xs
        : p.color === "black"
        ? style.font.size.tablet.s
        : (p.section = "main"
            ? style.font.size.tablet.s
            : style.font.size.tablet.m)}px;
  }
  @media only screen and (min-width: ${style.viewport.pc}px) {
    font-size: ${(p) =>
      p.type === "title"
        ? p.section === "header"
          ? style.font.size.pc.xl
          : p.section === "main"
          ? style.font.size.pc.m
          : style.font.size.pc.l
        : p.color === "brown"
        ? style.font.size.pc.xs
        : p.color === "black"
        ? style.font.size.pc.s
        : (p.section = "main" ? style.font.size.pc.s : style.font.size.pc.m)}px;
    text-align: ${(p) => p.section === "header" && "left"};
  }
`;
const Text = (props) => (
  <TextComponent section={props.section} color={props.color} type={props.type}>
    {props.text}
  </TextComponent>
);

export default Text;
