import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Greeting from './Greeting.jsx';

const RoutesApp = () => {
  return (
    <Routes>
      <Route path='/' element={<Greeting />}/>
    </Routes>
  );
};

export default RoutesApp;
