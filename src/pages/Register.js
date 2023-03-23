import image from '../images/imageholder.png';
import { BiChevronLeft } from 'react-icons/bi';
import axios from 'axios';
import { useState } from 'react';
import { BsCheck } from 'react-icons/bs';
import '../assets/register.css';
import { NavLink } from 'react-router-dom';
import SignIn from './SignIn';
import { toast } from 'react-toastify';
import Form from './Email';

const Register = () => {
  const [currentpage, setCurrentPage] = useState(1);
  const [popup, setPopup] = useState(false);
  const [otpScreen, setOtpScreen] = useState(false);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    companyName: '',
    businessType: '',
    address: '',
    companyPhone: '',
    country: '',
    state: '',
    numOfEmployees: '',
  });


  const handleInputChange = event => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async event => {
    event.preventDefault();
    console.log('Submitted');
    try {
      console.log('Submitted');
      const res = await axios.post(
        'https://pms.cyclic.app/api/v1/admin/registeration',
        formData
      );
      console.log(res.data);
      //   setPopup(true);
    } catch (error) {
      console.error(error);
      toast.error('Error');
      toast.error(error);
    }
  };

  console.log(otpScreen)
  return (
    <>
    
      <div className="wrapper">
        <div className="leftWrapper">
          <div className="stepperWrapper">
            <div className="stepperCardWrapper">
              <div
                className={`stepperCard ${
                  currentpage >= 1 ? 'active' : undefined
                }`}
              >
                <div className="number ">
                  <p>{currentpage <= 1 ? '1' : <BsCheck />}</p>
                  <div className="line"></div>
                </div>
                <p>Create an account</p>
              </div>

              <div
                className={`stepperCard ${
                  currentpage >= 2 ? 'active' : undefined
                }`}
              >
                <div className="number">
                  <p>{currentpage <= 2 ? '2' : <BsCheck />}</p>
                  <div className="line"></div>
                </div>
                <p>Company details</p>
              </div>

              <div
                className={`stepperCard ${
                  currentpage >= 3 ? 'active' : undefined
                }`}
              >
                <div className="number">
                  <p>{currentpage <= 3 ? '3' : <BsCheck />}</p>
                  <div className="line"></div>
                </div>
                <p>Terms of use</p>
              </div>
            </div>

            <form onSubmit={handleSubmit}>
              <div className={currentpage === 1 ? 'formWrapper' : 'hide'}>
                <div className="formHeading">
                  <h1>Create an account</h1>
                  <p>Welcome to view</p>
                </div>

                <div className="inputWrapper">
                  <label htmlFor="">First Name</label>
                  <input
                    type="text"
                    required
                    name="firstName"
                    id="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder="Please Enter Your Firstname"
                  />
                </div>
                <div className="inputWrapper">
                  <label htmlFor="">Last Name</label>
                  <input
                    type="text"
                    required
                    name="lastName"
                    id="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    placeholder="Please Enter Your Lastname"
                  />
                </div>
                <div className="inputWrapper">
                  <label htmlFor="">Work Email</label>
                  <input
                    type="text"
                    required
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Please Enter Your Email"
                  />
                </div>
                <div className="inputWrapper">
                  <label htmlFor="">Password</label>
                  <input
                    type="text"
                    required
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    id="password"
                    placeholder="Please Enter Your Password"
                  />
                </div>
              </div>

              <div className={currentpage === 2 ? 'formWrapper' : 'hide'}>
                <div className="formHeading">
                  <h1>Company Details</h1>
                  <p>Welcome to view</p>
                </div>

                <div className="inputHolder">
                  <div className="inputWrapper">
                    <label htmlFor="">Company name</label>
                    <input
                      type="text"
                      required
                      name="companyName"
                      id="companyName"
                      value={formData.companyName}
                      onChange={handleInputChange}
                      placeholder="Please Enter Youur Company Name"
                    />
                  </div>
                  <div className="inputWrapper">
                    <label htmlFor="">Business Type</label>
                    <input
                      type="text"
                      required
                      name="businessType"
                      id="businessType"
                      value={formData.businessType}
                      onChange={handleInputChange}
                      placeholder="Sole Proprietorship or Partnership"
                    />
                    {/* <select name="" id="">
                      <option value="">--Select option--</option>
                    </select> */}
                  </div>
                </div>

                <div className="inputHolder">
                  <div className="inputWrapper">
                    <label htmlFor="">Address</label>
                    <input
                      type="text"
                      required
                      name="address"
                      id="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      placeholder="Enter your Company Address"
                    />
                  </div>
                  <div className="inputWrapper">
                    <label htmlFor="">Phone Number</label>
                    <input
                      type="text"
                      required
                      name="companyPhone"
                      id="companyPhone"
                      value={formData.companyPhone}
                      onChange={handleInputChange}
                      placeholder="Enter your Company Phone Number"
                    />
                  </div>
                </div>

                <div className="inputHolder">
                  <div className="inputWrapper">
                    <label htmlFor="">Country</label>
                    <input
                      type="text"
                      required
                      name="country"
                      id="country"
                      value={formData.country}
                      onChange={handleInputChange}
                      placeholder=" Country"
                    />
                    {/* <select name="" id="">
                      <option value="">--Select option--</option>
                    </select> */}
                  </div>
                  <div className="inputWrapper">
                    <label htmlFor="">State</label>
                    <input
                      type="text"
                      required
                      name="state"
                      id="state"
                      value={formData.state}
                      onChange={handleInputChange}
                      placeholder=" State"
                    />
                  </div>
                </div>

                <div className="inputHolder">
                  <div className="inputWrapper">
                    <label htmlFor="">Number of employees</label>

                    <select
                      name="numOfEmployees"
                      value={formData.numOfEmployees}
                      onChange={handleInputChange}
                      id="numOfEmployees"
                    >
                      <option value="">--Select options--</option>
                      <option value="0-10">0-10</option>
                      <option value="10-50">10-50</option>
                      <option value="50-100">50-100</option>
                      <option value="100 and above">100 and above</option>
                    </select>
                  </div>
                  <div className="inputWrapper">
                    <label htmlFor="">Reg. no</label>
                    <input
                      type="text"
                      required
                      name="companyRegNo"
                      id="companyRegNo"
                      value={formData.companyRegNo}
                      onChange={handleInputChange}
                      placeholder="Enter your Registration Number"
                    />
                  </div>
                </div>
              </div>

              <div className={currentpage === 3 ? 'formWrapper' : 'hide'}>
                <div className="formHeading">
                  <h1>Terms of use</h1>
                  <p>Welcome to view</p>
                </div>

                <p className="terms">
                  Please read these <a href="/">Terms</a> carefully before using
                  the Product. By using the Product, you agree to be bound by
                  these <a href="/">Terms</a> and our{' '}
                  <a href="/">Privacy Policy</a>, which is incorporated into
                  these Terms by reference. If you do not agree to these Terms,
                  you may not use the Product.
                </p>

                <form>
                  <div className="checkboxWrapper">
                    <input type="checkbox" name="" id="" />
                    <label htmlFor="">I agree to these terms</label>
                  </div>
                </form>
              </div>

              <div className="buttonWrapper">
                <button
                  onClick={() =>
                    setCurrentPage(currentpage > 1 ? currentpage - 1 : 1)
                  }
                >
                  Back
                </button>
                {currentpage < 3 ? (
                  <button
                    onClick={() =>
                      setCurrentPage(currentpage < 3 ? currentpage + 1 : 3)
                    }
                  >
                    Next
                  </button>
                ) : (
                  <button type="submit" onClick={() => setOtpScreen(true)}>Submit</button>
                )}
              </div>

              <p className="signin" onClick={() => setPopup(true)}>
                I would rather <NavLink>Sign In</NavLink>
              </p>

              <NavLink to="/" className="backhome">
                <BiChevronLeft /> Back home
              </NavLink>
            </form>
          </div>
        </div>

        <div className="rightWrapper">
          <img src={image} alt="" />
        </div>

        {
          otpScreen ? <Form/> : undefined
        }
        <div
          className={popup || otpScreen ? 'signinDiv' : 'hide'}
          onClick={() => {setPopup(false) 
          setOtpScreen(false)}}
        ></div>
        {popup ? <SignIn className="signinpopup" /> : undefined}
      </div>
    </>
  );
};

export default Register;
