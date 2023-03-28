import React, { useState } from 'react';
import '../assets/SignIn.css';
import axios from 'axios';
import { toast } from 'react-toastify';
import { NavLink } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router';
import Cookies from 'js-cookie';
import jwt_decode from 'jwt-decode';
import { useGoogleLogin } from '@react-oauth/google';

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

  const handleInputChange = event => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSignIn = async event => {
    event.preventDefault();
    try {
      setIsLoading(true);

      const res = await axios.post(
        'https://pms-jq9o.onrender.com/api/v1/admin/login',
        formData
      );
      setIsLoading(false);
      toast.success('Login Successfully');
      navigate('/dashboard');

      Cookies.set('companyID', res.data.data._id);
      Cookies.set('Token', res.data.token);
    } catch (error) {
      try {
        const res = await axios.post(
          'https://pms-jq9o.onrender.com/api/v1/employee/login',
          {
            employeeID: formData.emailOrCompanyName,
            password: formData.password,
          }
        );
        setIsLoading(false);
        toast.success('Login Successfully');
        navigate('/emp-dashboard');

        Cookies.set('EmpToken', res.data.token);
      } catch (error) {
        setIsLoading(false);
        toast.error('No Crendentials Found');
      }
    }

    axios
      .get('https://pms-jq9o.onrender.com/api/v1/admin/findme', {
        headers: { Authorization: `Bearer ${Cookies.get('Token')}` },
      })
      .then(res => {
        Cookies.set('companyID', res.data.data.company[0].companyID);
      });
  };

  const googleLogin = useGoogleLogin({
    onSuccess: async tokenResponse => {
      setIsLoading(true);
      const userInfo = await axios
        .get('https://www.googleapis.com/oauth2/v3/userinfo', {
          headers: { Authorization: `Bearer ${tokenResponse.access_token}` },
        })
        .then(res => res.data);

      try {
        // Check if user is an employee or admin
        const user = await axios.post(
          'https://pms-jq9o.onrender.com/auth/google/callback',
          { email: userInfo.email }
        );
        console.log(user.data); // log the user details returned from the server
        // ... code to redirect to appropriate dashboard ...
      } catch (error) {
        console.log('Error logging in with Google:');
        let errorMessage =
          'There was an error logging in. Please try again later.';
        if (
          error.response &&
          error.response.data &&
          error.response.data.message
        ) {
          errorMessage = error.response.data.message;
        }
        // display an error message to the user
        toast.error(errorMessage);
      } finally {
        // wait for 500ms before setting isLoading to false
        setTimeout(() => {
          setIsLoading(false);
        }, 500);
      }
    },
    onError: () => {
      setIsLoading(true);
      console.log('Error logging in with Google:');
      // display an error message to the user
      alert('There was an error logging in. Please try again later.');
      // wait for 500ms before setting isLoading to false
      setTimeout(() => {
        setIsLoading(false);
      }, 500);
    },
  });

  return (
    <div className="signInContainer">
      <h1 className="text">Welcome Back</h1>
      <p className="text_2">We’ve missed you so much</p>
      <div className="googleSignInButton">
        <button onClick={googleLogin}>
          {isLoading ? 'please wait...' : 'Login with Google'}
        </button>
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
      <form onSubmit={handleSignIn} className={choice !== '' ? 'show' : 'hide'}>
        <label className="inputLabel">
          {choice === 'Employee' ? 'Employee ID' : 'Company Name or Email'}:
          <input
            className="inputField"
            type="text"
            name="emailOrCompanyName"
            value={formData.emailOrCompanyName}
            onChange={handleInputChange}
            placeholder="Enter your Name"
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
    </div>
  );
}

export default SignIn;
