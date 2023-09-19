import React from 'react';
import './Styles/mainpage.css'; // Import your stylesheet
import Form from './Pages/Form';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const BackgroundWithGradient = () => {
    const navigate=useNavigate(); 
    function handleClick(){

        navigate("/Form")

    }
  
  return (
  
    <div className="background-container">
        
      <div className="background-image"></div>
      <div className="gradient-overlay"></div>
      <div className="content">
        <h1 style={{ color: 'white' }}>Machine Learning Algorithm</h1>
<button onClick={(handleClick)}>Go to Login-Page</button>
      </div>
  
    </div>
   
  );
};

export default BackgroundWithGradient;
