import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import { Avatar } from '@mantine/core';
import './settings.scss';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';
import Cookies from 'js-cookie';
import { RxAvatar } from 'react-icons/rx';
import { FaSpinner } from 'react-icons/fa';
const { URL } = window;

const Settings = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [states, setStates] = useState([]);
  const [countries, setCountries] = useState([]);
  const [profile, setProfile] = useState(null);
  const [data, setData] = useState({
    firstName: '',
    lastName: '',
    companyName: '',
    profilePhoto: '',
  });
  const [initials, setInitials] = useState('');


  const [passwordData, setPasswordData] = useState({
    oldPassword: '',
    password: '',
  });

  const [conpanyFormData, setCompanyFormData] = useState({
    companyName: '',
    businessType: '',
    address: '',
    companyPhone: '',
    country: '',
    state: '',
    numOfEmployees: '',
    companyRegNo: '',
  });

  const [performanceReviewData, setPerformanceReviewData] = useState({
    midYearStartDate: '',
    midYearEndDate: '',
    fullYearStartDate: '',
    fullYearEndDate: '',
    appraisalStartDate: '',
    appraisalEndDate: '',
  });

  const [personalFormData, setPersonalFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    role: '',
  });

  
  useEffect(() => {
    const url = `https://pms-jq9o.onrender.com/api/v1/admin/findme`;
    axios
      .get(url, {
        headers: { Authorization: `Bearer ${Cookies.get('Token')}` },
      })
      .then(res => {
        setPersonalFormData({
          firstName: res.data.data.adminUser.firstName,
          lastName: res.data.data.adminUser.lastName,
          email: res.data.data.adminUser.email,
          role: res.data.data.adminUser.role,
        })
        setPerformanceReviewData({
          midYearStartDate: res.data.data.company[0].midYearStartDate,
          midYearEndDate: res.data.data.company[0].midYearEndDate,
          fullYearStartDate: res.data.data.company[0].fullYearStartDate,
          fullYearEndDate: res.data.data.company[0].fullYearEndDate,
          appraisalStartDate: res.data.data.company[0].appraisalStartDate,
          appraisalEndDate: res.data.data.company[0].appraisalEndDate,
        })
        setCompanyFormData({
          companyName: res.data.data.company[0].companyName,
          businessType: res.data.data.company[0].businessType,
          address: res.data.data.company[0].address,
          companyPhone: res.data.data.company[0].companyPhone,
          country: res.data.data.company[0].country,
          state: res.data.data.company[0].state,
          numOfEmployees: res.data.data.company[0].numOfEmployees,
          companyRegNo: res.data.data.company[0].companyRegNo,
        })
        setData(res.data.data.adminUser)
        setInitials(res.data.data.adminUser.firstName[0] + res.data.data.adminUser.lastName[0])
      });
  }, []);

  const submitPasswordChange = async event => {
    event.preventDefault();

    try {
      setIsLoading(true);
      const Token = Cookies.get('Token');
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

  const submitCompanyDetails = async event => {
    event.preventDefault();

    try {
      setIsLoading(true);
      const Token = Cookies.get('Token');
      console.log(Token);
      const res = await axios.patch(
        'https://pms-jq9o.onrender.com/api/v1/admin/updatecompany',
        conpanyFormData,
        {
          headers: {
            Authorization: `Bearer ${Token}`,
          },
        }
      );

      setData({...data, companyName: res.data.data.updateCompany.companyName})
      setIsLoading(false);

      console.log(res.data);

      toast.success('Updated Successfully');
      console.log(res.data);
    } catch (error) {
      setIsLoading(false);
      toast.error(error.response.data.message);
    }
  };

  const submitPerformanceReview = async event => {
    event.preventDefault();

    try {
      setIsLoading(true);
      const Token = Cookies.get('Token');
      console.log(Token);
      const res = await axios.patch(
        'https://pms-jq9o.onrender.com/api/v1/admin/updatecompanydetails',
        performanceReviewData,
        {
          headers: {
            Authorization: `Bearer ${Token}`,
          },
        }
      );
      setIsLoading(false);

      console.log(res.data);

      toast.success('Updated Successfully');
      console.log(res.data);
    } catch (error) {
      setIsLoading(false);
      toast.error(error.response.data.message);
    }
  };

  const submitPersonalInfo = async event => {
    event.preventDefault();
    const token = Cookies.get('Token');
    console.log(Cookies.get('Token'));
    toast.success({ token });
    try {
      setIsLoading(true);
      const Token = Cookies.get('Token');
      const res = await axios.patch(
        'https://pms-jq9o.onrender.com/api/v1/admin/updatepersonalinfo',
        personalFormData,
        {
          headers: {
            Authorization: `Bearer ${Token}`,
          },
        }
      );

      setData({...data, firstName: res.data.data.updateInfo.firstName, lastName: res.data.data.updateInfo.lastName})
      setInitials(res.data.data.updateInfo.firstName[0] + res.data.data.updateInfo.lastName[0])
      setIsLoading(false);

      console.log(res.data.data);

      toast.success('Updated Successfully');
    } catch (error) {
      console.log(error.message);
      setIsLoading(false);
      toast.error(error.response.data.message);
    }
  };
  const handlePasswordChange = event => {
    const { name, value } = event.target;
    setPasswordData({ ...passwordData, [name]: value });
  };

  const handlePersonalInputChange = event => {
    const { name, value } = event.target;
    setPersonalFormData({ ...personalFormData, [name]: value });
  };

  const handleCompanyInputChange = event => {
    const { name, value } = event.target;
    setCompanyFormData({ ...conpanyFormData, [name]: value });
  };

  const handlePerformanceReviewInputChange = event => {
    const { name, value } = event.target;
    setPerformanceReviewData({ ...performanceReviewData, [name]: value });
  };

  const handleImageUpload = event => {
    const file = event.target.files[0];
    setProfile(file);
  };

  const handleSubmitProfile = async event => {
    event.preventDefault();

    setIsLoading(true);
    const Token = Cookies.get('Token');
    await axios
      .post('https://pms-jq9o.onrender.com/api/v1/admin/photoupload', profile, {
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
        console.log(error);
        // Handle any errors that occurred during the upload
      });
  };

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

    const fetchStates = async () => {
      try {
        setIsLoading(true);

        const response = await axios.post(
          'https://countriesnow.space/api/v0.1/countries/states',
          {
            country: conpanyFormData.country,
          }
        );
        setIsLoading(false);
        setStates(response.data.data.states);
      } catch (error) {
        console.log(error);
      }
    };

    fetchCountries();
    if (conpanyFormData.country !== '') {
      fetchStates();
    }
  }, [conpanyFormData.country]);

  //

  // console.log(adminUser.data);
  return (
    <div className="home1">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="settingsHeading">
          <div className="settingsImgWrap">
            {profile ? (
              <Avatar
                src={URL.createObjectURL(profile)}
                alt="Vitaly Rtishchev"
                color="blue"
                radius={100}
                size={150}
              >
                {initials}
              </Avatar>
            ) : (
              <Avatar
                src={''}
                alt="Vitaly Rtishchev"
                color="blue"
                radius={100}
                size={150}
              >
                {initials}
              </Avatar>
            )}

            {/* <Avatar
              src={''}
              alt="Vitaly Rtishchev"
              color="blue"
              radius={100}
              size={150}
            >
              VR
            </Avatar> */}
          </div>
          <div className="settingsNameWrap">
            <h1>{data?.companyName}</h1>
            <p>{data?.firstName +   " " + data?.lastName} (Owner)</p>
          </div>
        </div>

        <div className="settingBottom">
          {/* Company Details Settings */}
          <div className="settingsContent">
            <div className="leftSettingsContent">
              <h2>Company Details</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
                ea molestias repudiandae necessitatibus asperiores dolores
              </p>
            </div>

            <form onSubmit={submitCompanyDetails}>
              <div className="inputContainer">
                <div className="inputWrapper">
                  <label htmlFor="">Company Name</label>
                  <input
                    type="text"
                    name="companyName"
                    id="companyName"
                    value={conpanyFormData.companyName}
                    onChange={handleCompanyInputChange}
                    placeholder="Please Enter Your companyName"
                  />
                </div>
                <div className="inputWrapper">
                  <label htmlFor="businessType">Business Type</label>
                  <select
                    name="businessType"
                    value={conpanyFormData.businessType}
                    onChange={handleCompanyInputChange}
                    id="businessType"
                  >
                    <option>--Select option--</option>
                    <option>Technology</option>
                    <option>Marketing</option>
                    <option>Finance</option>
                    <option>Film and Entertainment</option>
                  </select>
                </div>
              </div>
              <div className="inputWrapper">
                <label htmlFor="">Address</label>
                <input
                  type="text"
                  name="address"
                  id="address"
                  value={conpanyFormData.address}
                  onChange={handleCompanyInputChange}
                  placeholder="Enter your Company Address"
                />
              </div>
              <div className="inputContainer">
                <div className="inputWrapper">
                  <label htmlFor="">Country</label>
                  <select
                    name="country"
                    id="country"
                    value={conpanyFormData.country}
                    onChange={handleCompanyInputChange}
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
                    value={conpanyFormData.state}
                    onChange={handleCompanyInputChange}
                  >
                    <option value="">-- Select a state --</option>
                    {isLoading && (
                      <option disabled>Fetching states, please wait...</option>
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
              {/* <div className="inputWrapper">
                  <label htmlFor="">Address</label>
                  <input type="text" />
                </div> */}
              <div className="inputContainer">
                <div className="inputWrapper">
                  <label htmlFor="">Number of Employees</label>
                  <select
                    name="numOfEmployees"
                    value={conpanyFormData.numOfEmployees}
                    onChange={handleCompanyInputChange}
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
                    name="companyRegNo"
                    id="companyRegNo"
                    value={conpanyFormData.companyRegNo}
                    onChange={handleCompanyInputChange}
                    placeholder="Enter your Registration Number"
                  />
                </div>
              </div>
              <div className="buttonWrapper">
                <button>Cancel</button>
                <button type="submit">Save</button>
              </div>
            </form>
          </div>

          <div className="settingsContent">
            <div className="leftSettingsContent">
              <h2>Personal Info</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
                ea molestias repudiandae necessitatibus asperiores dolores
              </p>
            </div>

            <form onSubmit={submitPersonalInfo}>
              <div className="inputWrapper">
                <label htmlFor="">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  value={personalFormData.firstName}
                  onChange={handlePersonalInputChange}
                  placeholder="Please Enter Your Firstname"
                />
              </div>
              <div className="inputWrapper">
                <label htmlFor="">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  value={personalFormData.lastName}
                  onChange={handlePersonalInputChange}
                  placeholder="Please Enter Your Lastname"
                />
              </div>
              <div disabled className="inputWrapper">
                <label htmlFor="">Role</label>
                <input
                  type="text"
                  readOnly
                  name="role"
                  id="role"
                  value={personalFormData.role}
                  onChange={handlePersonalInputChange}
                />
              </div>
              <div className="inputWrapper">
                <label htmlFor="">Work Email</label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  value={personalFormData.email}
                  onChange={handlePersonalInputChange}
                  placeholder="Please Enter Your Email"
                />
              </div>
              <div className="buttonWrapper">
                <button>Cancel</button>
                <button type="submit">Save</button>
              </div>
            </form>
          </div>

          {/* Profile Photo Settings */}
          <div className="settingsContent">
            <div className="leftSettingsContent">
              <h2>Profile Photo Upload</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
                ea molestias repudiandae necessitatibus asperiores dolores
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

                  <label style={{ marginLeft: '50px' }} htmlFor="image-upload">
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
          <div className="settingsContent">
            <div className="leftSettingsContent">
              <h2>Password</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
                ea molestias repudiandae necessitatibus asperiores dolores
              </p>
            </div>

            <form onSubmit={submitPasswordChange}>
              <div className="inputWrapper">
                <label htmlFor="oldPassword">Old Password</label>
                <input
                  type="password"
                  name="oldPassword"
                  value={passwordData.oldPassword}
                  onChange={handlePasswordChange}
                  id="oldPassword"
                  placeholder="Please Enter Your oldPassword"
                />
              </div>
              <div className="inputWrapper">
                <label htmlFor="password">New Password</label>
                <input
                  type="password"
                  name="password"
                  value={passwordData.password}
                  onChange={handlePasswordChange}
                  id="password"
                  placeholder="Please Enter Your password"
                />
              </div>
              <div className="buttonWrapper">
                <button>Cancel</button>
                <button type="submit">
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

          <div className="settingsContent">
            <div className="leftSettingsContent">
              <h2>Performance Review</h2>
              <p>
                Manage the performance review and appraisal of your employees by
                setting the required dates for each reviews
              </p>
            </div>

            <form onSubmit={submitPerformanceReview}>
              <h2>Mid-Year Review</h2>
              <div className="inputContainer">
                <div className="inputWrapper">
                  <label htmlFor="midYearStartDate">Start Date</label>
                  <input
                    type="datetime-local"
                    name="midYearStartDate"
                    value={performanceReviewData.midYearStartDate}
                    onChange={handlePerformanceReviewInputChange}
                    id="midYearStartDate"
                  />
                </div>
                <div className="inputWrapper">
                  <label htmlFor="midYearEndDate">End Date</label>
                  <input
                    type="datetime-local"
                    name="midYearEndDate"
                    value={performanceReviewData.midYearEndDate}
                    onChange={handlePerformanceReviewInputChange}
                    id="midYearStartDate"
                  />
                </div>
              </div>

              <h2>Full-Year Review</h2>
              <div className="inputContainer">
                <div className="inputWrapper">
                  <label htmlFor="fullYearStartDate">Start Date</label>
                  <input
                    type="datetime-local"
                    name="fullYearStartDate"
                    value={performanceReviewData.fullYearStartDate}
                    onChange={handlePerformanceReviewInputChange}
                    id="fullYearStartDate"
                  />
                </div>
                <div className="inputWrapper">
                  <label htmlFor="fullYearEndDate">End Date</label>
                  <input
                    type="datetime-local"
                    name="fullYearEndDate"
                    value={performanceReviewData.fullYearEndDate}
                    onChange={handlePerformanceReviewInputChange}
                    id="fullYearEndDate"
                  />
                </div>
              </div>

              <h2>360 Appraisal</h2>
              <div className="inputContainer">
                <div className="inputWrapper">
                  <label htmlFor="appraisalStartDate">Start Date</label>
                  <input
                    type="datetime-local"
                    name="appraisalStartDate"
                    value={conpanyFormData.appraisalStartDate}
                    onChange={handlePerformanceReviewInputChange}
                    id="appraisalStartDate"
                  />
                </div>
                <div className="inputWrapper">
                  <label htmlFor="appraisalEndDate">End Date</label>
                  <input
                    type="datetime-local"
                    name="appraisalEndDate"
                    value={performanceReviewData.appraisalEndDate}
                    onChange={handlePerformanceReviewInputChange}
                    id="appraisalEndDate"
                  />
                </div>
              </div>

              <div className="buttonWrapper">
                <button>Cancel</button>
                <button type="submit">
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
      </div>
    </div>
  );
};

export default Settings;
