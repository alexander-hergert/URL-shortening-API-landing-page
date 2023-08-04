import React from "react";
import { styled } from "styled-components";

/************** STYLES ********************/

const Section = styled.section`
  width: 85%;
  top: 4rem;
  left: 50%;
  transform: translate(-50%);
  position: relative;
  padding: 2rem;
  border-radius: 5px;
  background-image: url("/assets/images/bg-shorten-desktop.svg");
  background-repeat: no-repeat;
  background-size: cover;
  background-color: hsl(257, 27%, 26%);

  @media only screen and (max-width: 800px) {
    background-image: url("/assets/images/bg-shorten-mobile.svg");
  }
`;

const Form = styled.form`
  display: flex;
  justify-content: center;
  gap: 1rem;
`;

const Input = styled.input`
  width: 60%;
  padding: 1rem;
  border-radius: 10px;
  border: none;
`;

const Button = styled.button`
  padding: 1rem 1.5rem;
  border-radius: 10px;
  background-color: hsl(180, 66%, 49%);
  color: white;
  border: none;
`;

/************** COMPONENT ********************/

const InputSection = () => {
  return (
    <Section>
      <Form action="">
        <Input
          type="text"
          aria-label="url-input"
          placeholder="Shorten a link here..."
        />
        <Button>Shorten It!</Button>
      </Form>
    </Section>
  );
};

export default InputSection;
