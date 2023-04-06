import React, { useState } from 'react';
import '../assets/SignIn.css';
import axios from 'axios';
import { toast } from 'react-toastify';
import { NavLink, useNavigate } from 'react-router-dom';
// import { useNavigate } from 'react-router';
import Cookies from 'js-cookie';
import { useGoogleLogin } from '@react-oauth/google';
import { RingLoader } from 'react-spinners';

function SignIn() {
  const responseGoogle = response => {
    console.log(response);
  };
  const [isLoading, setIsLoading] = useState(false);
  const [choice, setChoice] = useState('Admin');
  const navigate = useNavigate();
  const [popup, setPopup] = useState(false);

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
      toast.error(error.response.data.message);
      setIsLoading(false);
    }
  };

  const handleSubmit = async event => {
    event.preventDefault();
    setIsLoading(true);
    try {
      const res = await axios.post(
        'https://pms-jq9o.onrender.com/api/v1/employee/login',
        empFormData
      );

      setIsLoading(false);
      toast.success('Login Successfully');
      Cookies.set('EmpToken', res.data.token);
      Cookies.set('empCompanyID', res.data.data.companyID);
      Cookies.set('Role', res.data.data.role)
      console.log(res.data.data.selfAppraised)
      navigate('/emp-dashboard');
    } catch (error) {
      setIsLoading(false);
      toast.error(error.response.data.message);
    }
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

        if (user.data.data.admin) {
          Cookies.set('companyID', user.data.data.admin._id);
          Cookies.set('Token', user.data.data.token);
          toast.success('Login successful');

          navigate('/dashboard');
        } else if (user.data.data.employee) {
          Cookies.set('EmpToken', user.data.data.token);

          navigate('/emp-dashboard');
          toast.success('Login successful');
        }
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
      toast.error('There was an error logging in. Please try again later.');
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
          {isLoading ? (
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <RingLoader color="#36d7b7" size={24} />
              <span style={{ marginLeft: '8px' }}>Verifying...</span>
            </div>
          ) : (
            'Login with Google'
          )}
        </button>
      </div>

      <div className="box">
        <div className="innerBox">
          <div className="or">
            <div></div>
            <p className="choice">
              <span onClick={() => setChoice('Employee')}>Employee</span> or{' '}
              <span onClick={() => setChoice('Admin')}>Ceo</span>
            </p>
            <div></div>
          </div>
        </div>
      </div>

      {/* Admin Form */}
      <form
        onSubmit={handleSignIn}
        className={choice === 'Admin' ? 'show' : 'hide'}
      >
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
      <form
        onSubmit={handleSubmit}
        className={choice === 'Employee' ? 'show' : 'hide'}
      >
        <label className="inputLabel">
          Employee Id:
          <input
            className="inputField"
            type="text"
            name="emailOrCompanyName"
            value={empFormData.employeeID}
            onChange={e =>
              setEmpFormData({ ...empFormData, employeeID: e.target.value })
            }
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
            onChange={e =>
              setEmpFormData({ ...empFormData, password: e.target.value })
            }
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
      {/* {popup ? <SignIn className="signinpopup" /> : undefined} */}
    </div>
  );
}

export default SignIn;
