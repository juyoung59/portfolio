import React, {useContext} from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import './App.module.scss';
import Home from './components/home/Home'
import About from './components/about/About'
import ScrollToTop from './components/scollToTop/ScrollToTop';
import Project from './components/project/Projects'
import Header from './components/Navbar'
import Footer from './components/footer/Footer';

const App = () => {

  return (
    <Router>
      <div>
        <Header />
        
        <main>          
          <Home />
          <About />
          <Project />
        </main>

        <ScrollToTop />
        <Footer />
      </div>
    </Router>
  );
}


export default App;
