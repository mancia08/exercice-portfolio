import React from "react";
import { textData } from "./../../data/textData";
import SectionTitle from "./../molecules/SectionTitle";
import SectionText from "./../molecules/SectionText";

const About = () =>
  <section>
    <SectionTitle text={textData.about.title} />
    <SectionText text={textData.about.text} />
  </section>


export default About;
