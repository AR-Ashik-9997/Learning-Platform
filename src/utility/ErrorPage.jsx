import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";


const ErrorPage = () => {
  return (
    <div className="bg-error">
      <img
        src="https://cdni.iconscout.com/illustration/premium/thumb/development-team-solving-404-error-4152848-3455060.png"
        alt=""
        className="d-block mx-auto img-fluid error-img "
      />
      <div className="d-flex justify-content-center">
        <Link to='/'>
        <Button variant="outline-info">Go Home</Button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
