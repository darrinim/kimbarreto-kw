import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import Header from './components/header/Header';
import LandingHero from './components/LandingHero/LandingHero';
import About from './components/About/About';

function App() {
  return (
    <div className="App">
      <Header />
      <LandingHero />
      <About />
    </div>
  );
}

export default App;
