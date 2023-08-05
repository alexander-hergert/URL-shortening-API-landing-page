import React from "react";
import { styled } from "styled-components";

/************** STYLES ********************/

const StylesContainer = styled.div`
  width: 50%;
  margin: auto;
  margin-top: 3rem;
  margin-bottom: 10rem;
  @media only screen and (max-width: 800px) {
    width: 80%;
    margin-bottom: 5rem;
  }
`;

/************** COMPONENT ********************/

const StatisticsTop = () => {
  return (
    <StylesContainer>
      <h2>Advanced Statistics</h2>
      <p>
        Track how your links are performing across the web with our advanced
        statistics dashboard.
      </p>
    </StylesContainer>
  );
};

export default StatisticsTop;
