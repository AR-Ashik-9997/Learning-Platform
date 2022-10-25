import React from "react";
import { ListGroup } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const CourseTitle = ({ courses }) => {
  const { name } = courses;
  return (
    <div className="mb-3 w-75">
      {/* <ListGroup variant="flush" >
        <ListGroup.Item>{name}</ListGroup.Item>        
      </ListGroup> */}
      <NavLink to='/course' className="text-white fs-4 text-decoration-none">{name}</NavLink>
    </div>
  );
};

export default CourseTitle;
