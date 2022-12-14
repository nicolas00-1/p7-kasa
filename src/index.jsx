import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import Lodging from './pages/Lodging'
import Header from './components/Header'
import Footer from './components/Footer'
import Error from './components/Error'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/lodging/:lodgingId" element={<Lodging />} />
          <Route path ="*" element={<Error />} />
        </Routes>
        <Footer />
      </Router>
  </React.StrictMode>
);

