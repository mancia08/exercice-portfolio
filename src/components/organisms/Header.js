import React from "react";
import styled from "styled-components";
import { style } from "./../../styles/theme";
import { textData } from "./../../data/textData";
import Picture from "./../atoms/Picture";
import BrownText from "./../molecules/BrownText";
import HeaderTitle from "./../molecules/HeaderTitle";
import Button from "./../atoms/Button";

const HeaderComponent = styled.header`
  height: ${style.sizes.header.mobile}px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding-top: 80px;
  margin:0;
  @media only screen and (min-width: ${style.viewport.tablet}px) {
    height: ${style.sizes.header.tablet}px;
  }
  @media only screen and (min-width: ${style.viewport.pc}px) {
    height: ${style.sizes.header.pc}px;
    flex-direction: row;
    justify-content: space-around;
  }
`;
const NameComponent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media only screen and (min-width: ${style.viewport.pc}px) {
    align-items: flex-start;
  }
`;

const Header = () => (
  <HeaderComponent>
    <Picture />
    <NameComponent>
      <BrownText text={textData.header.text} />
      <HeaderTitle text={textData.header.title} />
      <Button btnText={textData.header.btn} />
    </NameComponent>
  </HeaderComponent>
);
export default Header;
