import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Services from './components/Services';
import Infrastructure from './components/Infrastructure';
import DataCenter from './components/DataCenter';
import NeoCloudz from './components/NeoCloudz';
import Careers from './components/Careers';
import SECFilings from './components/SECFilings';
import ARMS from './components/ARMS';
import Leadership from './components/Leadership';
import DemiPage from './components/DemiPage';
import { Footer } from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <main className="min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/infrastructure" element={<Infrastructure />} />
          <Route path="/data-centers" element={<DataCenter />} />
          <Route path="/neocloudz" element={<NeoCloudz />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/sec-filings" element={<SECFilings />} />
          <Route path="/arms" element={<ARMS />} />
          <Route path="/leadership" element={<Leadership />} />
          <Route path="/demi" element={<DemiPage />} />
        </Routes>
        <Footer />
      </main>
    </Router>
  );
}

export default App;
