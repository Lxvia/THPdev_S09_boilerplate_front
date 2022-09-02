import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import LogIn from './components/LogIn';
import SignUp from './components/SignUp';
import Navigation from './components/Navigation';
import SendEmail from './components/SendEmail';
import ResetPassword from './components/ResetPassword';

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/users/password" element={<SendEmail />} />
          <Route path="/users/:token" element={<ResetPassword />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};



export default App;