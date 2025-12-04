
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Contact from './pages/Contact';
import Work from './pages/Work';
import CaseStudy from './pages/CaseStudy';

export default function App() {
  return (
    <Router basename="/jahangiruiux">
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/work" element={<Work />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/work/:id" element={<CaseStudy />} />
        </Routes>
      </Layout>
    </Router>
  );
}
