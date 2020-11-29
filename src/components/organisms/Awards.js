import React from "react";
import { textData } from "./../../data/textData";
import SectionText from "./../molecules/SectionText";

const Awards = () => (
  <>
    {textData.left[1].text.map((e, index) => (
      <SectionText key={index} text={e} />
    ))}
  </>
);
export default Awards;