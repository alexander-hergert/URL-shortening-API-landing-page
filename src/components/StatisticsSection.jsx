import React from "react";
import SectionTop from "./statistics/StatisticsTop";
import SectionBottom from "./statistics/StatisticsBottom";
import { styled } from "styled-components";

/************** STYLES ********************/
const Section = styled.section`
  background-color: hsl(0, 0%, 75%);
  text-align: center;
  padding: 5rem;
  padding-top: 8rem;
`;

/************** COMPONENT ********************/

const StatisticsSection = () => {
  return (
    <Section>
      <SectionTop />
      <SectionBottom />
    </Section>
  );
};

export default StatisticsSection;
