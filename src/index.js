import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import {
  BrowserRouter as Router, Routes,
  Route,
} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Quote from './components/Quote';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/app" element={<App />} />
      <Route path="/quote" element={<Quote />} />
    </Routes>
  </Router>,
  document.getElementById('root'),
);