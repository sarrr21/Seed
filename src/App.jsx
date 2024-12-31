import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Page/Home';
import Airportpage from './Page/Airportpage';
import Ridepage from './Page/Ridepage';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/airport" element={<Airportpage />} />
        <Route path="/ride" element={<Ridepage />} />
      </Routes>
    </Router>
  );
};

export default App;
