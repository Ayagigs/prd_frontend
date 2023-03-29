import React, { useState } from 'react';
import '../assets/SignIn.css';
import { signInWithPopup } from 'firebase/auth';
// import { auth, provider } from '../config';
import axios from 'axios';
import { toast } from 'react-toastify';
import { NavLink } from 'react-router-dom';
// import { auth, provider } from '../config/firebase';
// import GoogleLogin from 'react-google-login';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router';
import Cookies from 'js-cookie';
import jwt_decode from 'jwt-decode';

function SignIn() {
  const responseGoogle = response => {
    console.log(response);
  };
  const [companyId, setCompanyId] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [choice, setChoice] = useState('');
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    password: '',
    emailOrCompanyName: '',
  });
  const [empFormData, setEmpFormData] = useState({
    password: '',
    employeeID: '',
  });
  

  const handleInputChange = event => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSignIn = async event => {
    event.preventDefault();
    setIsLoading(true);
    try {
      
      const res = await axios.post(
        'https://pms-jq9o.onrender.com/api/v1/admin/login',
        formData
        );
        toast.success('Login Successfully');
        setIsLoading(false);
      
      Cookies.set('companyID', res.data.data._id);
      Cookies.set('Token', res.data.token);
      navigate('/dashboard');
    } catch (error) {
      toast.error(error.response.data.message)
      setIsLoading(false)
    }
  };
  
  const handleSubmit = async event => {
    event.preventDefault();
    setIsLoading(true)
    try{
      
        const res = await axios.post(
        'https://pms-jq9o.onrender.com/api/v1/employee/login',
        empFormData
        );
        setIsLoading(false)
        toast.success('Login Successfully');
        Cookies.set("EmpToken", res.data.token)
        navigate('/emp-dashboard')
        
      
    }catch(error){
      setIsLoading(false)
      toast.error(error.response.data.message)
    }
    
  };

  const responseSuccessGoogle = response => {
    // var decoded = jwt_decode(response.credential);

    axios({
      method: 'POST',
      url: 'https://pms-jq9o.onrender.com/auth/google/callback',
      data: { tokenId: response.credential },
    }).then(response => {
      if (response) {
        console.log(response);
      }
      console.log(response);
    });
  };
  const responseErrorGoogle = response => {
    console.log('Login failed:', response);
  };
  const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;
  console.log(clientId);
  return (
    <div className="signInContainer">
      <h1 className="text">Welcome Back</h1>
      <p className="text_2">We’ve missed you so much</p>

      <div className="googleSignInButton">
        <GoogleOAuthProvider
          clientId="644468853015-cadrgrgrabl4vacc4evt7g342qiqa2t2.apps.googleusercontent.com"
          redirectUri="https://pms-jq9o.onrender.com/auth/google/callback"
        >
          <GoogleLogin
            buttonText="Login with google"
            onSuccess={responseSuccessGoogle}
            onFailure={responseErrorGoogle}
          />
        </GoogleOAuthProvider>
      </div>

      <div className="box">
        <div className="innerBox">
          <div className="or">
            <div></div>
            <p className="choice">
              <span onClick={() => setChoice('Employee')}>Employee</span> or{' '}
              <span onClick={() => setChoice('Admin')}>Admin</span>
            </p>
            <div></div>
          </div>
        </div>
      </div>

      {/* Admin Form */}
      <form onSubmit={handleSignIn} className={choice === 'Admin' ? 'show' : 'hide'}>
        <label className="inputLabel">
          Company Name or Company Email:
          <input
            className="inputField"
            type="text"
            name="emailOrCompanyName"
            value={formData.emailOrCompanyName}
            onChange={handleInputChange}
            placeholder="Enter your Company Name or Email"
          />
        </label>
        <label className="inputLabel">
          Password:
          <input
            className="inputField"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            placeholder="Enter your password"
          />
        </label>
        <p className="text_3">
          <a href="/forgotpassword">Forgot password?</a>
        </p>

        <button className="signInButton" type="submit">
          {isLoading ? 'Submitting...' : 'Login'}
        </button>
        <p className="last_text">
          I would rather
          <span>
            <NavLink to={'/register'}>Sign up</NavLink>
          </span>
        </p>
      </form>

      {/* Employee Form */}
      <form onSubmit={handleSubmit} className={choice === 'Employee' ? 'show' : 'hide'}>
        <label className="inputLabel">
          Employee Id:
          <input
            className="inputField"
            type="text"
            name="emailOrCompanyName"
            value={empFormData.employeeID}
            onChange={(e) => setEmpFormData({...empFormData, employeeID: e.target.value})}
            placeholder="Enter your Id"
          />
        </label>
        <label className="inputLabel">
          Password:
          <input
            className="inputField"
            type="password"
            name="password"
            value={empFormData.password}
            onChange={(e) => setEmpFormData({...empFormData, password: e.target.value})}
            placeholder="Enter your password"
          />
        </label>
        <p className="text_3">
          <a href="/forgotpassword">Forgot password?</a>
        </p>

        <button className="signInButton" type="submit">
          {isLoading ? 'Submitting...' : 'Login'}
        </button>
        <p className="last_text">
          I would rather
          <span>
            <NavLink to={'/register'}>Sign up</NavLink>
          </span>
        </p>
      </form>
    </div>
  );
}

export default SignIn;
