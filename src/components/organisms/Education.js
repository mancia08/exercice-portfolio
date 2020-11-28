import React from "react";
import styled from "styled-components"
import { textData } from "./../../data/textData";
import SectionTitle from "./../molecules/SectionTitle";
import SectionText from "./../molecules/SectionText";
import BlueMainText from "./../molecules/BlueMainText";
import BrownText from "./../molecules/BrownText";

const Link = styled.a`
color:inherit;
text-decoration: inherit;
font-weight:bold

`


const Education = () => (
  <section>
    <SectionTitle text={textData.education.title} />
    <BrownText text={textData.education.first} />
    <SectionText text={textData.education.sectionText} />
    <BrownText text={textData.education.skillset.title} />
    {textData.education.skillset.text.map((e, index) => (
      <>
        <SectionText key={index} text={e} />
      </>
    ))}
    <BrownText text={textData.education.awards.title} />
    {textData.education.awards.text.map((e, index) => (
      <>
        <SectionText key={index} text={e} />
      </>
    ))}
    <BrownText text={textData.education.career.title} />
    {textData.education.career.text.map((e, index) => (
      <>
        <b><SectionText key={index} text={e.title} /></b>
        <SectionText key={index} text={e.text} />
      </>
    ))}
    <BrownText text={textData.education.recent.title} />
    {textData.education.recent.text.map((e, index) => (
      <>
        <Link href={e.link}><BlueMainText key={index} text={e.name} /></Link>
      </>
    ))}
  </section>
);

export default Education;
