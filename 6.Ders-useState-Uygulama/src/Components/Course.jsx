import React from "react";
import Angular from "../../images/angular.jpg";
import Boostrap from "../../images/bootstrap5.png";
import Csharp from "../../images/ccsharp.png";
import KompleWeb from "../../images/kompleweb.jpg";
import "./Course.css";

const courseMap = {
  Angular: Angular,
  Boostrap: Boostrap,
  Csharp: Csharp,
  KompleWeb: KompleWeb,
};
function Course({ courseName }) {
  console.log(courseMap[courseName]);
  return (
    <div className="courseDiv">
      <img className="course" src={courseMap[courseName]} alt="" />
    </div>
  );
}

export default Course;
