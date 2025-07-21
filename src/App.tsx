import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import ContactForm from './components/ContactForm/ContactForm';
import Footer from './components/Footer/Footer';
import PropertiesPage from './pages/PropertiesPage';
import Office from './pages/Office';
import Residential from './pages/Residential';
import Directors from './pages/Directors';
import ExecutiveTeam from './pages/ExecutiveTeam';
import ManagementTeam from './pages/ManagementTeam';
import Financials2024 from './pages/Financials2024';
import Financials2023 from './pages/Financials2023';
import Financials2022 from './pages/Financials2022';
import Pensions from './pages/Pensions';
import Contact from './pages/Contact';

function App() {
  useEffect(() => {
    // Remove preload class after initial render to enable transitions
    const timer = setTimeout(() => {
      document.body.classList.remove('preload');
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <Navbar />

        <Routes>
          {/* Home Page */}
          <Route
            path="/"
            element={
              <>
                <Hero />
                <About />
                <ContactForm />
              </>
            }
          />

          {/* Properties Page */}
          <Route path="/properties" element={<PropertiesPage />} />
          
          {/* Property Type Pages */}
          <Route path="/office" element={<Office />} />
          <Route path="/residential" element={<Residential />} />
          
          {/* People Pages */}
          <Route path="/directors" element={<Directors />} />
          <Route path="/executive" element={<ExecutiveTeam />} />
          <Route path="/management" element={<ManagementTeam />} />
          
          {/* Financial Pages */}
          <Route path="/financials-2024" element={<Financials2024 />} />
          <Route path="/financials-2023" element={<Financials2023 />} />
          <Route path="/financials-2022" element={<Financials2022 />} />
          
          {/* Pensions Page */}
          <Route path="/pensions" element={<Pensions />} />
          
          {/* Contact Page */}
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
