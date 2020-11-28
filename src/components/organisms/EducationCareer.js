import React from "react";
import SectionText from "./../molecules/SectionText";

const EducationCareer = (props) => (
  <>
    <b>
      <SectionText text={props.title} />
    </b>
    <SectionText text={props.text} />
  </>
);

export default EducationCareer;
