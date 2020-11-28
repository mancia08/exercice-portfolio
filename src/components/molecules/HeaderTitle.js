import React from 'react';
import TitleText from "./../atoms/TitleText"
import { textData } from "./../../data/textData";

function HeaderTitle() {
    return (
        <>
            <TitleText text={textData.title} type="main"/>
            <TitleText text={textData.title} type="section"/>
        </>
    );
}

export default HeaderTitle;