import React, { useState } from "react";
import "../style/Email.css";
import OtpInput from 'react-otp-input';

function Form() {
  const [code, setCode] = useState({
    code1: '',
    code2: '',
    code3: '',
    code4: '',
    code5: ''
  });
  
  const [otp, setOtp] = useState('');
  const email = "adebisi@gmail.com"; // this email will be replaced with the actual email address

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(otp)
    // this is the send OTP verification request to API service
  };

  const handleResend = () => {
    //this is the send OTP resend request to API service
  };

  return (
    <div className="form-container">
      <img src={require('../assets/img/sms.png')} alt="Message Image" />
      <div className="instructions">Please enter the code sent to {email}</div>
      <form onSubmit={handleSubmit}>
        <div className="code-input">
        <OtpInput
          value={otp}
          onChange={setOtp}
          numInputs={5}
          renderSeparator={<span>&nbsp; &nbsp;</span>}
          renderInput={(props) => <input {...props} />}
          className="otp"
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
