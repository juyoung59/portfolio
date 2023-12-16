import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.module.scss';
import Home from './components/home/Home'
import About from './components/about/About'
import Portfolio from './components/portfolio/Portfolio'
import Header from './components/Navbar'
import Footer from './components/footer/Footer';
import ScrollToTop from './components/scollToTop/ScrollToTop';
import './App.css'

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <main>
            <Home />
            <About />
            <Portfolio />
        </main>
        <ScrollToTop />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
