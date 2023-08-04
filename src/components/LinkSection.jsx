import React from "react";
import { styled } from "styled-components";
import LinkButton from "./buttons/LinkButton";

/************** STYLES ********************/

const Section = styled.section`
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
`;

const H2 = styled.h2`
margin-bottom: 3rem;
`

/************** COMPONENT ********************/

const LinkSection = () => {
  return (
    <Section>
      <H2>Boost your links today</H2>
      <LinkButton value={"Get Started"} />
    </Section>
  );
};

export default LinkSection;
