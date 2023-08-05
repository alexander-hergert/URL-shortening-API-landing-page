import React from "react";
import { styled } from "styled-components";
/************** STYLES ********************/
const Button = styled.a`
  background-color: hsl(180, 66%, 49%);
  border-radius: 2rem;
  padding: 1rem 2rem;
  color: white;
`;

/************** COMPONENT ********************/
const LinkButton = ({ children }) => {
  return <Button href="">{children}</Button>;
};

export default LinkButton;
