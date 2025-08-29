import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navvbar from './pages/Navvbar';
import Footerr from './pages/Footerr';
import HomePage  from './pages/HomePage'
import WeddingTypes from './pages/WeddingTypes';
import WeddingDetails from './pages/WeddingDetails';
import Services from './pages/Services';
import AboutUs from './pages/AboutUs';
import Contact from './pages/ContactPage';
import Login from './pages/Login';
import SignUp from './pages/Signup'
import BecomeHost from './pages/BeomeHost';
import FAQ from './pages/FAQ';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navvbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/wedding-types" element={<WeddingTypes />} />
          <Route path="/wedding/:id" element={<WeddingDetails />} />
          <Route path="/FAQ" element={<FAQ />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/BecomeHost" element={<BecomeHost />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
        <Footerr />
      </div>
    </Router>
  );
}

export default App;
