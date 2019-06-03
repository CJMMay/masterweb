import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Login from './component/login';
import Home from './component/home';
function App() {
  return (
    <Router>
      <Route path="/"  exact component={Login} />
      <Route path="/Home"  component={Home} />
  </Router>
  );
}

export default App;