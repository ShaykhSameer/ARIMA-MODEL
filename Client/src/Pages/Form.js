import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
//import "./style.css";
import "../Styles/style.css"
//import Validation from "./Validation";
import axios from 'axios'

function Form() {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
//const [isSubmitted,setSubmitted]=useSate(false);
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();
    const handleName = (e) => {
        setName(e.target.value);
    }
    const handlePassword = (e) => {
        setPassword(e.target.value);
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        // setErrors(Validation(values));
        const newErrors = {};
        if (!name) {
            newErrors.name = "Username is required";
        }

        if (!password) {
            newErrors.password = "Password is required";
        }
        else if (password.length < 8) {
            newErrors.password = "";
        }
        else if (!/[a-z]/.test(password) || !/[A-Z]/.test(password)) {
            newErrors.password = "";
        }

        // if (Object.keys(newErrors).length === 0) {
        //     navigate("/Home");
        // }

        setErrors(newErrors);
        axios.post('http://localhost:3001/user',{name,password}).then(res=>console.log(res)).catch(err => console.log(err))
        // axios.post('http://localhost:8000/emp/create', {name, password})
        // .then(result => console.log(result))
        
    }

    //console.log({ name, password });

    return (
        <div className="container">
            <form className="form" onSubmit={handleSubmit} >
                <h1 className="header">SignUp</h1>
                <div style={{marginLeft:"50px"}}>
                    <label>Username:</label>
                    <br />
                    <input
                        type="text"
                        autoComplete="off"
                        name="name"
                        id="username"
                        onChange={handleName}
                        required
                    />
                    {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
                    <br />
                </div>
                <div style={{marginLeft:"50px"}}>
                    <label>Password:</label>
                    <br />
                    <input
                        type="password"
                        autoComplete="off"
                        name="password"
                        id="password"
                        onChange={handlePassword}
                        required
                    />
                    {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
                    <br />
                </div>
                <br />
                < div className="buttons">
                <button type="submit" >Submit</button>
                
                <div style={{marginBottom: "10px"}}>
                   
                <Link to="/Login">
        <button>Go to Login Page</button>
      </Link>
                </div>
                </div>
            </form>
           
        </div>
    );
}

export default Form