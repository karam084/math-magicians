import React from 'react';
import Calculator from './components/Calculator';
import {
  BrowserRouter as Router, Routes,
  Route,
} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Quote from './components/Quote';

class App extends React.Component {
  render() {
    return (
      <Calculator />

    );
  }
}
export default App;