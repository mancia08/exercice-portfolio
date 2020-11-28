import React from "react";
import Button from "./../atoms/Button";
import HeaderTitle from "./../molecules/HeaderTitle"
import { textData } from "./../../data/textData";

const Header = () =>
  <header>
    <HeaderTitle/>
    <Button btnText={textData.btn} />
  </header>
;
export default Header;
