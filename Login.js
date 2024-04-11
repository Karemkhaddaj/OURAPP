import React, { useState } from 'react'
import "./Login.css"
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { app } from './firebaseConfig'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";


function Login() {

    const navigate = useNavigate();

    const [info, setInfo] = useState({
        email: "",
        password: ""
    })
    function handleChange(event) {
        const { name, value } = event.target;
        setInfo(prevInfo => ({
            ...prevInfo,
            [name]: value
        }))
    }
    function handleNavigation() {
        navigate('/register');
    }
    async function handleSubmit(event) {
        event.preventDefault();
        //Check if user is in the database (if yes => Login => go to home page), else you need to go and register for the first time 
        const auth = getAuth();
        try {
            const userCredential = await signInWithEmailAndPassword(auth, info.email, info.password);
            navigate('/home');
            console.log(userCredential)
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="login-container">
            <h2>
                Login
            </h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">email</label>
                <input onChange={handleChange} value={info.email} type="email" placeholder='youremail@...com' id="email" name="email" />
                <label htmlFor="password">password</label>
                <input onChange={handleChange} value={info.password} type="password" placeholder="**************" id="password" name="password" />
                <button type="submit">Log In</button>
            </form>
            <button className="register-btn" onClick={handleNavigation}>Don't have an account? Register here.</button>
        </div>
    )
}
export default Login;