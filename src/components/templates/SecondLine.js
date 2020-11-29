import React from "react";
import styled from "styled-components"
import { textData } from "./../../data/textData";
import BrownText from "./../molecules/BrownText";

const SecondColumn = styled.div`
transform: skewY(9deg);`
const secondLine = () => (
  <SecondColumn>
    {textData.left.map((e, index) => 
      <>
        <BrownText key={index} text={e.title} />
        {e.run}
      </>
    )}
  </SecondColumn>
);

export default secondLine;
