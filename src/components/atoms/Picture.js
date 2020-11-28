import React from "react";
import styled from "styled-components";
import logo from "./../img/profile.jpg";
import { style } from "./../../styles/theme";

const FacePic = styled.img`
  border-radius: 50%;
  width: ${style.sizes.logo.mobile}px;
  @media only screen and (min-width: ${style.viewport.tablet}px) {
    width: ${style.sizes.logo.tablet}px;
  }
  @media only screen and (min-width: ${style.viewport.pc}px) {
    width: ${style.sizes.logo.pc}px;
  }
`;

const Picture = () => <FacePic src={logo} />;

export default Picture;
