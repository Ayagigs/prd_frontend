// import image from '../images/imageholder.png';
// import { BiChevronLeft } from 'react-icons/bi';
// import axios from 'axios';
// import { useEffect, useState } from 'react';
// import { BsCheck } from 'react-icons/bs';
// import '../assets/register.css';
// import { NavLink } from 'react-router-dom';
// import SignIn from './SignIn';
// import { toast } from 'react-toastify';

// const Register = () => {
//   const [currentpage, setCurrentPage] = useState(1);
//   const [popup, setPopup] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);
//   const [states, setStates] = useState('');
//   const [countries, setCountries] = useState('');
//   const [selectedCountry, setSelectedCountry] = useState('');
//   const [selectedState, setSelectedState] = useState('');

//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     password: '',
//     confirmPassword: '',
//     companyName: '',
//     businessType: '',
//     address: '',
//     companyPhone: '',
//     country: '',
//     state: '',
//     numOfEmployees: '',
//   });

//   useEffect(() => {
//     fetch('https://api.example.com/countries')
//       .then(response => response.json())
//       .then(data => setCountries(data));
//   }, []);

//   useEffect(() => {
//     if (selectedCountry) {
//       fetch(`https://api.example.com/states?country=${selectedCountry}`)
//         .then(response => response.json())
//         .then(data => setStates(data));
//     }
//   }, [selectedCountry]);

//   const handleInputChange = event => {
//     const { name, value } = event.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async event => {
//     try {
//       setIsLoading(true);

//       const res = await axios.post(
//         'https://pms-jq9o.onrender.com/api/v1/admin/registeration',
//         formData
//       );
//       console.log(res.data);
//       setIsLoading(false);
//       toast.success('Please Check your email for OTP');
//       //   setPopup(true);
//     } catch (error) {
//       setIsLoading(false);
//       toast.error(error.response.data.message);
//     }
//   };

//   return (
//     <>
//       <div className="wrapper">
//         <div className="leftWrapper">
//           <div className="stepperWrapper">
//             <div className="stepperCardWrapper">
//               <div
//                 className={`stepperCard ${
//                   currentpage >= 1 ? 'active' : undefined
//                 }`}
//               >
//                 <div className="number ">
//                   <p>{currentpage <= 1 ? '1' : <BsCheck />}</p>
//                   <div className="line"></div>
//                 </div>
//                 <p>Create an account</p>
//               </div>

//               <div
//                 className={`stepperCard ${
//                   currentpage >= 2 ? 'active' : undefined
//                 }`}
//               >
//                 <div className="number">
//                   <p>{currentpage <= 2 ? '2' : <BsCheck />}</p>
//                   <div className="line"></div>
//                 </div>
//                 <p>Company details</p>
//               </div>

//               <div
//                 className={`stepperCard ${
//                   currentpage >= 3 ? 'active' : undefined
//                 }`}
//               >
//                 <div className="number">
//                   <p>{currentpage <= 3 ? '3' : <BsCheck />}</p>
//                   <div className="line"></div>
//                 </div>
//                 <p>Terms of use</p>
//               </div>
//             </div>

//             <form onSubmit={handleSubmit}>
//               <div className={currentpage === 1 ? 'formWrapper' : 'hide'}>
//                 <div className="formHeading">
//                   <h1>Create an account</h1>
//                   <p>Welcome to view</p>
//                 </div>

//                 <div className="inputWrapper">
//                   <label htmlFor="">First Name</label>
//                   <input
//                     type="text"
//                     required
//                     name="firstName"
//                     id="firstName"
//                     value={formData.firstName}
//                     onChange={handleInputChange}
//                     placeholder="Please Enter Your Firstname"
//                   />
//                 </div>
//                 <div className="inputWrapper">
//                   <label htmlFor="">Last Name</label>
//                   <input
//                     type="text"
//                     required
//                     name="lastName"
//                     id="lastName"
//                     value={formData.lastName}
//                     onChange={handleInputChange}
//                     placeholder="Please Enter Your Lastname"
//                   />
//                 </div>
//                 <div className="inputWrapper">
//                   <label htmlFor="">Work Email</label>
//                   <input
//                     type="text"
//                     required
//                     name="email"
//                     id="email"
//                     value={formData.email}
//                     onChange={handleInputChange}
//                     placeholder="Please Enter Your Email"
//                   />
//                 </div>
//                 <div className="inputWrapper">
//                   <label htmlFor="">Password</label>
//                   <input
//                     type="text"
//                     required
//                     name="password"
//                     value={formData.password}
//                     onChange={handleInputChange}
//                     id="password"
//                     placeholder="Please Enter Your Password"
//                   />
//                 </div>
//                 <div className="inputWrapper">
//                   <label htmlFor="">Password</label>
//                   <input
//                     type="text"
//                     required
//                     name="confirmPassword"
//                     value={formData.confirmPassword}
//                     onChange={handleInputChange}
//                     id="confirmPassword"
//                     placeholder="Please re-type your password"
//                   />
//                 </div>
//               </div>

//               <div className={currentpage === 2 ? 'formWrapper' : 'hide'}>
//                 <div className="formHeading">
//                   <h1>Company Details</h1>
//                   <p>Welcome to view</p>
//                 </div>

//                 <div className="inputHolder">
//                   <div className="inputWrapper">
//                     <label htmlFor="">Company name</label>
//                     <input
//                       type="text"
//                       required
//                       name="companyName"
//                       id="companyName"
//                       value={formData.companyName}
//                       onChange={handleInputChange}
//                       placeholder="Please Enter Youur Company Name"
//                     />
//                   </div>
//                   <div className="inputWrapper">
//                     <label htmlFor="">Business Type</label>
//                     <input
//                       type="text"
//                       required
//                       name="businessType"
//                       id="businessType"
//                       value={formData.businessType}
//                       onChange={handleInputChange}
//                       placeholder="Sole Proprietorship or Partnership"
//                     />
//                     {/* <select name="" id="">
//                       <option value="">--Select option--</option>
//                     </select> */}
//                   </div>
//                 </div>

//                 <div className="inputHolder">
//                   <div className="inputWrapper">
//                     <label htmlFor="">Address</label>
//                     <input
//                       type="text"
//                       required
//                       name="address"
//                       id="address"
//                       value={formData.address}
//                       onChange={handleInputChange}
//                       placeholder="Enter your Company Address"
//                     />
//                   </div>
//                   <div className="inputWrapper">
//                     <label htmlFor="">Phone Number</label>
//                     <input
//                       type="text"
//                       required
//                       name="companyPhone"
//                       id="companyPhone"
//                       value={formData.companyPhone}
//                       onChange={handleInputChange}
//                       placeholder="Enter your Company Phone Number"
//                     />
//                   </div>
//                 </div>

//                 <div className="inputHolder">
//                   <div className="inputWrapper">
//                     <label htmlFor="">Country</label>
//                     <input
//                       type="text"
//                       required
//                       name="country"
//                       id="country"
//                       value={formData.country}
//                       onChange={handleInputChange}
//                       placeholder=" Country"
//                     />
//                     {/* <select name="" id="">
//                       <option value="">--Select Country--</option>
//                       {countries.map(country => (
//                         <option value={country.code}>--Select Country--</option>
//                       ))}
//                     </select> */}
//                   </div>
//                   <div className="inputWrapper">
//                     <label htmlFor="">State</label>
//                     <input
//                       type="text"
//                       required
//                       name="state"
//                       id="state"
//                       value={formData.state}
//                       onChange={handleInputChange}
//                       placeholder=" State"
//                     />
//                   </div>
//                 </div>

//                 <div className="inputHolder">
//                   <div className="inputWrapper">
//                     <label htmlFor="">Number of employees</label>

//                     <select
//                       name="numOfEmployees"
//                       value={formData.numOfEmployees}
//                       onChange={handleInputChange}
//                       id="numOfEmployees"
//                     >
//                       <option value="">--Select options--</option>
//                       <option value="0-10">0-10</option>
//                       <option value="10-50">10-50</option>
//                       <option value="50-100">50-100</option>
//                       <option value="100 and above">100 and above</option>
//                     </select>
//                   </div>
//                   <div className="inputWrapper">
//                     <label htmlFor="">Reg. no</label>
//                     <input
//                       type="text"
//                       required
//                       name="companyRegNo"
//                       id="companyRegNo"
//                       value={formData.companyRegNo}
//                       onChange={handleInputChange}
//                       placeholder="Enter your Registration Number"
//                     />
//                   </div>
//                 </div>
//               </div>

//               <div className={currentpage === 3 ? 'formWrapper' : 'hide'}>
//                 <div className="formHeading">
//                   <h1>Terms of use</h1>
//                   <p>Welcome to view</p>
//                 </div>

//                 <p className="terms">
//                   Please read these <a href="/">Terms</a> carefully before using
//                   the Product. By using the Product, you agree to be bound by
//                   these <a href="/">Terms</a> and our{' '}
//                   <a href="/">Privacy Policy</a>, which is incorporated into
//                   these Terms by reference. If you do not agree to these Terms,
//                   you may not use the Product.
//                 </p>

//                 <form>
//                   <div className="checkboxWrapper">
//                     <input type="checkbox" name="" id="" />
//                     <label htmlFor="">I agree to these terms</label>
//                   </div>
//                 </form>
//               </div>

//               <div className="buttonWrapper">
//                 <button
//                   type="button"
//                   // disabled={isSubmitting}
//                   onClick={() =>
//                     setCurrentPage(currentpage > 1 ? currentpage - 1 : 1)
//                   }
//                 >
//                   Back
//                 </button>
//                 {currentpage < 3 ? (
//                   <button
//                     type="button"
//                     // disabled={isSubmitting}
//                     onClick={() =>
//                       setCurrentPage(currentpage < 3 ? currentpage + 1 : 3)
//                     }
//                     // disabled={Array.from(
//                     //   document.querySelectorAll('input[required]')
//                     // ).some(el => !el.value)}
//                   >
//                     Next
//                   </button>
//                 ) : (
//                   <button type="button" onClick={() => handleSubmit()}>
//                     {isLoading ? 'Submitting...' : 'Submit'}
//                   </button>
//                 )}
//               </div>

//               <p className="signin" onClick={() => setPopup(true)}>
//                 I would rather <NavLink>Sign In</NavLink>
//               </p>

//               <NavLink to="/" className="backhome">
//                 <BiChevronLeft /> Back home
//               </NavLink>
//             </form>
//           </div>
//         </div>

//         <div className="rightWrapper">
//           <img src={image} alt="" />
//         </div>

//         <div
//           className={popup ? 'signinDiv' : 'hide'}
//           onClick={() => setPopup(false)}
//         ></div>
//         {popup ? <SignIn className="signinpopup" /> : undefined}
//       </div>
//     </>
//   );
// };

// export default Register;

// import React, { useState } from 'react';
// import '../assets/SignIn.css';
// import { signInWithPopup } from 'firebase/auth';
// // import { auth, provider } from '../config';
// import axios from 'axios';
// import { toast } from 'react-toastify';
// import { NavLink } from 'react-router-dom';
// import { auth, provider } from '../config/firebase';
// // import GoogleLogin from 'react-google-login';
// import { GoogleOAuthProvider } from '@react-oauth/google';
// import { GoogleLogin } from '@react-oauth/google';

// function SignIn() {
//   const responseGoogle = response => {
//     console.log(response);
//   };
//   const [companyId, setCompanyId] = useState('');
//   const [password, setPassword] = useState('');
//   const [isLoading, setIsLoading] = useState(false);

//   const [formData, setFormData] = useState({
//     password: '',
//     emailOrCompanyName: '',
//   });

//   const handleInputChange = event => {
//     const { name, value } = event.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSignIn = async event => {
//     event.preventDefault();
//     try {
//       setIsLoading(true);

//       const res = await axios.post(
//         'https://pms-jq9o.onrender.com/api/v1/admin/login',
//         formData
//       );
//       console.log(res.data);
//       setIsLoading(false);
//       toast.success('Login Successfully');
//       //   setPopup(true);
//     } catch (error) {
//       console.log(error.message);
//       setIsLoading(false);
//       // toast.error(error.response.data.message);
//     }
//   };

//   const signInWithGoogle = async response => {
//     // response = await signInWithPopup(auth, provider);
//     // console.log(response._tokenResponse.idToken);
//     // try {
//     //   response = await signInWithPopup(auth, provider);
//     //   setIsLoading(true);
//     //   const res = await axios.post(
//     //     'http://localhost:3030/api/v1/admin/googlelogin',
//     //     {
//     //       tokenId: response._tokenResponse.idToken,
//     //     }
//     //   );
//     //   // console.log(res);
//     //   if (res) {
//     //     console.log('submitted');
//     //   }
//     //   console.log('submitted');
//     //   setIsLoading(false);
//     //   toast.success('Login Successfully');
//     //   //   setPopup(true);
//     // } catch (error) {
//     //   console.log(error.message);
//     //   setIsLoading(false);
//     //   // toast.error(error.response.data.message);
//     // }
//     // try {
//     //   axios({
//     //     method: 'POST',
//     //     url: 'https://pms-jq9o.onrender.com/api/v1/admin/googlelogin',
//     //     data: { tokenId: response._tokenResponse.idToken },
//     //   }).then(response => {
//     //     if (response) {
//     //       console.log(response);
//     //     }
//     //     console.log(response);
//     //   });
//     // } catch (error) {
//     //   console.log('ERROR SUBMITTING');
//     //   // toast.error(error.response.data.message);
//     // }
//   };

//   const responseSuccessGoogle = response => {
//     console.log(response);
//   };
//   const responseErrorGoogle = response => {};

//   return (
//     <div className="signInContainer">
//       <h1 className="text">Welcome Back</h1>
//       <p className="text_2">We’ve missed you so much</p>
//       {/* <button className="googleSignInButton" onClick={signInWithGoogle}>
//         <img
//           src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
//           alt="Google logo"
//         />
//         Login with google
//       </button> */}
//       {/* googleSignInButton */}

//       <div className="googleSignInButton">
//         <GoogleOAuthProvider
//           clientId="644468853015-cadrgrgrabl4vacc4evt7g342qiqa2t2.apps.googleusercontent.com"
//           redirectUri="http://localhost:3000/api/v1/admin/googlelogin"
//         >
//           <GoogleLogin
//             buttonText="Login with google"
//             onSuccess={responseSuccessGoogle => {
//               console.log(responseSuccessGoogle);
//             }}
//             onFailure={responseErrorGoogle => {
//               console.log(responseErrorGoogle);
//             }}
//           />
//         </GoogleOAuthProvider>
//       </div>

//       <div className="box">
//         <div className="innerBox">
//           <div className="or">
//             <div></div>
//             <p>or</p>
//             <div></div>
//           </div>
//         </div>
//       </div>
//       <form onSubmit={handleSignIn}>
//         <label className="inputLabel">
//           Company ID:
//           <input
//             className="inputField"
//             type="text"
//             name="emailOrCompanyName"
//             value={formData.emailOrCompanyName}
//             onChange={handleInputChange}
//             placeholder="Enter your Name"
//           />
//         </label>
//         <label className="inputLabel">
//           Password:
//           <input
//             className="inputField"
//             type="password"
//             name="password"
//             value={formData.password}
//             onChange={handleInputChange}
//             placeholder="Enter your password"
//           />
//         </label>
//         <p className="text_3">
//           <a href="/">Forgot password?</a>
//         </p>

//         <button className="signInButton" type="submit">
//           {isLoading ? 'Submitting...' : 'Login'}
//         </button>
//         <p className="last_text">
//           I would rather
//           <span>
//             <NavLink to={'/register'}>Sign up</NavLink>
//           </span>
//         </p>
//       </form>
//     </div>
//   );
// }

// export default SignIn;
