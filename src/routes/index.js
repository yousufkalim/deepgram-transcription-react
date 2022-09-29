// Init
import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Routes
import Home from '../containers/Home.js';

const index = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default index;
