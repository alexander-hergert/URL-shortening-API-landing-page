import React, { useState } from "react";
import { styled } from "styled-components";
import Url from "./Url";

/************** STYLES ********************/
const Div = styled.div`
  width: 100%;
  position: relative;
  top: 10rem;
  @media only screen and (max-width: 800px) {
    top: 12rem;
  }
`;

const ExpandButton = styled.button`
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  margin-top: 1rem;
  background-color: hsl(180, 66%, 49%);
  padding: 1rem;
  border-radius: 10px;
  border: none;
  color: white;

  &:hover {
    transition: all 0.25;
    background-color: hsl(180, 66%, 80%);
  }
`;

/************** COMPONENT ********************/
const UrlContainer = ({ setLocalData, localData }) => {
  const [copiedId, setCopiedId] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Div>
      <ExpandButton onClick={handleToggle}>
        {isOpen ? "Hide Links" : "Show Links"}
      </ExpandButton>
      {localData.map((item) => {
        return (
          <Url
            key={item.id}
            item={item}
            localData={localData}
            setLocalData={setLocalData}
            copiedId={copiedId}
            setCopiedId={setCopiedId}
            isOpen={isOpen}
          />
        );
      })}
    </Div>
  );
};

export default UrlContainer;
