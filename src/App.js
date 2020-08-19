import React from 'react';
import NavBar from './components/NavBar'
import LandingSection from './components/LandingSection'

import 'antd/dist/antd.css';
import './App.scss';

function App() {
  return (
    <div className="app">
      <NavBar />
      <LandingSection />
    </div>
  );
}

export default App;
