import React from "react";
import { Link } from "react-router-dom";
function Sidebar() {
    return (
        <div>
            Sidebar
            <ul>
                <Link to="/dashboard">
                    {" "}
                    <li>Dashboard</li>
                </Link>
                <Link to="/payments">
                    {" "}
                    <li>Payments</li>
                </Link>
                <Link to="/profile">
                    {" "}
                    <li>Profile</li>
                </Link>
            </ul>
        </div>
    );
}

export default Sidebar;
