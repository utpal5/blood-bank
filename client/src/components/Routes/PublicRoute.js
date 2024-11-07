import React from "react";
import { Navigate } from "react-router-dom";

const PublicRoute = ({ children }) => {
    // if wet token in localstorage
  if (localStorage.getItem("token")) {
    return <Navigate to="/" />;
  } else {
    return children;
  }
};

export default PublicRoute;