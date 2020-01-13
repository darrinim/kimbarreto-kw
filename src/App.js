import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import Header from './components/header/Header';
import LandingHero from './components/LandingHero/LandingHero';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <LandingHero />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
