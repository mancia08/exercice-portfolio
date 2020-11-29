import React from "react";
import styled from "styled-components"
import { textData } from "./../../data/textData";
import {style} from "./../../styles/theme"
import FooterTitle from "./../molecules/FooterTitle";
import BlueFooterText from "./../molecules/BlueFooterText";

const FooterContainer= styled.footer `
  height: ${style.sizes.footer.mobile}px;
  text-align:center;
  display:flex;
  flex-direction:column;
  justify-content:center;
  margin:0;
  @media only screen and (min-width: ${style.viewport.tablet}px) {
    height: ${style.sizes.footer.tablet}px;
  }
  @media only screen and (min-width: ${style.viewport.pc}px) {
    height: ${style.sizes.footer.pc}px;
  }
`
const Link = styled.a `
text-decoration:inherit`

const Footer = () => (
  <FooterContainer>
<FooterTitle text={textData.footer.title}/>
<Link href={textData.footer.mailto}><BlueFooterText text={textData.footer.mail}/></Link>
<BlueFooterText text={textData.footer.phone}/>
  </FooterContainer>
);
export default Footer;