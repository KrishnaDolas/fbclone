import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'; // Import BrowserRouter alias as Router
import Home from './pages/home/Home';
import Profile from './pages/profile/Profile';
import Login from './pages/login/Login';
import Register from './pages/register/Register';

const App = () => {
  return (
    <Router> {/* Wrap your components/pages inside the Router component */}
      <Home/>
      {/* Define routes for other components/pages here */}
    </Router>
  );
}

export default App;
