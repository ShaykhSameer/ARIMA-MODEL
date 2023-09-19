import React, { useEffect, useState,uesRef } from 'react';
import { Dropdown } from 'primereact/dropdown';
import { useParams } from 'react-router-dom';
import axios from 'axios';
const Update = () => {
  const [username, setUsername] = useState('');
const {id}=useParams();
useEffect(()=>{
  axios.get(`http://localhost:3001/getUser/${id}`)
  .then(result=>setUsername(result.data.getuser.username))
  // setUsername(result.data.user)
  .catch(err=>console.log(err))
},[id])
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.put(`http://localhost:3001/updateUser/${id}`,{username})
    .then(result=>console.log(result))
    .catch(err=>console.log(err))
    
    
  };
  
  
  // const [selectedCity, setSelectedCity] = useState(null);
 

 
  return (
      <div >
      /* <h1>Enter Your Username</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={handleUsernameChange}
        />
        <button type="submit">Submit</button>
      </form>
    {/* <select className=''>
      <option className=''>City</option>
      <option>Lahore</option>

    </select> */}
   
  </div>
    
  );
};

export default Update;
