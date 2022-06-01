import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './index.css';
import App from './components/App';
import Feed from './components/Feed';
import Profile from './components/Profile';
import Chat from './components/Chat';
import Vent from './components/Vent';
import Status from './components/Status';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<App />}>
          <Route path="/vent" element={<Vent />} /> 
          <Route path="/feed/:feedId" element={<Feed />} /> 
          <Route path="/profile/:userId" element={<Profile />} /> 
          <Route path="/chat" element={<Chat />} /> 
          <Route path="/status" element={<Status />} />
        </Route>
      </Routes>
    
  </BrowserRouter>
);


