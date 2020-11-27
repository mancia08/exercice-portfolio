import React from "react";
import Button from "./../atoms/Button";
import { textData } from "./../../data/textData";

const Header = () =>
  <header>
    <Button btnText={textData.btn} />
  </header>
;
export default Header;
