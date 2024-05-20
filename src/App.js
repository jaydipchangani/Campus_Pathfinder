import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './home';
import Explore from './Explore';
import List from './List';
import Nav from './nav'; // Ensure the correct path and no .js extension
import N2 from './nav2'; // Ensure the correct path and no .js extension
import Userform from './user_form';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/explore' element={<Explore />} />
        <Route path='/nav' element={<Nav />} />
        <Route path='/nav2' element={<N2 />} />
        <Route path='/list' element={<List />} />
        <Route path='/userform' element={<Userform />} />
      </Routes>
    </Router>
  );
}

export default App;
