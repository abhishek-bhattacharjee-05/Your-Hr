import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from './components/Signup';
import ThankYou from './components/ThankYou';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
       <Navbar />
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/thank-you" element={<ThankYou />} />
      </Routes>
    </Router>
  );
}

export default App;
