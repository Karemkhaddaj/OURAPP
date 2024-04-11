import React, { useState } from 'react';
import "./Register.css";
import { useNavigate } from 'react-router-dom';

function Register() {

    const initialFormData = {
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
    }
    const navigate = useNavigate();
    const [info, setInfo] = useState(initialFormData)

    function handleChange(event) {
        const { name, value } = event.target;
        setInfo(prevInfo => ({
            ...prevInfo,
            [name]: value
        }))
    }
    async function handleReg() {

    }

    function handleSubmit(event) {

        const { password, confirmPassword } = info;
        if (password !== confirmPassword) {
            alert("Passwords do not match. Please try again.")
        } else {
            //Put data in the DB
            handleReg();
            setInfo(initialFormData)
            navigate('/');
        }
    }

    return (
        <div className="register-container">
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Full name</label>
                <input onChange={handleChange} value={info.name} type="text" placeholder='full name' id="name" name="name" />
                <label htmlFor="email">Email</label>
                <input onChange={handleChange} value={info.email} type="email" placeholder='youremail@...com' id="email" name="email" />
                <label htmlFor="password">Password</label>
                <input onChange={handleChange} value={info.password} type="password" placeholder="**************" id="password" name="password" />
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input onChange={handleChange} value={info.confirmPassword} type="password" placeholder="**************" id="confirmPassword" name="confirmPassword" />
                <button type="submit">Register</button>
                <button className="login-btn" onClick={() => navigate('/')}>Already have an account? Login here.</button>
            </form>
        </div>
    )
}
export default Register;