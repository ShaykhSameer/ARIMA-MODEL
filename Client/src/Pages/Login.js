import React, { useState } from "react";
import { useNavigate, Link} from "react-router-dom";
import "../Styles/style.css";
//import Validation from "./Validation";
import axios from 'axios'
//import Dashboard from "./Dashboard";
function Login() {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
//const [isSubmitted,setSubmitted]=useSate(false);
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();
    //const history = useHistory();
    axios.defaults.withCredentials=true;
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
        // else if (!/[a-z]/.test(password) || !/[A-Z]/.test(password)) {
        //     newErrors.password = "";
        // }

        
        
       

        setErrors(newErrors);
        axios.post('http://localhost:3001/login',{name,password})
        .then(res=>{
        alert(res.data.message)
        if (res.data.message === "Login successfull") {
            if(res.data.role==="admin")
            {
                console.log(res.data.role)
                navigate("/Dashboard")
            }
            else{
            navigate("/Home")
            } // Navigate to the homepage
        }
    })

        // axios.post('http://localhost:8000/emp/create', {name, password})
        // .then(result => console.log(result))
        
    }
    //console.log({ name, password });
    return (
        <div className="container">
            <form className="form" onSubmit={handleSubmit} >
                <h1 className="header">Login</h1>
                <div style={{marginLeft:"50px"}}>
                    <label >Username:</label>
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
                <div className="buttons">
                <button type="submit" >Submit</button>
                </div>
            </form>
           
        </div>
    );
}

export default Login;