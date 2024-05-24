import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Login from "./Login/index";
import Dashboard from "./Dashboard/index";
import SignUp from "./Signup/index";
import Payments from "./Payments/index";
import Profile from "./Profile/index";
import PrivateRoute from "./privateRoute";
function AllRoutes() {
    const location = useLocation();
    const userJson = localStorage.getItem("userJson");
    console.log(userJson, "userJson");
    useEffect(() => {
        if (location?.pathname !== "/signup" && location?.pathname !== "/") {
            localStorage.setItem("selectedMenu", location.pathname);
        }
    }, [location]);
    return (
        <div>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/dashboard" element={<PrivateRoute element={<Dashboard />} />} />
                <Route path="/profile" element={<PrivateRoute element={<Profile />} />} />
                <Route path="/payments" element={<PrivateRoute element={<Payments />} />} />
            </Routes>
        </div>
    );
}

export default AllRoutes;
