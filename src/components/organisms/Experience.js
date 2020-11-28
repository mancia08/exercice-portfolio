import React from 'react';
import {textData} from "./../../data/textData"
import SectionTitle from "./../molecules/SectionTitle"
import SectionText from "./../molecules/SectionText"
import BrownText from "./../molecules/BrownText"

const About = () =>
        <section>
            <SectionTitle text={textData.experience.title}/>
            <>
            <BrownText text={textData.experience.text[0].name}/>
            <SectionText text={textData.experience.text[0].time}/>
            <SectionText text={textData.experience.text[0].text}/>
            </>
        </section>


export default About;