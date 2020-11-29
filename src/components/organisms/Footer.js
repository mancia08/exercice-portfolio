import React from "react";
import { textData } from "./../../data/textData";
import FooterTitle from "./../molecules/FooterTitle";
import BlueFooterText from "./../molecules/BlueFooterText";

const Footer = () => (
  <footer>
<FooterTitle text={textData.footer.title}/>
<a href="mailto:ciao"><BlueFooterText text={textData.footer.mail}/></a>
<BlueFooterText text={textData.footer.phone}/>
<h1>sdkjfsdjfds</h1>
  </footer>
);
export default Footer;