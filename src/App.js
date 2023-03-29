import React from 'react';

// Import for Admin Dashboard
import './assets/app.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { Home1 } from './pages';
import { MainContent } from './components';
import Register from './pages/Register';
import SignIn from './pages/SignIn';
import GetDemo from './pages/getDemo';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import List from './pages/list/List';
import Single from './pages/single/Single';
import New from './pages/new/New';
import Goals from './pages/goals/Goals';
import Performance from './pages/performance/Performance';
import Settings from './pages/settings/Settings';
import Wallet from './pages/wallet/Wallet';
import Bulk from './pages/bulk/Bulk';
import Singleadd from './pages/singleadd/Singleadd';
import Trial from './pages/trial/Trial';
import Verify from './pages/verify/Verify';
import Verifybulk from './pages/verifybulk/Verifybulk';

// imports for Employee Dashboard
import Emphome from './empdashboard/pages/home/Emphome';
import Goalreview from './empdashboard/pages/goalreview/Goalreview';
import Empperformance from './empdashboard/pages/performance/Empperformance';
import Empgoals from './empdashboard/pages/goals/Empgoals';
import Appraisal from './empdashboard/pages/appraisalform/Appraisal';
import Addgoal from './empdashboard/pages/addgoal/Addgoal';
import Empsettings from './empdashboard/pages/settings/Empsettings';
import Empwallet from './empdashboard/pages/wallet/Empwallet';
import Homeperf from './empdashboard/pages/homeperf/Homeperf';
import Appraisal360 from './empdashboard/pages/appriasal360/Appraisal360';



import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { productInputs, userInputs } from './formSource';
import './style/dark.scss';
import { useContext } from 'react';
import { DarkModeContext } from './context/darkModeContext';

import ForgotPasswordPage from './pages/forgotPassword/ForgotPasswordPage';
import ResetPasswordPage from './pages/resetPassword/ResetPasswordPage';

function App() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? 'app dark' : 'app'}>
      <BrowserRouter>
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Home1 />}>
            <Route index element={<MainContent />} />
          </Route>
          <Route path="register" element={<Register />} />
          <Route path="signin" element={<SignIn />} />
          <Route path="demo" element={<GetDemo />} />
          <Route path="forgotpassword" element={<ForgotPasswordPage />} />
          <Route
            path="resetpassword/:resetToken"
            element={<ResetPasswordPage />}
          />

          {/* Admin Dashboard */}
          <Route path="/">
            <Route path="login" element={<Login />} />
            <Route path="dashboard" element={<Home />} />
            <Route path="employee">
              <Route index element={<List />} />
              <Route path=":userId" element={<Single />} />
              <Route
                path="/employee/trial/new/"
                element={<New inputs={userInputs} title="Add Employee" />}
              />
              <Route path="/employee/trial/new/bulk" element={<Bulk />} />
              <Route
                path="/employee/trial/new/bulk/verifybulk"
                element={<Verifybulk />}
              />
              <Route path="/employee/trial" element={<Trial />} />
              <Route
                path="/employee/trial/new/singleadd"
                element={<Singleadd />}
              />
              <Route
                path="/employee/trial/new/singleadd/verify"
                element={<Verify />}
              />
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

            {/* Employee Dashboard */}

            <Route path="emp-dashboard">
              <Route index element={<Emphome />} />
              <Route path="/emp-dashboard/appraisal" element={<Emphome />} />
              <Route path="/emp-dashboard/goalreview" element={<Goalreview />}/>
              <Route path="/emp-dashboard/performancereview" element={<Homeperf />}/>
              <Route path="/emp-dashboard/goalreview/appraisalform" element={<Appraisal />}/>
              <Route path="/emp-dashboard/appraisal/appraisal360" element={<Appraisal360 />}/>              
            </Route>
            <Route path="empgoals">
              <Route index element={<Empgoals />} />
              <Route path="/empgoals/addgoal" element={<Addgoal />}/>
            </Route>
            <Route path="empperformance">
              <Route index element={<Empperformance />} />
            </Route>
            <Route path="empsettings">
              <Route index element={<Empsettings />} />
            </Route>
            <Route path="empwallet">
              <Route index element={<Empwallet />} />
            </Route>
          </Route> 
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
