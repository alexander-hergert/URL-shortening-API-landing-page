import React from "react";
import { styled } from "styled-components";

const MenuBurger = () => {
  return (
    <div>
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
          <a href="">Sign Up</a>
        </li>
      </menu>
    </div>
  );
};

export default MenuBurger;
