import React, { useState } from 'react';
import axios from 'axios';
import './ForgotPassword.css';
import { FaSpinner } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { useNavigate, useParams } from 'react-router-dom';

// import './ResetPassword.css';

function ResetPasswordPage() {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { resetToken } = useParams();
  const navigate = useNavigate();

  const data = {
    password,
    confirmPassword,
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (password === confirmPassword) {
      setIsLoading(true);
      axios
        .put(
          `https://pms-jq9o.onrender.com/api/v1/admin/resetpassword/${resetToken}`,
          {
            ...data,
          }
        )
        .then(response => {
          setIsLoading(false);
          if (response.data.status === 'success') {
            toast.success(response.data.message);
            navigate('/signin');
          }
        })
        .catch(error => {
          setIsLoading(false);
          toast.error(error.response.data.message);
          console.error(error);
        });
    } else {
      toast.error('Passwords do not match');
      console.error('Passwords do not match');
    }
  };

  return (
    <div className="modal-wrapper">
      {' '}
      <div className="modal-backdrop">
        {' '}
        <div className="modal">
          <p>Please create a new password </p>{' '}
          <form onSubmit={handleSubmit}>
            <label htmlFor="password">New Password:</label>{' '}
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your new password"
              value={password}
              onChange={event => setPassword(event.target.value)}
            />
            <label htmlFor="confirmPassword">Confirm Password:</label>{' '}
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Confirm your new password"
              value={confirmPassword}
              onChange={event => setConfirmPassword(event.target.value)}
            />{' '}
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
          </form>{' '}
        </div>{' '}
      </div>{' '}
    </div>
  );
}

export default ResetPasswordPage;
