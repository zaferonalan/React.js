import React from "react";

const Course = ({ id, content, title, price, removeOneCourse }) => {
  console.log(id);
  console.log(title);
  return (
    <div className="card">
      <div className="cardTitlePrice">
        <h2 className="cardTitle">{title}</h2>
        <h4 className="cardPrice">{price}TL</h4>
      </div>
      <p>{content}</p>
      <button className="cardDeleteBtn" onClick={() => removeOneCourse(id)}>
        Sil
      </button>
    </div>
  );
};

export default Course;
