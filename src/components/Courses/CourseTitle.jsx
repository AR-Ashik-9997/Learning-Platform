import React from "react";
import { NavLink } from "react-router-dom";

const CourseTitle = ({ courses }) => {
  const { id, name } = courses;
  return (
    <div className="mb-3 w-75">
      <NavLink
        to={`/course/${id}`}
        className="text-white fs-4 text-decoration-none"
      >
        {name}
      </NavLink>
    </div>
  );
};

export default CourseTitle;
