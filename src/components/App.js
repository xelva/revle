import React from 'react';
import './App.css';
import { Outlet } from 'react-router-dom';
import Nav from './Nav';


const App = () => {
  return (
    <div className="app-container">
      <div className="nav-container">
        <Nav />
      </div>
      <div className="content-container">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
