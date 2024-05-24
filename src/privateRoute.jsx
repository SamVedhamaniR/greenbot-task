import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ element }) => {
    const userJson = localStorage.getItem("userJson");
    return userJson ? element : <Navigate to="/" />;
};

export default PrivateRoute;
