import React, { useState, useEffect } from "react";
import { styled } from "styled-components";
import UrlContainer from "./url/UrlContainer";
import { saveData } from "../utility/functions";
import { nanoid } from "nanoid";
import { readData } from "../utility/functions";

/************** STYLES ********************/

const StylesContainer = styled.section`
  width: 100%;
  padding: 0 5rem;
  margin: 2rem 0;
`;

const Div = styled.div`
  padding: 3rem;
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
`;

/************** COMPONENT ********************/

const InputSection = () => {
  const [inputText, setInputText] = useState("");
  const initialData = readData();
  const [localData, setLocalData] = useState(initialData);
  const url = `https://api.shrtco.de/v2/shorten?url=${inputText}`;

  const fetchData = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await fetchData(url);
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

  return (
    <StylesContainer>
      <Div>
        <form onSubmit={handleSubmit} onChange={handleChange}>
          <input
            type="text"
            aria-label="url-input"
            placeholder="Shorten a link here..."
          />
          <button>Shorten It!</button>
        </form>
      </Div>
      <UrlContainer localData={localData} setLocalData={setLocalData} />
    </StylesContainer>
  );
};

export default InputSection;
