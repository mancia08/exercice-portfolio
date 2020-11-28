import React from "react";
import { textData } from "./../../data/textData";
import Text from "./../atoms/Text";

const SectionTitle = () => <Text text={textData.title} section="main" type="title"/>;

export default SectionTitle;
