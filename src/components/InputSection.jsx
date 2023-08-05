import React from "react";
import { styled } from "styled-components";

/************** STYLES ********************/

const StylesContainer = styled.section`
  width: 100%;
  padding: 0 5rem;
  margin: 2rem 0;

  div {
    padding: 2rem;
    border-radius: 5px;
    position: relative;
    top: 6rem;
    left: 50%;
    transform: translate(-50%);
    background-image: url("/assets/images/bg-shorten-desktop.svg");
    background-repeat: no-repeat;
    background-size: cover;
    background-color: hsl(257, 27%, 26%);
    @media only screen and (max-width: 800px) {
      background-image: url("/assets/images/bg-shorten-mobile.svg");
      top: 8rem;
    }

    form {
      display: flex;
      justify-content: center;
      gap: 1rem;
      @media only screen and (max-width: 800px) {
        flex-direction: column;
      }

      input {
        width: 60%;
        padding: 1rem;
        border-radius: 10px;
        border: none;
        @media only screen and (max-width: 800px) {
          width: 100%;
        }
      }

      button {
        padding: 1rem 1.5rem;
        border-radius: 10px;
        background-color: hsl(180, 66%, 49%);
        color: white;
        border: none;
      }
    }
  }
`;

/************** COMPONENT ********************/

const InputSection = () => {
  return (
    <StylesContainer>
      <div>
        <form action="">
          <input
            type="text"
            aria-label="url-input"
            placeholder="Shorten a link here..."
          />
          <button>Shorten It!</button>
        </form>
      </div>
    </StylesContainer>
  );
};

export default InputSection;
