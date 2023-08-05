import React, { useEffect, useRef } from "react";
import { styled } from "styled-components";
import LinkButton from "../buttons/LinkButton";

/************** STYLES ********************/
const StylesContainer = styled.div`
  transition: all 1s;
  opacity: 0;
  font-size: 1.25rem;
  position: fixed;
  text-align: center;
  z-index: 10;
  top: 5rem;
  top: -30rem;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 10px;
  padding: 1.5rem;
  width: 90%;
  background-color: hsl(257, 27%, 26%);
  menu {
    li {
      margin: 2.5rem 0;
    }
    a {
      color: white;
    }
    &:first-child {
      border-bottom: 1px solid hsl(257, 7%, 63%);
    }
    &:last-child li:last-child a {
      width: 100%;
      display: block;
      background-color: hsl(180, 66%, 49%);
      transition: all 0.5s;
    }
    &:last-child li:last-child a:hover {
      background-color: hsl(180, 66%, 80%);
    }
  }
`;

/************** Component ********************/

const MenuBurger = ({ isToggleMenu }) => {
  //TRASNSITION EFFECT
  const stylesRef = useRef();
  useEffect(() => {
    const element = stylesRef.current;
    isToggleMenu
      ? (element.style.visibility = "visible")
      : (element.style.visibility = "hidden");
    isToggleMenu
      ? (element.style.opacity = "100%")
      : (element.style.opacity = "0%");
    isToggleMenu
      ? (element.style.top = "5rem")
      : (element.style.top = "-30rem");
  }, [isToggleMenu]);

  //JSX
  return (
    <StylesContainer ref={stylesRef}>
      <menu>
        <li>
          <a href="">Features</a>
        </li>
        <li>
          <a href="">Pricing</a>
        </li>
        <li>
          <a href="">Resources</a>
        </li>
      </menu>
      <menu>
        <li>
          <a href="">Login</a>
        </li>
        <li>
          <LinkButton>Sign Up</LinkButton>
        </li>
      </menu>
    </StylesContainer>
  );
};

export default MenuBurger;
