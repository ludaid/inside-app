import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { login } from './loginSlice';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { Link, Navigate, useNavigate } from "react-router-dom";
import api from 'axios';

import './login.css'
export default function Login() {

    const navigate = useNavigate();

    const [email, setName] = useState("");
    const [validEmail, setValidEmail] = useState(true);
    const [pwd, setPass] = useState("");

    const handleUsernameChange = (event) => {
        setName(event.target.value);
    };

    //validation
    const isValidEmail = () => {
        const emailRegex = /^[a-zA-Z0-9]+@+[a-zA-Z0-9]+.+[A-z]/;
        if (emailRegex.test(email)) {
            setValidEmail(true);
            // Continue with login logic
          } else {
            setValidEmail(false);
          }
    }

    const handlePasswordChange = (event) => {
        setPass(event.target.value);
    };

    //redux
    const data = useSelector((state) => state.login.email)
    const dispatch = useDispatch()

    const userLogin = (event) => {
        event.preventDefault();
        let param = {
            "uname": email,
            "pwd": pwd
        }
        api.post("http://192.168.21.45:3000/login/", param)
            .then(response => {
                if (response.data.message == "Login successful") {
                    dispatch(login(email));
                    localStorage.setItem('userData', email)
                    navigate("/");
                }
                console.log();
            })
            .catch(error => {
                // Handle error.
                if(error.response.data.error=="Invalid credentials"){
                    alert("Invalid credentials")
                }
            });

    }
    return (
        <div className="padding">
            <Form onSubmit={userLogin}>
                <h5>Login</h5>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control required name="uname" value={email} onChange={handleUsernameChange} placeholder="Enter email" />
                </Form.Group>
                {!validEmail && <p>Please enter a valid email address.</p>}
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control required name="pwd" value={pwd} onChange={handlePasswordChange} type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" onClick={isValidEmail} type="submit">
                    Login
                </Button>
                <Link to='/'>
                    New User ? SignUp here
                </Link>
            </Form>
        </div>
    )
}
