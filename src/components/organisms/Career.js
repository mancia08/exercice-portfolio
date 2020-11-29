import React from "react";
import { textData } from "./../../data/textData";
import SectionText from "./../molecules/SectionText";

const Career = () => (
  <>
    {textData.left[2].text.map((e, index) => (<>
      <b><SectionText key={index} text={e.title} /></b>
      <SectionText key={index} text={e.text} />
      </>
    ))}
  </>
);
export default Career;