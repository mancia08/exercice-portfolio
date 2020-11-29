import React from "react";
import styled from "styled-components";
import { textData } from "./../../data/textData";
import BrownText from "./../molecules/BrownText";

const SecondColumn = styled.aside`
  transform: skewY(9deg);
`;
const secondLine = () => 
  <SecondColumn>
    {textData.left.map((e, index) => 
      <section>
        <BrownText key={index} text={e.title} />
        {e.run}
      </section>
    )}
  </SecondColumn>
;

export default secondLine;
