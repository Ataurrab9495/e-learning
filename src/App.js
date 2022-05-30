import React from 'react'
import './App.css';
import {Routes,Route} from 'react-router-dom'
import Main from './Components';
import Login from './Components/Login/Login';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" exact element={<Main/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </>
  );
}

export default App;
