import React, { useState } from "react";

const SearchHeader = ({ search }) => {
  const [valueInput, setValueInput] = useState(" ");
  const handleFormSubmit = (event) => {
    event.preventDefault(); // sayfanın yüklenmesini engelledik
    search(valueInput);
  };

  const handelChange = (event) => {
    setValueInput(event.target.value);
  };

  return (
    <div className="searchDiv">
      <form onSubmit={handleFormSubmit}>
        <label>Ne arıyorsun?</label>
        <input type="text" value={valueInput} onChange={handelChange} />
      </form>
    </div>
  );
};

export default SearchHeader;
