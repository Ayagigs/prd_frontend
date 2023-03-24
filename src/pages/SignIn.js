import React, { useState } from 'react';
import '../assets/SignIn.css';
import { signInWithPopup } from 'firebase/auth';
// import { auth, provider } from '../config';
import axios from 'axios';
import { toast } from 'react-toastify';
import { NavLink } from 'react-router-dom';
import { auth, provider } from '../config/firebase';
// import GoogleLogin from 'react-google-login';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';

function SignIn() {
  const responseGoogle = response => {
    console.log(response);
  };
  const [companyId, setCompanyId] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

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
      console.log(res.data);
      setIsLoading(false);
      toast.success('Login Successfully');
      //   setPopup(true);
    } catch (error) {
      console.log(error.message);
      setIsLoading(false);
      // toast.error(error.response.data.message);
    }
  };

  const signInWithGoogle = async response => {
    // response = await signInWithPopup(auth, provider);
    // console.log(response._tokenResponse.idToken);
    // try {
    //   response = await signInWithPopup(auth, provider);
    //   setIsLoading(true);
    //   const res = await axios.post(
    //     'http://localhost:3030/api/v1/admin/googlelogin',
    //     {
    //       tokenId: response._tokenResponse.idToken,
    //     }
    //   );
    //   // console.log(res);
    //   if (res) {
    //     console.log('submitted');
    //   }
    //   console.log('submitted');
    //   setIsLoading(false);
    //   toast.success('Login Successfully');
    //   //   setPopup(true);
    // } catch (error) {
    //   console.log(error.message);
    //   setIsLoading(false);
    //   // toast.error(error.response.data.message);
    // }
    // try {
    //   axios({
    //     method: 'POST',
    //     url: 'https://pms-jq9o.onrender.com/api/v1/admin/googlelogin',
    //     data: { tokenId: response._tokenResponse.idToken },
    //   }).then(response => {
    //     if (response) {
    //       console.log(response);
    //     }
    //     console.log(response);
    //   });
    // } catch (error) {
    //   console.log('ERROR SUBMITTING');
    //   // toast.error(error.response.data.message);
    // }
  };

  const responseSuccessGoogle = response => {
    console.log(response);
  };
  const responseErrorGoogle = response => {};

  return (
    <div className="signInContainer">
      <h1 className="text">Welcome Back</h1>
      <p className="text_2">We’ve missed you so much</p>
      {/* <button className="googleSignInButton" onClick={signInWithGoogle}>
        <img
          src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
          alt="Google logo"
        />
        Login with google
      </button> */}
      {/* googleSignInButton */}

      <div className="googleSignInButton">
        <GoogleOAuthProvider
          clientId="644468853015-cadrgrgrabl4vacc4evt7g342qiqa2t2.apps.googleusercontent.com"
          redirectUri="http://localhost:3000/api/v1/admin/googlelogin"
        >
          <GoogleLogin
            buttonText="Login with google"
            onSuccess={responseSuccessGoogle => {
              console.log(responseSuccessGoogle);
            }}
            onFailure={responseErrorGoogle => {
              console.log(responseErrorGoogle);
            }}
          />
        </GoogleOAuthProvider>
      </div>

      <div className="box">
        <div className="innerBox">
          <div className="or">
            <div></div>
            <p>or</p>
            <div></div>
          </div>
        </div>
      </div>
      <form onSubmit={handleSignIn}>
        <label className="inputLabel">
          Company ID:
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
          <a href="/">Forgot password?</a>
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
