import React, {useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navvbar from './pages/Navvbar';
import Footerr from './pages/Footerr';
import HomePage  from './pages/HomePage'
import WeddingsPage from './pages/WeddingsPage';
import AboutUs from './pages/AboutUs';
import Contact from './pages/ContactPage';
import Login from './pages/Login';
import HostLandingPage from './pages/HostLandingPage';
import FAQ from './pages/FAQ';
import HostStep1 from './pages/HostStep1';
/* import HostStep2 from './pages/HostStep2';
import HostStep3 from './pages/HostStep3';
import HostStep4 from './pages/HostStep4';
import HostStep5 from './pages/HostStep5'; */
import './App.css';

function App() {


const [weddings, setWeddings] = useState(() => {
    const saved = localStorage.getItem('weddings');
    return saved ? JSON.parse(saved) : [];
  });

  const addWedding = (wedding) => {
    setWeddings((prev) => {
      const updated = [...prev, wedding];
      localStorage.setItem('weddings', JSON.stringify(updated));
      return updated;
    });
  };

   const [formData, setFormData] = useState({
    brideFirst: "",
    brideLast: "",
    groomFirst: "",
    groomLast: "",
    email: "",
    phone: "",
    date: "",
    location: "",
    venue: "",
    description: "",
    image: "",
  });

  return (
    <Router>
      <div className="App">
        <Navvbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/FAQ" element={<FAQ />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/BecomeHost" element={<HostLandingPage />} />
          <Route path="/weddings" element={<WeddingsPage weddings={weddings} />} />
           <Route
          path="/weddings/register/step1"
          element={<HostStep1 formData={formData} setFormData={setFormData} />}
        />
        {/* <Route
          path="/weddings/register/step2"
          element={<HostStep2 formData={formData} setFormData={setFormData} />}
        />
        <Route
          path="/weddings/register/step3"
          element={<HostStep3 formData={formData} setFormData={setFormData} />}
        />
        <Route
          path="/weddings/register/step4"
          element={<HostStep4 formData={formData} setFormData={setFormData} />}
        />
        <Route
          path="/weddings/register/step5"
          element={
            <HostStep5
              formData={formData}
              addWedding={addWedding}
            />
          }
        /> */}
        <Route
          path="/weddings"
          element={<WeddingsPage weddings={weddings} />}
        /> 
        </Routes>
        <Footerr />
      </div>
    </Router>
  );
}

export default App;
