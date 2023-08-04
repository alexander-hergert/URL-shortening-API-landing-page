import React from "react";

const InputSection = () => {
  return (
    <section>
      <form action="">
        <input
          type="text"
          aria-label="url-input"
          placeholder="Shorten a link here..."
        />
        <button>Shorten It!</button>
      </form>
    </section>
  );
};

export default InputSection;
