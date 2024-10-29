import React from 'react';
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import Value from './Components/Value/Value';
import Companies from "./Components/Companies/Companies";
import Residencies from "./Components/Residencies/Residencies";
import Contact from './Components/Contact/Contact';
import GetStarted from './Components/GetStarted/GetStarted';
import Footer from './Components/Footer/Footer';
import './App.css';


function App() {
  return (
    <div className="app">
      <div className="white-gradient" />
      <Header />
      <main>
        <Hero />
        <Companies />
        <Residencies />
        <Value/>
        <Contact/>
        <GetStarted/>
        <Footer/>
      </main>
    </div>
  );
}

export default App;
