import React from "react";
import { textData } from "./../../data/textData";
import Picture from "./../atoms/Picture"
import HeaderTitle from "./../molecules/HeaderTitle";
import Button from "./../atoms/Button";

import BrownText from "./../molecules/BrownText";

const Header = () =>
  <header>
    <Picture/>
    <HeaderTitle/>
    <Button btnText={textData.btn} />
    <BrownText></BrownText>
  </header>
;
export default Header;
