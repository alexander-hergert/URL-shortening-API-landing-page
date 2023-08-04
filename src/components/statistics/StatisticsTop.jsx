import React from "react";
import { styled } from "styled-components";

/************** STYLES ********************/

const Div = styled.div`
  width: 40%;
  margin: auto;
  margin-bottom: 10rem;
`;

/************** COMPONENT ********************/

const StatisticsTop = () => {
  return (
    <Div>
      <h2>Advanced Statistics</h2>
      <p>
        Track how your links are performing across the web with our advanced
        statistics dashboard.
      </p>
    </Div>
  );
};

export default StatisticsTop;
