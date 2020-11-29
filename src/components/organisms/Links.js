import React from "react";
import styled from "styled-components"
import { textData } from "./../../data/textData";
import BlueMainText from "./../molecules/BlueMainText";

const Link = styled.a `
text-decoration:inherit;
font-weight:bold;
line-height:2px
`
const Links = () => (
  <>
    {textData.left[3].text.map((e, index) => (<>
      <Link href={e.link}><BlueMainText key={index} text={e.name}/></Link>
      </>
    ))}
  </>
);
export default Links;