import React from 'react';
import { Route, Routes } from 'react-router-dom'
import { Home } from './pages'
import './assets/app.css'
import { MainContent } from './components'
import Register from "./pages/Register";
import SignIn from "./pages/SignIn";
import GetDemo from './pages/getDemo';

function App() {
  return (
    <>
    <div className="App">
    <Routes>
      <Route path='/' element={<Home />}>
        <Route index element={<MainContent />}/>
      </Route>
      <Route path='/register' element={<Register/>}/>
      <Route path='/signin' element={<SignIn />}/>
      <Route path='/demo' element={<GetDemo />}/>
    </Routes>
  </div>
    </>
);
}

export default App
