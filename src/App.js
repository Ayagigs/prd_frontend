import React from 'react';
import './components/style.css';
import Nav from './components/navBar.js';
import HomePage from './components/homePage';


function App() {
  return (
    <div className='App'>
        <Nav />
        <HomePage />
    </div>
  )
}

export default App;
