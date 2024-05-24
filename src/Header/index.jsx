import React from "react";
import { useNavigate } from "react-router-dom";

function Header() {
    const navigate = useNavigate();
    const username = localStorage.getItem("username");
    const logout = () => {
        localStorage.clear();
        navigate("/");
    };
    return (
        <div>
            <div>
                Welcome{"  "}
                {username}
            </div>
            Header{" "}
            <div>
                <button type="button" onClick={logout}>
                    Logout
                </button>
            </div>
        </div>
    );
}

export default Header;
