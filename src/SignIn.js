import React, { useState } from "react";
import "./SignIn.css";

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
    // Your sign-in with Google logic here
  };

  return (
    <div className="signInContainer">
      <h1 class="text">Welcome Back</h1>
      <p class="text_2">We’ve missed you so much</p>
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
        <p class="text_3">
          <a href="#">Forgot password?</a>
        </p>
        <button className="signInButton" type="submit">
          Login
        </button>
        <p class="last_text">
          I would rather
          <span>
            <a href="#">Sign up</a>
          </span>
        </p>
      </form>
    </div>
  );
}

export default SignIn;
