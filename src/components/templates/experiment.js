import React from "react";
import styled from "styled-components";
import { textData } from "./../../data/textData";
import SectionTitle from "./../molecules/SectionTitle";
import SectionText from "./../molecules/SectionText";
import BlueMainText from "./../molecules/BlueMainText";
import BrownText from "./../molecules/BrownText";
import EducationCareer from "./../organisms/EducationCareer"

const Link = styled.a`
  color: inherit;
  text-decoration: inherit;
  font-weight: bold;
`;


const sss = () => (
<div>
    <SectionTitle text={textData.education.skillset.title} />
    {textData.education.skillset.text.map((e, index) => (
      <>
        <SectionText key={index} text={e} title={e.title}/>
      </>
    ))}

    <SectionTitle text={textData.education.awards.title} />
    {textData.education.awards.text.map((e, index) => (
      <>
        <SectionText key={index} text={e} title={e.title} />
      </>
    ))}

    <SectionTitle text={textData.education.career.title} />
    {textData.education.career.text.map((e, index) => (
      <EducationCareer key={index} text={e.text} title={e.title}/>
    ))}
    
    <SectionTitle text={textData.education.recent.title} />
    {textData.education.recent.text.map((e, index) => (
      <>
        <Link href={e.link}>
          <BlueMainText key={index} text={e.name} />
        </Link>
      </>
    ))}
  </div>
);

export default sss;
