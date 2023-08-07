import React, { useState, useEffect, useRef } from "react";
import { styled } from "styled-components";
import UrlContainer from "./url/UrlContainer";
import { saveData, readData, fetchData } from "../utility/functions";
import { nanoid } from "nanoid";

/************** STYLES ********************/

const redColor = "hsl(0, 87%, 67%)";

const StylesContainer = styled.section`
  width: 100%;
  padding: 0 5rem;
`;

const Div = styled.div`
  padding: 3rem;
  border-radius: 5px;
  position: relative;
  top: 10rem;
  left: 50%;
  transform: translate(-50%);
  background-image: url("/assets/images/bg-shorten-desktop.svg");
  background-repeat: no-repeat;
  background-size: cover;
  background-color: hsl(257, 27%, 26%);
  @media only screen and (max-width: 800px) {
    background-image: url("/assets/images/bg-shorten-mobile.svg");
    top: 10rem;
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
      border: 1px solid hsl(0, 0%, 75%);
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

    button:hover {
      transition: all 0.25;
      background-color: hsl(180, 66%, 80%);
    }
  }
`;

const ErrorMessage = styled.p`
  color: ${redColor};
  position: relative;
  top: 1rem;
  text-align: center;
`;

/************** COMPONENT ********************/

const InputSection = () => {
  const [inputText, setInputText] = useState("");
  const initialData = readData();
  const [localData, setLocalData] = useState(initialData);
  const [errorMessage, setErrorMessage] = useState("");
  const url = `https://api.shrtco.de/v2/shorten?url=${inputText}`;
  const inputRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await fetchData(url);
    //handle negative response
    if (localData.length === 10) {
      setErrorMessage(
        "Sorry but we only allow 10 items. Delete some items to add new."
      );
      return;
    } else if (!data.ok) {
      setErrorMessage(data.error);
      inputRef.current.style.border = `2px solid ${redColor}`;
      return;
    }
    const id = nanoid();
    const values = {
      id: id,
      longUrl: inputText,
      shortUrl: data.result.short_link,
    };
    console.log(values);
    const savedData = saveData(values);
    console.log(savedData);
    setLocalData(savedData);
    setInputText("");
    e.target[0].value = "";
  };

  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  const handleFocus = (e) => {
    setErrorMessage("");
    e.target.style.border = `1px solid hsl(0, 0%, 75%)`;
  };

  return (
    <StylesContainer>
      <Div>
        <form onSubmit={handleSubmit} onChange={handleChange}>
          <input
            type="text"
            aria-label="url-input"
            placeholder="Shorten a link here..."
            onFocus={handleFocus}
            ref={inputRef}
          />
          <button>Shorten It!</button>
        </form>
        {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      </Div>

      <UrlContainer localData={localData} setLocalData={setLocalData} />
    </StylesContainer>
  );
};

export default InputSection;
