import { BrowserRouter, Route } from 'react-router-dom';
import Routes from './Routes.js';
import React from 'react';

import './App.css';


function App() {

  return (
  
    <>
      <BrowserRouter>
        <Routes/>
      </BrowserRouter>
    </>

  );
}

export default App;