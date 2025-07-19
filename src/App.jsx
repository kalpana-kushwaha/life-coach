import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import { AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Home from './components/Home';
import Contact from './components/contact';  
import Footer from './components/Footer';
import PageWrapper from './components/PageWrapper';
import './index.css';

const ScrollToHashElement = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/') {
      const hash = location.hash;
      if (hash) {
        const id = hash.replace('#', '');

        const scrollToElement = () => {
          const element = document.getElementById(id);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          } else {
            // Try again on next frame
            requestAnimationFrame(scrollToElement);
          }
        };

        scrollToElement(); // Initial attempt
      }
    }
  }, [location]);

  return null;
};


const HomePage = () => (
  <>
    <Home />
    <Footer />
  </>
);

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <>
      
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<PageWrapper><HomePage /></PageWrapper>} />
          <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />  
        </Routes>
      </AnimatePresence>
      <ScrollToHashElement />
    </>
  );
};

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <AnimatedRoutes />
    </Router>
  );
};

export default App;
