import React from "react";
import { textData } from "./../../data/textData";
import SectionText from "./../molecules/SectionText";

const Skillset = () => 
  <>
    {textData.left[0].text.map((e, index) => 
      <SectionText key={index} text={e} />
    )}
  </>

export default Skillset;
