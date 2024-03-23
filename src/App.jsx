import React from 'react';
import { Routes,Route,BrowserRouter as Router } from 'react-router-dom'; // Import BrowserRouter alias as Router
import Home from './pages/home/Home';
import Profile from './pages/profile/Profile';
import Login from './pages/login/Login';
import Register from './pages/register/Register';

const App = () => {
  return (
    <Router>
    <Routes>
      
      <Route path="/fbclone" element={<Home/>} />
      <Route path="" element={<Home/>} />

    </Routes>
    </Router>
  );
}

export default App;
