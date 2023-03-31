import Side from '../../components/sidebar/Side';
import Navbar from '../../components/navbar/Navbar';
import './empsettings.scss';
import { Avatar } from '@mantine/core';
import { PasswordInput, Switch } from '@mantine/core';
import OtpInput from 'react-otp-input';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import Cookies from 'js-cookie';
import { FaSpinner } from 'react-icons/fa';
import { RxAvatar } from 'react-icons/rx';

const Empsettings = () => {
  const [verificationMethod, setVerificationMethod] = useState('sms');
  const [modal, setModal] = useState(false);
  const [otp, setOtp] = useState('');
  const [twoStepVerified, setTwoStepVerified] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [initials, setInitials] = useState('');
  const [states, setStates] = useState([]);
  const [countries, setCountries] = useState([]);
  const [profile, setProfile] = useState(null);
  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });
  const [inputFormData, setInputFormData] = useState({
    fullName: '',
    firstName: '',
    middleName: '',
    lastName: '',
    preferredName: '',
    employeeID: '',
    jobTitle: '',
    employmentStatus: '',
    phoneNo: '',
    workNo: '',
    homeNo: '',
    address: '',
    state: '',
    country: '',
    gender: '',
    maritalStatus: '',
    DOB: '',
  });

  const showModal = e => {
    e.preventDefault();
    setModal(true);
  };

  const handleVerify = () => {
    setTwoStepVerified(true);
  };

  const resetModals = () => {
    setTwoStepVerified(false);
    setModal(false);
  };

  /*********************** EMPLOYEE PUSH NOTIFICATIONS PREFERENCES ******************************/

  const handleSubmit = async event => {
    event.preventDefault();
    const formData = new FormData(event.target);

    try {
      setIsLoading(true);
      const Token = Cookies.get('EmpToken');

      // Send email notification preferences
      const res1 = await axios.patch(
        'https://pms-jq9o.onrender.com/api/v1/employee/notifications',
        {
          emailNewsUpdateNotification: formData.get('newsAndUpdates'),
          emailCommentNotification: formData.get('comments'),
          emailReminderNotification: formData.get('reminders'),
        },
        {
          headers: {
            Authorization: `Bearer ${Token}`,
          },
        }
      );

      // Send push notification preferences
      const res2 = await axios.patch(
        'https://pms-jq9o.onrender.com/api/v1/employee/notifications',
        {
          pushCommentNotification: formData.get('pushComments'),
          pushGoalDeadlineNotification: formData.get('pushReminders'),
        },
        {
          headers: {
            Authorization: `Bearer ${Token}`,
          },
        }
      );

      setIsLoading(false);

      console.log(res1.data.data, res2.data.data);

      toast.success('Updated Successfully');
      // Handle success
      console.log('Form submitted successfully');
    } catch (error) {
      setIsLoading(false);
      // Handle error
      console.error('Error submitting form:', error);
    }
  };

  /*********************** HANDLE EMPLOYEE FORM INPUTS ******************************/
  const handleFormChange = event => {
    const { name, value } = event.target;
    setInputFormData({ ...inputFormData, [name]: value });
  };

  /*********************** SUBMIT EMPLOYEE PERSONAL INFORNATION ******************************/
  const submitInputs = async event => {
    event.preventDefault();
    const token = Cookies.get('EmpToken');
    console.log(Cookies.get('Token'));
    toast.success({ token });
    try {
      setIsLoading(true);
      const Token = Cookies.get('Token');
      const res = await axios.patch(
        'https://pms-jq9o.onrender.com/api/v1/employee/editdetails',
        inputFormData,
        {
          headers: {
            Authorization: `Bearer ${Token}`,
          },
        }
      );

      // setInputFormData({...inputFormData, firstName: res.data.data.updateInfo.firstName, lastName: res.data.data.updateInfo.lastName})
      // setInitials(res.data.data.updateInfo.firstName[0] + res.data.data.updateInfo.lastName[0])
      setIsLoading(false);

      console.log(res.data.data);

      toast.success('Updated Successfully');
    } catch (error) {
      console.log(error.message);
      setIsLoading(false);
      toast.error(error.response.data.message);
    }
  };

  /*********************** FETCH LIST OF COUNTRIES ******************************/
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get(
          'https://countriesnow.space/api/v0.1/countries'
        );

        setCountries(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };

    /*********************** FETCH CORRESPONDING STATES ******************************/
    const fetchStates = async () => {
      try {
        setIsLoading(true);

        const response = await axios.post(
          'https://countriesnow.space/api/v0.1/countries/states',
          {
            country: inputFormData.country,
          }
        );
        setIsLoading(false);
        setStates(response.data.data.states);
      } catch (error) {
        console.log(error);
      }
    };

    fetchCountries();
    if (inputFormData.country !== '') {
      fetchStates();
    }
  }, [inputFormData.country]);

  /********************** HANDLE PASSWORD CHANGE **************************/
  const handlePasswordChange = event => {
    const { name, value } = event.target;
    setPasswordData({ ...passwordData, [name]: value });
  };

  /****************************** SUBMIT PASSWORD *************************/

  const submitPasswordChange = async event => {
    event.preventDefault();

    try {
      setIsLoading(true);
      const Token = Cookies.get('EmpToken');
      console.log(Token);
      const res = await axios.patch(
        'https://pms-jq9o.onrender.com/api/v1/admin/changePassword',
        passwordData,
        {
          headers: {
            Authorization: `Bearer ${Token}`,
          },
        }
      );
      setIsLoading(false);

      toast.success('Password Successfully Changed');
    } catch (error) {
      setIsLoading(false);
      toast.error(error.response.data.message);
    }
  };

  /******************************** FILE UPLOAD *****************************/
  const handleImageUpload = event => {
    const file = event.target.files[0];
    setProfile(file);
  };

  /******************************** SUBMIT FILE UPLOAD ********************************/
  const handleSubmitProfile = async event => {
    event.preventDefault();

    setIsLoading(true);
    const Token = Cookies.get('EmpToken');
    await axios
      .post('https://pms-jq9o.onrender.com/api/v1/employee/profile', profile, {
        headers: {
          Authorization: `Bearer ${Token}`,
        },
      })
      .then(response => {
        setIsLoading(false);
        toast.success(response.data.message);
        // Handle the response from the server
      })
      .catch(error => {
        setIsLoading(false);
        toast.error(error.response.data.message);
        console.log(error);
        // Handle any errors that occurred during the upload
      });
  };
  /******************************** END ****************************************/

  return (
    <>
      <div className="emphome">
        <Side />
        <div className="empsettingsContainer">
          <Navbar />

          <div className="empsettingsHeading">
            <div className="empsettingsImgWrap">
              <Avatar
                src={''}
                alt="Vitaly Rtishchev"
                color="blue"
                radius={100}
                size={150}
              >
                AA
              </Avatar>
            </div>
            <div className="empsettingsNameWrap">
              <h1>Adebisi Akin</h1>
              <p>Product Manager (PM)</p>
            </div>
          </div>

          <div className="empsettingBottom">
            {/* Company Details Settings */}
            <div className="empsettingsContent">
              <div className="empleftSettingsContent">
                <h2>Profile Details</h2>
                <p>
                  Reset and update you rname, username, email and phone number
                </p>
              </div>

              <form onSubmit={submitInputs}>
                <div className="inputWrapper">
                  <label htmlFor="fullName">FullName</label>
                  <input
                    type="text"
                    name="fullName"
                    id="fullName"
                    placeholder="First name ----Middle name---- Last Name"
                    value={inputFormData.fullName}
                    onChange={e => {
                      const fullName = e.target.value;
                      const [firstName, middleName, lastName] =
                        fullName.split(' ');
                      setInputFormData({
                        ...inputFormData,
                        firstName,
                        middleName,
                        lastName,
                        fullName, // Add this line to update the fullName key in the inputFormData state object
                      });
                    }}
                  />
                </div>

                <div className="inputContainer">
                  <div className="inputWrapper">
                    <label htmlFor="preferredName">Preferred Name</label>
                    <input
                      type="text"
                      name="preferredName"
                      id="preferredName"
                      value={inputFormData.companyName}
                      onChange={handleFormChange}
                      placeholder="Preferred Name"
                    />
                  </div>
                  <div className="inputWrapper">
                    <label htmlFor="employeeID">Employee ID</label>
                    <input
                      type="text"
                      name="employeeID"
                      id="employeeID"
                      value={inputFormData.employeeID}
                      onChange={handleFormChange}
                      placeholder="Employee ID"
                    />
                  </div>
                </div>

                <div className="inputContainer">
                  <div className="inputWrapper">
                    <label htmlFor="jobTitle">Job Title</label>
                    <input
                      type="text"
                      name="jobTitle"
                      id="jobTitle"
                      value={inputFormData.companyName}
                      onChange={handleFormChange}
                      placeholder="jobTitle"
                    />
                  </div>
                  <div className="inputWrapper">
                    <label htmlFor="employmentStatus">Employment Status</label>
                    <select
                      name="employmentStatus"
                      id="employmentStatus"
                      onChange={handleFormChange}
                      value={inputFormData.employmentStatus}
                    >
                      <option value="">--Select--</option>
                      <option value="Full Time">Full Time</option>
                      <option value="Part Time">Part Time</option>
                      <option value="Contract">Contract</option>
                      <option value="Intern">Intern</option>
                    </select>
                  </div>
                </div>

                <div className="inputContainer">
                  <div className="inputWrapper">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={inputFormData.email}
                      onChange={handleFormChange}
                      placeholder="email"
                    />
                  </div>
                  <div className="inputWrapper">
                    <label htmlFor="phoneNo">Phone Number</label>
                    <input
                      type="number"
                      name="phoneNo"
                      id="phoneNo"
                      value={inputFormData.phoneNo}
                      onChange={handleFormChange}
                      placeholder="phone Number"
                    />
                  </div>
                </div>

                <div className="inputContainer">
                  <div className="inputWrapper">
                    <label htmlFor="workNo">Work Number</label>
                    <input
                      type="number"
                      name="workNo"
                      id="workNo"
                      value={inputFormData.workNo}
                      onChange={handleFormChange}
                      placeholder="Work Number"
                    />
                  </div>
                  <div className="inputWrapper">
                    <label htmlFor="">Home Number</label>
                    <input
                      type="text"
                      name="homeNo"
                      id="homeNo"
                      value={inputFormData.homeNo}
                      onChange={handleFormChange}
                      placeholder="Home Number"
                    />
                  </div>
                </div>

                <div className="inputWrapper">
                  <label htmlFor="">Address</label>
                  <input
                    type="text"
                    name="address"
                    id="address"
                    value={inputFormData.address}
                    onChange={handleFormChange}
                    placeholder="Enter your Company Address"
                  />
                </div>

                <div className="inputContainer">
                  <div className="inputWrapper">
                    <label htmlFor="">Country</label>
                    <select
                      name="country"
                      id="country"
                      value={inputFormData.country}
                      onChange={handleFormChange}
                    >
                      <option value="">-- Select a country --</option>
                      {countries.map(country => (
                        <option
                          key={country.country_iso2}
                          value={country.country_iso2}
                        >
                          {country.country}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="inputWrapper">
                    <label htmlFor="">State</label>
                    <select
                      name="state"
                      id="state"
                      value={inputFormData.state}
                      onChange={handleFormChange}
                    >
                      <option value="">-- Select a state --</option>
                      {isLoading && (
                        <option disabled>
                          Fetching states, please wait...
                        </option>
                      )}
                      {!isLoading &&
                        states.map(state => (
                          <option key={state.id} value={state.name}>
                            {state.name}
                          </option>
                        ))}
                    </select>
                  </div>
                </div>

                <div className="inputContainer">
                  <div className="inputWrapper">
                    <label htmlFor="gender">Gender</label>
                    <select name="gender" id="" onChange={handleFormChange}>
                      <option value="">--Select--</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                    </select>
                  </div>
                  <div className="inputWrapper">
                    <label htmlFor="maritalStatus">Marital Status</label>
                    <select
                      name="maritalStatus"
                      id="maritalStatus"
                      onChange={handleFormChange}
                    >
                      <option value="">--Select--</option>
                      <option value="Married">Married</option>
                      <option value="Single">Single</option>
                      <option value="Divorced">Divorced</option>
                    </select>
                  </div>
                </div>

                <div className="inputContainer">
                  <div className="inputWrapper">
                    <label htmlFor="DOB">Date of Birth</label>
                    <input
                      type="date"
                      name="DOB"
                      id="DOB"
                      onChange={handleFormChange}
                    />
                  </div>
                  <div className="inputWrapper">
                    <label htmlFor="">Role</label>
                    <input
                      type="text"
                      name="role"
                      id="role"
                      value={inputFormData.role}
                      onChange={handleFormChange}
                    />
                  </div>
                </div>

                <div className="empbuttonWrapper">
                  <button>Cancel</button>
                  <button>
                    {isLoading ? (
                      <>
                        <FaSpinner className="fa-spin" />
                        &nbsp;Saving...
                      </>
                    ) : (
                      'Save'
                    )}
                  </button>
                </div>
              </form>
            </div>

            {/* profile photo upload */}
            <div className="empsettingsContent">
              <div className="empleftSettingsContent">
                <h2>Profile Photo Upload</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quaerat ea molestias repudiandae necessitatibus asperiores
                  dolores
                </p>
              </div>

              <form onSubmit={handleSubmitProfile}>
                <div className="inputWrapper">
                  <label htmlFor="">Profile Picture</label>
                  <span style={{ display: 'flex', placeItems: 'center' }}>
                    {profile ? (
                      <img
                        style={{
                          borderRadius: '50%',
                          width: '50px',
                          height: '50px',
                        }}
                        src={URL.createObjectURL(profile)}
                        alt="avatar"
                      />
                    ) : (
                      <RxAvatar
                        style={{
                          borderRadius: '50%',
                          width: '50px',
                          height: '50px',
                        }}
                      />
                    )}

                    <label
                      style={{ marginLeft: '50px' }}
                      htmlFor="image-upload"
                    >
                      <span
                        style={{
                          padding: '12px 40px',
                          backgroundColor: 'rgb(62, 69, 235)',
                          color: 'white',
                          borderRadius: '10px',
                        }}
                      >
                        Upload a file
                      </span>
                      <input
                        type="file"
                        name="profile"
                        id="image-upload"
                        className="sr-only"
                        onChange={handleImageUpload}
                      />
                    </label>
                  </span>
                </div>
                <div className="buttonWrapper">
                  <button>Cancel</button>
                  <button type="submit">
                    {isLoading ? (
                      <>
                        <FaSpinner className="fa-spin" />
                        &nbsp;Submitting...
                      </>
                    ) : (
                      'Submit'
                    )}
                  </button>
                </div>
              </form>
            </div>

            {/* Login and security Settings */}
            <div className="empsettingsContent">
              <div className="empleftSettingsContent">
                <h2>Login & security settings</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quaerat ea molestias repudiandae necessitatibus asperiores
                  dolores
                </p>
              </div>

              <div className="formWrapper">
                <form onSubmit={submitPasswordChange}>
                  <h3>Change Password</h3>
                  <div className="inputWrapper">
                    <PasswordInput
                      placeholder="Password"
                      label="Type your current password"
                      className="pswinput"
                      size="md"
                      radius="md"
                      name="currentPassword"
                      onChange={handlePasswordChange}
                    />
                  </div>
                  <div className="inputWrapper">
                    <PasswordInput
                      placeholder="Password"
                      label="Type your new password"
                      className="pswinput"
                      size="md"
                      radius="md"
                      name="newPassword"
                      onChange={handlePasswordChange}
                    />
                  </div>
                  <div className="inputWrapper">
                    <PasswordInput
                      placeholder="Password"
                      label="Confirm Password"
                      className="pswinput"
                      size="md"
                      radius="md"
                      name="confirmPassword"
                      onChange={handlePasswordChange}
                    />
                  </div>
                  <div className="empbuttonWrapper">
                    <button>
                      {isLoading ? (
                        <>
                          <FaSpinner className="fa-spin" />
                          &nbsp;Saving...
                        </>
                      ) : (
                        'Save Password'
                      )}
                    </button>
                  </div>
                </form>

                <form action="">
                  <div className="verificationWrapper">
                    <h3>Two-step verification</h3>
                    <button onClick={e => showModal(e)}>Enable</button>
                  </div>
                </form>
              </div>
            </div>

            <div className="notificationsWrapper">
              <form onSubmit={handleSubmit}>
                {/* Email Notifications */}
                <div className="topnotificationSection">
                  <div className="leftNotificationWrap">
                    <h2>Email Notifications</h2>
                    <p>
                      Get email notifications about what is going on when you
                      are offline
                    </p>
                  </div>
                  <div className="rightNotificationWrap">
                    <div className="rightNotificationContent">
                      <Switch
                        color="violet"
                        name="newsAndUpdates"
                        defaultChecked={false}
                        onLabel="ON"
                        offLabel="OFF"
                      />
                      <div className="rightformcontent">
                        <h3>News and Updates</h3>
                        <p>
                          Get emails to find out what is going on when you are
                          offline
                        </p>
                      </div>
                    </div>

                    <div className="rightNotificationContent">
                      <Switch
                        color="violet"
                        name="comments"
                        defaultChecked={false}
                        onLabel="ON"
                        offLabel="OFF"
                      />
                      <div className="rightformcontent">
                        <h3>Comments</h3>
                        <p>Feedback on your wall by supervisors</p>
                      </div>
                    </div>

                    <div className="rightNotificationContent">
                      <Switch
                        color="violet"
                        name="reminders"
                        defaultChecked={false}
                        onLabel="ON"
                        offLabel="OFF"
                      />
                      <div className="rightformcontent">
                        <h3>Reminders</h3>
                        <p>Reminders on your goals deadline</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Push Notifications */}
                <div className="bottomnotificationsection">
                  <div className="leftNotificationWrap">
                    <h2>Push Notifications</h2>
                    <p>
                      Get in-app notifications about what is going on when you
                      are online
                    </p>
                  </div>
                  <div className="rightNotificationWrap">
                    <div className="rightNotificationContent">
                      <Switch
                        color="violet"
                        name="pushComments"
                        defaultChecked={false}
                        onLabel="ON"
                        offLabel="OFF"
                      />
                      <div className="rightformcontent">
                        <h3>Comments</h3>
                        <p>Feedback on your wall by supervisors</p>
                      </div>
                    </div>

                    <div className="rightNotificationContent">
                      <Switch
                        color="violet"
                        name="pushReminders"
                        defaultChecked={false}
                        onLabel="ON"
                        offLabel="OFF"
                      />
                      <div className="rightformcontent">
                        <h3>Reminders</h3>
                        <p>Reminders on your goals deadline</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="empbuttonWrapper">
                  <button>Cancel</button>
                  <button>
                    {isLoading ? (
                      <>
                        <FaSpinner className="fa-spin" />
                        &nbsp;Saving...
                      </>
                    ) : (
                      'Save'
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className={modal ? 'twoStepModalWrapper' : 'hide'}>
            <div className={twoStepVerified ? 'hide' : 'twoStepModal'}>
              <h2>Your two-step verification</h2>
              <p className="closeverifying" onClick={() => setModal(false)}>
                x
              </p>

              <div className="verificationType">
                <p>Choose verification method</p>
                <div
                  className="inputWrapper"
                  onClick={() => setVerificationMethod('sms')}
                >
                  <input
                    type="radio"
                    checked={verificationMethod === 'sms' ? true : false}
                  />
                  <p>SMS</p>
                </div>
                <div
                  className="inputWrapper"
                  onClick={() => setVerificationMethod('email')}
                >
                  <input
                    type="radio"
                    checked={verificationMethod === 'email' ? true : false}
                  />
                  <p>Email</p>
                </div>
              </div>

              <div className="otpCode">
                <p>
                  Enter 6-digit code sent to your{' '}
                  {verificationMethod === 'sms' ? 'SMS' : 'Email'}
                </p>
                <OtpInput
                  value={otp}
                  numInputs={6}
                  renderSeparator={<span>&nbsp; &nbsp;</span>}
                  renderInput={props => <input {...props} />}
                  onChange={setOtp}
                />
              </div>

              <button onClick={handleVerify}>Verify</button>
            </div>
            <div className={twoStepVerified ? 'modalCongrats' : 'hide'}>
              <p className="closeverifying" onClick={() => resetModals()}>
                x
              </p>
              <img
                src={require('../../../assets/img/copysuccess.png')}
                alt=""
              />
              <h3>You have successfully set up a two-step Verification</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Empsettings;
