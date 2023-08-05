import React, { useEffect } from "react";
import { styled } from "styled-components";
import Url from "./Url";

/************** STYLES ********************/
const Div = styled.div`
  width: 100%;
  position: relative;
  top: 6rem;
`;

/************** COMPONENT ********************/
const UrlContainer = ({ setLocalData, localData }) => {

  return (
    <Div>
      {localData.map((item) => {
        return <Url key={item.id} {...item} />;
      })}
    </Div>
  );
};

export default UrlContainer;
