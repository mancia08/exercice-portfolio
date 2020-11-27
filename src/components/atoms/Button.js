import React from "react";
import styled from "styled-components";
import { style } from "./../../styles/theme.js";

const ContactButton = styled.button`
  background-color: ${style.color.primary};
  color: ${style.color.btnText};
  @import url(${style.font.family.main.url});
  font-family: ${style.font.family.main.family};
  font-size: ${style.font.size.s};
  width: ${style.sizes.btn.width}px;
  height: ${style.sizes.btn.height}px;
  text-transform: uppercase;
`;

const Button = (props) => <ContactButton>{props.btnText}</ContactButton>;

export default Button;
