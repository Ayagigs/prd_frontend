import React, { useState } from "react";
import "./Email.css";

function Form() {
  const [code, setCode] = useState("");
  const email = "adebisi@gmail.com"; // this email will be replaced with the actual email address

  const handleSubmit = (event) => {
    event.preventDefault();
    // this is the send OTP verification request to API service
  };

  const handleResend = () => {
    //this is the send OTP resend request to API service
  };

  return (
    <div className="form-container">
      <img src="" alt="Message Image" />
      <div className="instructions">Please enter the code sent to {email}</div>
      <form onSubmit={handleSubmit}>
        <div className="code-input">
          <input
            type="text"
            value={code}
            onChange={(event) => setCode(event.target.value)}
            maxLength="1"
            pattern="[0-9]*"
            required
          />
          <input
            type="text"
            value={code}
            onChange={(event) => setCode(event.target.value)}
            maxLength="1"
            pattern="[0-9]*"
            required
          />
          <input
            type="text"
            value={code}
            onChange={(event) => setCode(event.target.value)}
            maxLength="1"
            pattern="[0-9]*"
            required
          />
          <input
            type="text"
            value={code}
            onChange={(event) => setCode(event.target.value)}
            maxLength="1"
            pattern="[0-9]*"
            required
          />
          <input
            type="text"
            value={code}
            onChange={(event) => setCode(event.target.value)}
            maxLength="1"
            pattern="[0-9]*"
            required
          />
        </div>
        <button type="submit">Verify</button>
      </form>
      <div className="resend-link" onClick={handleResend}>
        Didn’t get OTP? Resend
      </div>
    </div>
  );
}

export default Form;
