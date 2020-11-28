import React from "react";
import { textData } from "./../../data/textData";
import Picture from "./../atoms/Picture"
import HeaderTitle from "./../molecules/HeaderTitle";
import Button from "./../atoms/Button";

const Header = () =>
  <header>
    <Picture/>
    <HeaderTitle/>
    <Button btnText={textData.btn} />
  </header>
;
export default Header;
