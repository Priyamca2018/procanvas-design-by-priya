import React from 'react';
import './App.css';
import SideNavBar from './components/SideNavBar/SideNavBar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div>
      <SideNavBar />
    </div>
  );
}

export default App;
