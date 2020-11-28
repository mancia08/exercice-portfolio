import React from "react";
import { textData } from "./../../data/textData";
import SectionTitle from "./../molecules/SectionTitle";
import SectionText from "./../molecules/SectionText";
import BrownText from "./../molecules/BrownText";

const Education = () => (
  <>
    <SectionTitle text={textData.education.title} />
    <BrownText text={textData.education.first} />
    <SectionText text={textData.education.second} />
  </>
);

export default Education;
