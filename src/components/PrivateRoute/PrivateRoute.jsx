import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../../utility/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user } = useContext(AuthContext);
  if (!user) {
   return <Navigate to="/sign-in"></Navigate>;
  }
  return children;
};

export default PrivateRoute;
