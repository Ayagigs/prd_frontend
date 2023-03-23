import React from 'react';
import './assets/app.css'
import { Home1 } from './pages'
import { MainContent } from './components';
import Register from "./pages/Register";
import SignIn from "./pages/SignIn";
import GetDemo from './pages/getDemo';
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import Goals from "./pages/goals/Goals";
import Performance from "./pages/performance/Performance";
import Settings from "./pages/settings/Settings";
import Wallet from "./pages/wallet/Wallet";
import Bulk from "./pages/bulk/Bulk";
import Singleadd from "./pages/singleadd/Singleadd";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { productInputs, userInputs } from "./formSource";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import Trial from './pages/trial/Trial';
import Verify from './pages/verify/Verify';



function App() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div  className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home1 />}>
              <Route index element={<MainContent />}/>
          </Route>
          <Route path='register' element={<Register/>}/>
          <Route path='signin' element={<SignIn />}/>
          <Route path='demo' element={<GetDemo />}/>
          <Route path="/">
            <Route path="login" element={<Login />} />
            <Route path="dashboard" element={<Home />} />
            <Route path="employee">
              <Route index element={<List />} />
              <Route path=":userId" element={<Single />} />
              <Route path="/employee/trial/new/" element={<New inputs={userInputs} title="Add Employee" />}/>
              <Route path="/employee/trial/new/bulk" element={<Bulk />}/>
              <Route path="/employee/trial" element={<Trial />}/>
              <Route path="/employee/trial/new/singleadd" element={<Singleadd />}/>
              <Route path="/employee/trial/new/singleadd/verify" element={<Verify />}/>
            </Route>
            <Route path="goals">
              <Route index element={<Goals />} />
              <Route path=":productId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={productInputs} title="Add New Product" />}
              />
            </Route>
            <Route path="performance">
              <Route index element={<Performance />} />
              
            </Route>
            <Route path="settings">
              <Route index element={<Settings />} />
            </Route>
            <Route path="wallet">
            <Route index element={<Wallet />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App
