import React from "react";
import styled from "styled-components"
import { textData } from "./../../data/textData";
import {style} from "./../../styles/theme"
import FooterTitle from "./../molecules/FooterTitle";
import BlueFooterText from "./../molecules/BlueFooterText";

const FooterContainer= styled.footer `
background-color: ${style.color.secondaryTransparent};
  height: ${style.sizes.footer.mobile}px;
  @media only screen and (min-width: ${style.viewport.tablet}px) {
    height: ${style.sizes.footer.tablet}px;
  }
  @media only screen and (min-width: ${style.viewport.pc}px) {
    height: ${style.sizes.footer.pc}px;
  }
`

const Footer = () => (
  <FooterContainer>
<FooterTitle text={textData.footer.title}/>
<a href="mailto:ciao"><BlueFooterText text={textData.footer.mail}/></a>
<BlueFooterText text={textData.footer.phone}/>
<h1>sdkjfsdjfds</h1>
  </FooterContainer>
);
export default Footer;