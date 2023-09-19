import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, Link, useParams } from "react-router-dom";

import { Button } from 'primereact/button';
        
import { Dialog } from 'primereact/dialog';
import "../Styles/dashboard.css";



function Dashboard() {
  const [users, setUsers] = useState([]);
  const [adminLoggedIn, setAdminLoggedIn] = useState(false);
const[open,setOpen]=useState(false)
const [errors, setErrors] = useState({});
const [userName, setUsername] = React.useState("");
const [password, setPassword] = React.useState("");
const [country, setCountry] = React.useState("");
const [city, setCity] = React.useState("");
const [address, setAddress] = React.useState("");
const [role,setRole]=React.useState("");
// const handleUser= () => {
//   console.log(userName,password,country,city,address)
  // event.preventDefault();
  // // setErrors(Validation(values));
  // const newErrors = {};
  // if (!userName) {
  //     newErrors.userName = "Username is required";
  // }

  // if (!password) {
  //     newErrors.password = "Password is required";
  // }
  // else if (password.length < 8) {
  //     newErrors.password = "";
  // }
  // else if (!/[a-z]/.test(password) || !/[A-Z]/.test(password)) {
  //     newErrors.password = "";
  // }

  // // if (Object.keys(newErrors).length === 0) {
  // //     navigate("/Home");
  // // }

  // setErrors(newErrors);
  // axios.post('http://localhost:3001/user',{userName,password,country,city,address}).then(res=>console.log(res)).catch(err => console.log(err))
  // // axios.post('http://localhost:8000/emp/create', {name, password})
  // // .then(result => console.log(result))
  





  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("http://localhost:3001/admin-dashboard")
      .then((result) => {
        if (result.data.message === "ok from admin") {
          //setDashboardRoute("Hello i am admin");
          setAdminLoggedIn(true);
          console.log(result.data.allUsers.password);
          setUsers(result.data.allUsers);
          //setUsers(allusers);
          // console.log(users);
          navigate("/Dashboard");
        }
        // else {
        //   navigate("/");
        // }
      })
      .catch((error) => {
        console.error(error);
        navigate("/");
      });
  }, []);

  const cityOptions = {
    Pakistan: ['Lahore', 'Islamabad', 'Karachi', 'Multan'],
    India: ['Mumbai', 'Delhi', 'Bangalore', 'Chennai'],
    SriLanka: ['Colombo', 'Kandy', 'Galle'],
    Bangladesh: ['Dhaka', 'Chittagong', 'Sylhet'],
  };

  const handleCountryChange = (e) => {
    const selectedCountry = e.target.value;
    setCountry(selectedCountry);
    // Reset the selected city when the country changes
    setCity('');
  };

  const handleCityChange = (e) => {
    const selectedCity = e.target.value;
    setCity(selectedCity);
  };
  //delete user
  const handleDelete = (userId) => {
    axios
      .delete("http://localhost:3001/deleteUser/" + userId)
      .then((res) => {
        console.log(res);
        window.location.reload(); // Corrected function name
      })
      .catch((err) => console.log(err));
    console.log(userId);
  };
  const [selectedCity, setSelectedCity] = useState(null);

  const handleUser = (event) => {
    event.preventDefault();
    // setErrors(Validation(values));
    console.log(userName,password,address,role,country,city)
    
    

    
    axios.post('http://localhost:3001/newUser',{userName,password,address,role,country,city}).then(res=>console.log(res)).catch(err => console.log(err))
  
    
}
   
  // Empty dependency array means this effect runs only once on mount

  return (
    <>
      <div className="dashboard">
        <h1 style={{ color: "red" }}>Admin Dashboard</h1>
      </div>
      <div className="container">
        <button onClick={()=>setOpen(true)}>Add New User</button>
        <table>
          <thead>
            <tr>
              <th>Username</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <td>{user.userName}</td>
                <td>{user.role}</td>
                <td>
                  {/* <link to={`/update/${user._id}`}>edit</link> */}
                  <button onClick={(e) => handleDelete(user._id)}>
                    delete
                  </button>
                  <Link to={`/Update/${user._id}`}>edit</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Dialog onHide={()=>setOpen(false)} visible={open}>
      <div className="">
        <form className="form">
          <h1 className="header">Add New User</h1>
          <input
            type="text"
            className="custom"
            autoComplete="off"
            name="name"
            id="username"
            placeholder="Enter User Name"
            value={userName}
          onChange={(e)=>setUsername(e.target.value)}
            required
          />

          <br />

          <input
            type="password"
            autoComplete="off"
            name="password"
            className="custom"
            id="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            required
          />
          <br />
          

<input
  type="text"
  autoComplete="off"
  name="address"
  id="address"
  className="custom"
  placeholder="Enter User's Address"
  value={address}
  onChange={(e)=>setAddress(e.target.value)}
  required
/>
<br />
<input
  type="text"
  autoComplete="off"
  name="role"
  id="role"
  className="custom"
  placeholder="Enter Role"
  value={role}
  onChange={(e)=>setRole(e.target.value)}
  required
/>
<br />

<select
        className="custom1"
        value={country}
        onChange={handleCountryChange}
        placeholder="Enter Country"
      >
        <option value="">Select Your Country</option>
        <option value="Pakistan">Pakistan</option>
        <option value="India">India</option>
        <option value="SriLanka">Sri Lanka</option>
        <option value="Bangladesh">Bangladesh</option>
      </select>

      <select
        className="custom1"
        value={city}
        onChange={handleCityChange}
        placeholder="Enter City"
      >
        <option value="">Select Your City</option>
        {country && cityOptions[country] && cityOptions[country].map((cityName) => (
          <option key={cityName} value={cityName}>
            {cityName}
          </option>
        ))}
      </select>
 {/* <select  className="custom1" value={country} onChange={(e)=>setCountry(e.target.value)} placeholder="Enter Your Country">
  <option selected>Select Your Country</option>
  <option value="Pakistan">Pakistan</option>
  <option value="India">India</option>
  <option value="SriLanka">Sirilanka</option>
  <option value="Bangladesh">Bangladash</option>
 </select>

 <select  className="custom1" value={city} onChange={(e)=>setCity(e.target.value)} placeholder="Enter Your City">
  <option selected>Select Your City</option>
  <option value="Lahore">Lahore</option>
  <option value="Islamabad">Islamabad</option>
  <option value="Karachi">Karachi</option>
  <option value="Multan">Multan</option>
 </select> */}


          <div className="btnd">
            <button type="submit" className="butn" onClick={handleUser}>Submit</button>
          </div>
        </form>
      </div>
      </Dialog>
    </>
  );
}

export default Dashboard;
