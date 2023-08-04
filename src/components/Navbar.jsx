import React, { useState } from "react";
import { styled } from "styled-components";
import { RxHamburgerMenu } from "react-icons/rx";
import MenuBurger from "./navbar/MenuBurger";
import LinkButton from "./buttons/LinkButton";

/************** STYLES ********************/

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 10rem;
`;

const Div = styled.div`
  display: flex;
`;

const Menu = styled.menu`
  display: flex;
  margin-left: 1rem;

  @media only screen and (max-width: 800px) {
    display: none;
  }
`;

const Li = styled.li`
  margin: 0 1rem;
`;

const BurgerButton = styled.a`
  @media only screen and (min-width: 800px) {
    display: none;
  }
`;

/************** COMPONENT ********************/

const NavbarSection = () => {
  const [isToggleMenu, setIsToggleMenu] = useState(false);

  return (
    <Nav>
      <Div>
        <img src="/assets/images/logo.svg" alt="logo" />
        <Menu>
          <Li>
            <a href="">Features</a>
          </Li>
          <Li>
            <a href="">Pricing</a>
          </Li>
          <Li>
            <a href="">Resources</a>
          </Li>
        </Menu>
      </Div>
      <Menu>
        <Li>
          <a href="">Login</a>
        </Li>
        <Li>
          <LinkButton value={"Sign Up"} />
        </Li>
      </Menu>
      <BurgerButton href="">
        <RxHamburgerMenu />
      </BurgerButton>
      {/* opened state */}
      {isToggleMenu && <MenuBurger />}
    </Nav>
  );
};

export default NavbarSection;
