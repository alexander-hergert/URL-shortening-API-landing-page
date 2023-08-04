import React from "react";
import { styled } from "styled-components";

/************** STYLES ********************/

const NavbarSection = () => {
  return (
    <nav>
      <div>
        <img src="/assets/images/logo.svg" alt="logo" />
        <ul>
          <li>
            <a href="">Features</a>
          </li>
          <li>
            <a href="">Pricing</a>
          </li>
          <li>
            <a href="">Resources</a>
          </li>
        </ul>
      </div>
      <ul>
        <li>
          <a href="">Login</a>
        </li>
        <li>
          <a href="">Sign Up</a>
        </li>
      </ul>
      <button>
        <img src="" alt="burger-icon" />
      </button>
      <div>
        <ul>
          <li>
            <a href="">Features</a>
          </li>
          <li>
            <a href="">Pricing</a>
          </li>
          <li>
            <a href="">Resources</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="">Login</a>
          </li>
          <li>
            <a href="">Sign Up</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavbarSection;
