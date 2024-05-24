import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignUp() {
    const navigate = useNavigate();
    const [value, setValue] = useState({ username: "", email: "", password: "" });
    const [valueErr, setValueErr] = useState({ username: "", email: "", password: "" });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValue((prevVal) => ({
            ...prevVal,
            [name]: value,
        }));
    };

    const validate = () => {
        let valid = true;
        let tempErr = { username: "", email: "", password: "" };
        if (!value.username) {
            tempErr.username = "username is required";
            valid = false;
        }
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
    const username = localStorage.setItem("username", value?.username);
    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            localStorage.setItem("userJson", username);
            alert("User Created Successfully");
            navigate("/");
        }
    };

    return (
        <div>
            <h2>SignUp</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username">Username</label>
                    <input type="username" value={value.username} onChange={handleChange} name="username" id="username" />
                    {valueErr.username && <span style={{ color: "red" }}>{valueErr.username}</span>}
                </div>
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
                <button type="submit">Create Account</button>
            </form>
        </div>
    );
}

export default SignUp;
