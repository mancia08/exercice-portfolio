import React from "react";
import { textData } from "./../../data/textData";
import Text from "./../atoms/Text";

const HeaderTitle = () => <Text text={textData.title} section="header" type="title"/>;

export default HeaderTitle;
