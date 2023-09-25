import React from "react";

const Cards = ({ data }) => {
  const { image, title, description } = data;
  return (
    <>
      <div className="cards">
        <div className="img">
          <img src={image} alt="" />
        </div>
        <div className="content">
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
      </div>
    </>
  );
};

export default Cards;

// kısa yol rafce
