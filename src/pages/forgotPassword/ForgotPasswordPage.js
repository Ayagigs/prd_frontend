import React, { useState } from 'react';
import axios from 'axios';
// import './ForgotPassword.css';
import './ResetPassword.css';
import { toast } from 'react-toastify';
import { FaSpinner } from 'react-icons/fa';

function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = event => {
    event.preventDefault();

    setIsLoading(true);
    axios
      .post('https://pms-jq9o.onrender.com/api/v1/admin/forgotpassword', {
        email,
      })
      .then(response => {
        setIsLoading(false);
        toast.success('Please Check your email for resetpassword Link');
        // console.log(response.data);
      })
      .catch(error => {
        setIsLoading(false);
        toast.error(error.response.data.message);
      });
  };

  return (
    <div className="modal-wrapper">
      <div className="modal-backdrop">
        <div className="modal-1">
          {/* <p>
            Forgot your password? Let us know your email address and we will
            email you a password reset link.{' '}
          </p> */}
          <p>Please provide your email address</p>
          <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email Address:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email address"
              value={email}
              onChange={event => setEmail(event.target.value)}
            />

            <button type="submit" className="submit-button">
              {isLoading ? (
                <>
                  <FaSpinner className="fa-spin" />
                  &nbsp;Submitting...
                </>
              ) : (
                'Submit'
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ForgotPasswordPage;
