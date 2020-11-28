import React from 'react';
import {textData} from "./../../data/textData"
import SectionTitle from "./../molecules/SectionTitle"
import SectionText from "./../molecules/SectionText"
import BrownText from "./../molecules/BrownText"

const About = () =>
        <section>
            <SectionTitle text={textData.experience.title}/>
            {textData.experience.text.map ((e, index) => (
            <>
            <BrownText key = {index} text={e.name}/>
            <SectionText key = {index} text={e.time}/>
            <SectionText key = {index} text={e.text}/>
            </>
))}
        </section>


export default About;