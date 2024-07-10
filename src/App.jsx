import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Banner from './components/Banner/Banner';
import AboutSirocco from './components/AboutSirocco/AboutSirocco';
import Food from './components/Food/Food';
import Testimonials from './components/Testimonials/Testimonials';
import ReservationForm from './components/ReservationForm';
import AdminPanel from './components/AdminPanel';
import AdminLogin from './components/AdminLogin';
import Footer from './components/Footer/Footer';
import About from './pages/About/About';
import LiveEvents from './components/LiveEvents/LiveEvents';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <div className='app'>
        <Navbar />
        <Routes>
          <Route path="/" element={<>
            <Banner />
            <AboutSirocco />
            <Food />
            <LiveEvents />
            <Testimonials />
            <Footer />
          </>} />
          <Route path="/about" element={<About />} />
          <Route path="/reservations" element={<ReservationForm />} />
          <Route path="/admin" element={isAuthenticated ? <AdminPanel /> : <AdminLogin setAuth={setIsAuthenticated} />} />
          <Route path="/login" element={<AdminLogin setAuth={setIsAuthenticated} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
