import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate();
    const [value, setValue] = useState({ email: "", password: "" });
    const [valueErr, setValueErr] = useState({ email: "", password: "" });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValue((prevVal) => ({
            ...prevVal,
            [name]: value,
        }));
    };

    const validate = () => {
        let valid = true;
        let tempErr = { email: "", password: "" };
        if (!value.email) {
            tempErr.email = "Email is required";
            valid = false;
        }
        if (!value.password) {
            tempErr.password = "Password is required";
            valid = false;
        } else if (value.password.length < 6) {
            tempErr.password = "Password needs to be greater than or equal to 6 characters";
            valid = false;
        }
        setValueErr(tempErr);
        return valid;
    };
    const username = localStorage.getItem("username");
    const userObj = { id: 123, username: username, emailAddress: value?.email };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            localStorage.setItem("userJson", JSON.stringify(userObj));
            alert("User logged in successfully");
            navigate("/dashboard");
        }
    };
    const selectedMenu = localStorage?.getItem("selectedMenu");
    const userJson = localStorage.getItem("userJson");
    console.log(userJson, "userJson");
    useEffect(() => {
        if (!userJson || userJson == "undefined") {
            navigate("/");
        } else if (selectedMenu) {
            navigate(selectedMenu);
        } else if (!selectedMenu && userJson) {
            navigate("/dashboard");
            // navigate("/dashboard");
        }
    }, []);
    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email">Email Address</label>
                    <input type="email" value={value.email} onChange={handleChange} name="email" id="email" />
                    {valueErr.email && <span style={{ color: "red" }}>{valueErr.email}</span>}
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" value={value.password} onChange={handleChange} name="password" id="password" />
                    {valueErr.password && <span style={{ color: "red" }}>{valueErr.password}</span>}
                </div>
                <button type="submit">Login</button>
                <a href="/signup">Create account</a>
            </form>
        </div>
    );
}

export default Login;
