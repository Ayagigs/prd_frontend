import React, { useState } from 'react';
import '../style/Email.css';
import OtpInput from 'react-otp-input';
import axios from 'axios';
import { toast } from 'react-toastify';
import { FaSpinner } from 'react-icons/fa';
import { useNavigate } from 'react-router';

function Form(props) {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [otp, setOtp] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    setIsLoading(true);
    console.log(otp);
    axios
      .post('https://pms-jq9o.onrender.com/api/v1/admin/verifyotp', {
        OTP: otp,
      })
      .then(response => {
        // if (response.data.status === 'Success') {
        //   navigate('/dashboard');
        // }

        setIsLoading(false);
        console.log(response.data);
        toast.success(response.data.message);
        // handle successful response from the backend
        // setSuccess(true)
      })
      .catch(error => {
        setIsLoading(false);

        console.log(error.message);
        toast.error(error.response.data.message);
      });
  };

  const handleResend = () => {
    const data = {
      firstName: props.data.firstName,
      email: props.data.email,
    };

    axios
      .post('https://pms-jq9o.onrender.com/api/v1/admin/generateotp', {
        ...data,
      })
      .then(response => {
        toast.success('Please Check your email for OTP');
        setIsLoading(false);
      })
      .catch(error => {
        setIsLoading(false);
        toast.error(error.response.data.message);
      });
  };

  return (
    <div className={'form-container'}>
      <img src={require('../assets/img/sms.png')} alt="Message Image" />
      <div className="instructions">
        Please enter the code sent to {props.data.email}
      </div>
      <form onSubmit={handleSubmit}>
        <div className="code-input">
          <OtpInput
            value={otp}
            onChange={setOtp}
            numInputs={6}
            renderSeparator={<span>&nbsp; &nbsp;</span>}
            renderInput={props => <input {...props} />}
            className="otp"
          />
        </div>
        <button type="submit">
          {isLoading ? (
            <>
              <FaSpinner className="fa-spin" />
              &nbsp;Verifying...
            </>
          ) : (
            'Verify'
          )}
        </button>
      </form>
      <div className="resend-link" onClick={handleResend}>
        Didn’t get OTP? Resend
      </div>
    </div>
  );
}

export default Form;
