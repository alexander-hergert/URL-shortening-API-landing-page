import React, { useState } from "react";
import { styled } from "styled-components";
import { RxHamburgerMenu } from "react-icons/rx";
import MenuBurger from "./navbar/MenuBurger";
import LinkButton from "./buttons/LinkButton";

/************** STYLES ********************/

const StylesContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 6rem;
  @media only screen and (max-width: 800px) {
    padding: 2rem 2rem;
  }

  div:first-of-type {
    display: flex;
  }
`;

const Menu = styled.menu`
  display: flex;
  margin-left: 1rem;
  @media only screen and (max-width: 800px) {
    display: none;
  }

  li {
    margin: 0 1rem;
    @media only screen and (max-width: 1100px) {
      margin: 0 0.5rem;
      font-size: 1rem;
    }
  }
`;

const BurgerButton = styled.a`
  font-size: 2rem;
  @media only screen and (min-width: 800px) {
    display: none;
  }
`;

/************** COMPONENT ********************/

const NavSection = () => {
  const [isToggleMenu, setIsToggleMenu] = useState(false);

  const handleToggle = (e) => {
    e.preventDefault();
    setIsToggleMenu(!isToggleMenu);
  };

  return (
    <StylesContainer>
      <div>
        <img src="/assets/images/logo.svg" alt="logo" />
        <Menu>
          <li>
            <a href="">Features</a>
          </li>
          <li>
            <a href="">Pricing</a>
          </li>
          <li>
            <a href="">Resources</a>
          </li>
        </Menu>
      </div>
      <Menu>
        <li>
          <a href="">Login</a>
        </li>
        <li>
          <LinkButton>Sign Up</LinkButton>
        </li>
      </Menu>
      <BurgerButton href="">
        <RxHamburgerMenu onClick={handleToggle} />
      </BurgerButton>
      {/* opened state */}
      <MenuBurger isToggleMenu={isToggleMenu} />
    </StylesContainer>
  );
};

export default NavSection;
