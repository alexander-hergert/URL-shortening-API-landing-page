import React from "react";
import { styled } from "styled-components";
import LinkButton from "./buttons/LinkButton";

/************** STYLES ********************/

const StylesContainer = styled.section`
  padding: 3rem;
  background-image: url("/assets/images/bg-boost-desktop.svg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  color: white;
  background-color: hsl(257, 27%, 26%);
  text-align: center;

  @media only screen and (max-width: 800px) {
    background-image: url("/assets/images/bg-boost-mobile.svg");
  }

  h2 {
    margin-bottom: 3rem;
  }
`;

/************** COMPONENT ********************/

const LinkSection = () => {
  return (
    <StylesContainer>
      <h2>Boost your links today</h2>
      <LinkButton>Get Started</LinkButton>
    </StylesContainer>
  );
};

export default LinkSection;
