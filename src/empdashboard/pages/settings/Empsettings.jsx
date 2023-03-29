import Side from "../../components/sidebar/Side";
import Navbar from "../../components/navbar/Navbar";
import "./empsettings.scss";
import { Avatar } from '@mantine/core';
import { PasswordInput, Switch } from '@mantine/core';
import OtpInput from 'react-otp-input';
import { useState } from "react";

const Empsettings = () => {
  const [verificationMethod, setVerificationMethod] = useState('sms')
  const [modal, setModal] = useState(false)
  const [otp, setOtp] = useState('');
  const [twoStepVerified, setTwoStepVerified] = useState(false);

  const showModal = (e) => {
    e.preventDefault()
    setModal(true)
  }

  const handleVerify = () => {
    setTwoStepVerified(true)
  }

  const resetModals = () => {
    setTwoStepVerified(false)
    setModal(false)
  }

    return <>
      <div className="emphome">
      <Side />
      <div className="empsettingsContainer">
        <Navbar />

        <div className="empsettingsHeading">
            <div className="empsettingsImgWrap">
            <Avatar src={''} alt="Vitaly Rtishchev" color="blue" radius={100} size={150}>AA</Avatar>
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
                <p>Reset and update you rname, username, email and phone number</p>
              </div>

              <form action="">
                <div className="inputWrapper">
                  <label htmlFor="">Full Name</label>
                  <input type="text" placeholder="First name ----Middle name---- Last Name"/>
                </div>

                <div className="inputContainer">
                  <div className="inputWrapper">
                    <label htmlFor="">Preferred Name</label>
                    <input type="text" />
                  </div>
                  <div className="inputWrapper">
                    <label htmlFor="">Employee ID</label>
                    <input type="text" />
                  </div>
                </div>

                <div className="inputContainer">
                  <div className="inputWrapper">
                    <label htmlFor="">Job Title</label>
                    <input type="text" />
                  </div>
                  <div className="inputWrapper">
                    <label htmlFor="">Employment Status</label>
                    <select name="" id="">
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
                    <label htmlFor="">Email</label>
                    <input type="email" name="" id="" />
                  </div>
                  <div className="inputWrapper">
                    <label htmlFor="">Phone Number</label>
                    <input type="text" />
                  </div>
                </div>

                <div className="inputContainer">
                  <div className="inputWrapper">
                    <label htmlFor="">Work Number</label>
                    <input type="text" />
                  </div>
                  <div className="inputWrapper">
                    <label htmlFor="">Home Number</label>
                    <input type="text" />
                  </div>
                </div>

                <div className="inputWrapper">
                  <label htmlFor="">Address</label>
                  <input type="text" />
                </div>

                <div className="inputContainer">
                  <div className="inputWrapper">
                    <label htmlFor="">Country</label>
                    <select name="" id="">
                      <option value="">--Select--</option>
                    </select>
                  </div>
                  <div className="inputWrapper">
                    <label htmlFor="">State</label>
                    <select name="" id="">
                      <option value="">--Select--</option>
                    </select>
                  </div>
                </div>

                <div className="inputContainer">
                  <div className="inputWrapper">
                    <label htmlFor="">Gender</label>
                    <select name="" id="">
                      <option value="">--Select--</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                    </select>
                  </div>
                  <div className="inputWrapper">
                    <label htmlFor="">Marital Status</label>
                    <select name="" id="">
                      <option value="">--Select--</option>
                      <option value="Married">Married</option>
                      <option value="Single">Single</option>
                      <option value="Divorced">Divorced</option>
                    </select>
                  </div>
                </div>

                <div className="inputContainer">
                  <div className="inputWrapper">
                    <label htmlFor="">Date of Birth</label>
                    <input type="date" name="" id="" />
                  </div>
                  <div className="inputWrapper">
                    <label htmlFor="">Role</label>
                    <input type="text" name="" id="" disabled/>
                  </div>
                </div>
                
                <div className="empbuttonWrapper">
                  <button>Cancel</button>
                  <button>Save</button>
                </div>
              </form>
            </div>

            {/* profile photo upload */}
            <div className="empsettingsContent">
              <div className="empleftSettingsContent">
                <h2>Profile Photo Upload</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat ea molestias repudiandae necessitatibus asperiores dolores</p>
              </div>

              <form action="">
                <div className="inputWrapper">
                  <label htmlFor="">Profile Picture</label>
                  <input type="file" name="" id="" />
                </div>
                <div className="empbuttonWrapper">
                  <button>Cancel</button>
                  <button>Upload</button>
                </div>
              </form>
            </div>

            {/* Login and security Settings */}
            <div className="empsettingsContent">
              <div className="empleftSettingsContent">
                <h2>Login & security settings</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat ea molestias repudiandae necessitatibus asperiores dolores</p>
              </div>

              <div className="formWrapper">

                <form action="">
                  <h3>Change Password</h3>
                  <div className="inputWrapper">
                    <PasswordInput
                      placeholder="Password"
                      label="Type your current password"
                      className="pswinput"
                      size="md"
                      radius="md"
                    />
                  </div>
                  <div className="inputWrapper">
                    <PasswordInput
                      placeholder="Password"
                      label="Type your new password"
                      className="pswinput"
                      size="md"
                      radius="md"
                    />
                  </div>
                  <div className="inputWrapper">
                    <PasswordInput
                      placeholder="Password"
                      label="Confirm Password"
                      className="pswinput"
                      size="md"
                      radius="md"
                    />
                  </div>
                  <div className="empbuttonWrapper">
                    <button>Save Password</button>
                  </div>
                </form>

                <form action="">
                  <div className="verificationWrapper">
                    <h3>Two-step verification</h3>
                    <button onClick={(e) => showModal(e)}>Enable</button>
                  </div>
                </form>
              </div>
            </div>

            <div className="notificationsWrapper">
              <form action="">

                <div className="topnotificationSection">
                  <div className="leftNotificationWrap">
                    <h2>Email Notifications</h2>
                    <p>Get email notifications about what is going on when you are offline</p>
                  </div>
                  <div className="rightNotificationWrap">

                      <div className="rightNotificationContent">
                        <Switch
                          color="violet"
                          // checked={}
                          // onChange={}
                          size=""
                          onLabel="ON"
                          offLabel="OFF"
                        />
                        <div className="rightformcontent">
                          <h3>News and Updates</h3>
                          <p>Get emails to find out what is going on when you are offline</p>
                        </div>
                      </div>

                      <div className="rightNotificationContent">
                        <Switch
                          color="violet"
                          // checked={}
                          // onChange={}
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
                          // checked={}
                          // onChange={}
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

                <div className="bottomnotificationsection">
                    <div className="leftNotificationWrap">
                      <h2>Push Notifications</h2>
                      <p>Get in-app notifications about what is going on when you are online</p>
                    </div>
                    <div className="rightNotificationWrap">
                      <div className="rightNotificationContent">
                        <Switch
                          color="violet"
                          // checked={}
                          // onChange={}
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
                          // checked={}
                          // onChange={}
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
                  <button>Save</button>
                </div>
              </form>
            </div>

          </div> 
              
      <div className={modal ? "twoStepModalWrapper" : "hide"}>
        <div className={twoStepVerified ?  "hide" : "twoStepModal"}>
          <h2>Your two-step verification</h2>
          <p className="closeverifying" onClick={() => setModal(false)}>x</p>

          <div className="verificationType">
            <p>Choose verification method</p>
            <div className="inputWrapper" onClick={() => setVerificationMethod('sms')} >
              <input 
                type="radio" 
                checked={verificationMethod === 'sms' ? true : false}
              />
              <p>SMS</p>
            </div>
            <div className="inputWrapper" onClick={() => setVerificationMethod('email')} >
              <input 
                type="radio" 
                checked={verificationMethod === 'email' ? true : false}
              />
              <p>Email</p>
            </div>
          </div>

          <div className="otpCode">
            <p>Enter 6-digit code sent to your {verificationMethod === 'sms' ? 'SMS' : 'Email'}</p>
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
        <div className={twoStepVerified ? "modalCongrats" : "hide"}>
          <p className="closeverifying" onClick={() => resetModals()}>x</p>
          <img src={require('../../../assets/img/copysuccess.png')} alt="" />
          <h3>You have successfully
          set up a two-step
          Verification</h3>
        </div>
        </div>
      </div>
    </div>

    </>;
  };
  
  export default Empsettings;
  
