import React, { useState } from "react";
import './registration.css';

const Registration = () => {
    const [isRegister, setIsRegister] = useState(true);
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
        name: "",
        surname: ""      
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isRegister) {
            console.log("Registering:", formData);
        } else {
            console.log("Logging in:", formData);
        }
        setFormData({
            username: "",
            email: "",
            password: "",
            confirmPassword: "",
            name: "",      
            surname: ""   
        });
    };

    return (
        <div className="registration-container">
            <div className="toggle-buttons">
                <button 
                    className={isRegister ? "active" : ""} 
                    onClick={() => setIsRegister(true)}
                >
                    Register
                </button>
                <button 
                    className={!isRegister ? "active" : ""} 
                    onClick={() => setIsRegister(false)}
                >
                    Login
                </button>
            </div>
            
            <form onSubmit={handleSubmit} className="form">
                {isRegister && (
                    <>
                        <label htmlFor="name">Name:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />

                        <label htmlFor="surname">Surname:</label>
                        <input
                            type="text"
                            id="surname"
                            name="surname"
                            value={formData.surname}
                            onChange={handleChange}
                            required
                        />

                        <label htmlFor="username">Username:</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                            required
                        />

                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </>
                )}
                
                {!isRegister && (
                    <>
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </>
                )}

                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                />

                {isRegister && (
                    <>
                        <label htmlFor="confirmPassword">Confirm Password:</label>
                        <input
                            type="password"
                            id="confirmPassword"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            required
                        />
                    </>
                )}

                <button type="submit" className="submit-button">
                    {isRegister ? "Register" : "Login"}
                </button>
            </form>
        </div>
    );
};

export default Registration;
