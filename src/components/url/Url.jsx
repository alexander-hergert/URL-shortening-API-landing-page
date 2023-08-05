import React from "react";
import { styled } from "styled-components";
import LinkButton from "../buttons/LinkButton";

/************** STYLES ********************/
const StylesContainer = styled.div`
  display: flex;
  margin: 1rem 0;
  padding: 1rem;
  border: 1px solid gray;
  background-color: white;
  justify-content: space-between;
  div {
    display: flex;
    gap: 1rem;
  }
`;

/************** COMPONENT ********************/
const Url = ({ longUrl, shortUrl }) => {
  return (
    <StylesContainer>
      <p>{longUrl}</p>
      <div>
        <p>{shortUrl}</p>
        <LinkButton>Copy</LinkButton>
      </div>
    </StylesContainer>
  );
};

export default Url;
