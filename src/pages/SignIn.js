import React, { useState } from "react";
import '../assets/SignIn.css'
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { NavLink } from "react-router-dom";

// Replace the following with Aya-Pms Firebase config
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function SignIn() {
  const [companyId, setCompanyId] = useState("");
  const [password, setPassword] = useState("");

  const handleCompanyIdChange = (event) => {
    setCompanyId(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSignIn = (event) => {
    event.preventDefault();
    // Your sign-in logic here
  };

  const handleGoogleSignIn = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        // Handle successful sign-in here
        console.log(result);
      })
      .catch((error) => {
        // Handle sign-in error here
        console.log(error);
      });
  };

  return (
    <div className="signInContainer">
      <h1 className="text">Welcome Back</h1>
      <p className="text_2">We’ve missed you so much</p>
      <button className="googleSignInButton" onClick={handleGoogleSignIn}>
        <img
          src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
          alt="Google logo"
        />
        Login with google
      </button>

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
            value={companyId}
            onChange={handleCompanyIdChange}
            placeholder="Enter your Name"
          />
        </label>
        <label className="inputLabel">
          Password:
          <input
            className="inputField"
            type="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="Enter your password"
          />
        </label>
        <p className="text_3">
          <a href="/">Forgot password?</a>
        </p>
        <button className="signInButton" type="submit">
          Login
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
