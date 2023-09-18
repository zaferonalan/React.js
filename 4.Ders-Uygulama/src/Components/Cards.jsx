import React from "react";

export const Cards = ({ data }) => {
  const { image, title, description } = data;
  console.log(data);
  return (
    <>
      <div className="card" style="width: 18rem;">
        <img src={image} className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <a href="#" class="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </>
  );
};
