import React, { useState } from "react";
import { styled } from "styled-components";
import Url from "./Url";

/************** STYLES ********************/
const Div = styled.div`
  width: 100%;
  position: relative;
  top: 6rem;
  @media only screen and (max-width: 800px) {
    top: 8rem;
  }
`;

/************** COMPONENT ********************/
const UrlContainer = ({ setLocalData, localData }) => {
  const [copiedId, setCopiedId] = useState("");

  return (
    <Div>
      {localData.map((item) => {
        return (
          <Url
            key={item.id}
            item={item}
            localData={localData}
            setLocalData={setLocalData}
            copiedId={copiedId}
            setCopiedId={setCopiedId}
          />
        );
      })}
    </Div>
  );
};

export default UrlContainer;
