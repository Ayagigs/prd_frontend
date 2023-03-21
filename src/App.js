import React from 'react';
import { Route, Routes } from 'react-router-dom'
import { Home } from './pages'
import './assets/app.css'
import { MainContent } from './components'
import Register from "./pages/Register";

function App() {
  return (
    <>
    <div className="App">
    <Routes>
      <Route path='/' element={<Home />}>
        <Route index element={<MainContent />}/>
      </Route>
      <Route path='/register' element={<Register/>}/>
  
    </Routes>
  </div>
    </>
);
}

export default App
