import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import FindDonor from './pages/FindDonor';
import BecomeDonor from './pages/BecomeDonor';
import Guidelines from './pages/Guidelines';
import Campaigns from './pages/Campaigns';
import About from './pages/About';
import HospitalPortal from './pages/HospitalPortal';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/find-donor" element={<FindDonor />} />
            <Route path="/become-donor" element={<BecomeDonor />} />
            <Route path="/guidelines" element={<Guidelines />} />
            <Route path="/campaigns" element={<Campaigns />} />
            <Route path="/about" element={<About />} />
            <Route path="/hospital-portal" element={<HospitalPortal />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
