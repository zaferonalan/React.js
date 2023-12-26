// kısalma rfce,rafce

import Course from "./Course";

const Courses = ({ courses, removeCourse }) => {
  //   console.log(courses);
  return (
    <div className="courseMainDiv">
      <div>
        <h2>Kurslarım</h2>
      </div>
      <div className="cardDiv">
        {courses.map((course) => {
          return (
            <Course
              key={course.id}
              {...course}
              removeOneCourse={removeCourse}
            />
          );
          //course={course}
        })}
      </div>
    </div>
  );
};

export default Courses;
