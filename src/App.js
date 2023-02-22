import './App.css';
import Navbar from './component/Navbar';
import Editor from './component/Editor';
import About from './component/About';
import { useState } from 'react';
import Alert from './component/Alert';
import React from "react";
import {
  BrowserRouter as Router,
  Routes,     //alter native of switch in new router version
  Route,
} from "react-router-dom";
function App() {
  let [mode,setmode]=useState('light');
  let  [alert,setalert]=useState(null);
  const showalert=(message,type)=>{
    setalert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setalert(null);
    }, 1000);
  }
  const togglemode=()=>{
    if(mode==='light'){
      setmode('dark')
      document.body.style.background='#0c0828'
      document.body.style.color='white'
      showalert('Enabled dark mode','Success')
    }
    else{
      setmode('light')
      document.body.style.background='white'
      document.body.style.color='black'
      showalert('Enabled light mode','success')
    }
  }
  
  return (
    <> 
    <Router>
    <Navbar mode={mode} title='TextEditor' togglemode={togglemode}  />
    <Alert alert={alert}/>
    <div className="container">
    <Routes>
          <Route exact path="/about" element={<About mode={mode} />} />
          <Route exact path="/" element={<Editor mode={mode} showalert={showalert}/>} />
          
          </Routes>
   </div>   
   </Router>
    </>
  );
}

export default App;
