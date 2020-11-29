import React from "react";
import { textData } from "./../../data/textData";
import BrownText from "./../molecules/BrownText";

const secondLine = () => (
  <div>
    {textData.left.map((e, index) => 
      <>
        <BrownText key={index} text={e.title} />
        {e.run}
      </>
    )}
  </div>
);

export default secondLine;
