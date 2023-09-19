import Home from './Pages/Home';
//import './App.css';
import "./Styles/App.css"
import {  Route,Routes } from 'react-router-dom';
import Form from './Pages/Form';
import BackgroundWithGradient from './BackgroundWithGradient';
import Nav from  '../src/Components/Nav';
//import Graph from './Graph';
import Contact from './Pages/Contact';
//import Tra from './Tra';
import Login from './Pages/Login';
import Update from './Components/Update';
import { useState } from 'react';
import Dashboard from './Components/Dashboard';
function App() {
  return (
   <>
   <Nav/>
<Routes>
  <Route path='/' element={<BackgroundWithGradient/>}></Route>
  <Route path='/Form' element={<Form/>}></Route>
  <Route path='/Home' element={<Home/>}></Route>
  <Route path='/Dashboard' element={<Dashboard/>}></Route>
  <Route path='/Contact' element={<Contact/>}></Route>
<Route path='/Login' element={<Login/>}></Route>
<Route path='/Update/:id' element={<Update/>}></Route>
</Routes>
   </>
  );
}
export default App;
