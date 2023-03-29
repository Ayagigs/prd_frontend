import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import { BsUpload } from 'react-icons/bs';
import { Avatar } from '@mantine/core';

import './settings.scss';
import Signup2 from '../../components/companydetails/Companydetails';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';
// import Widget from "../../components/widget/Widget";
// import Chart from "../../components/chart/Chart";
// import Table from "../../components/table/Table";

const Settings = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [states, setStates] = useState([]);
  const [countries, setCountries] = useState([]);
  const [adminUser, setAdminUser] = useState([]);

  const [conpanyFormData, setCompanyFormData] = useState({
    companyName: '',
    businessType: '',
    address: '',
    companyPhone: '',
    country: '',
    state: '',
    numOfEmployees: '',
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
  });

  const submitCompanyDetails = async event => {
    event.preventDefault();

    try {
      setIsLoading(true);

      const res = await axios.patch(
        'https://pms-jq9o.onrender.com/api/v1/admin/updatecompanydetails',
        conpanyFormData
      );
      // console.log(res.data.email);
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
    try {
      setIsLoading(true);

      const res = await axios.patch(
        'https://pms-jq9o.onrender.com/api/v1/admin/updatepersonalinfo',
        personalFormData
      );

      setIsLoading(false);

      console.log(res.data);

      toast.success('Updated Successfully');
    } catch (error) {
      console.log(error.message);
      setIsLoading(false);
      toast.error(error.response.data.message);
    }
  };

  const handlePersonalInputChange = event => {
    const { name, value } = event.target;
    setPersonalFormData({ ...personalFormData, [name]: value });
  };

  const handleCompanyInputChange = event => {
    const { name, value } = event.target;
    setCompanyFormData({ ...conpanyFormData, [name]: value });
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

  useEffect(() => {
    const findUser = async () => {
      try {
        const response = await axios.get(
          'https://pms-jq9o.onrender.com/api/v1/admin/findme'
        );

        console.log(response.data);
        // setAdminUser(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };

    findUser();
  });

  return (
    <div className="home1">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="settingsHeading">
          <div className="settingsImgWrap">
            <Avatar
              src={''}
              alt="Vitaly Rtishchev"
              color="blue"
              radius={100}
              size={150}
            >
              VR
            </Avatar>
          </div>
          <div className="settingsNameWrap">
            <h1>Aya & Co Ltd</h1>
            <p>Adebisi Akin (Owner)</p>
          </div>
        </div>

        <div className="settingBottom">
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
                    required
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
                  required
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
                    required
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
                  required
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
                  required
                  name="lastName"
                  id="lastName"
                  value={personalFormData.lastName}
                  onChange={handlePersonalInputChange}
                  placeholder="Please Enter Your Lastname"
                />
              </div>
              <div disabled className="inputWrapper">
                <label htmlFor="">Role</label>
                <input type="text" />
              </div>
              <div className="inputWrapper">
                <label htmlFor="">Work Email</label>
                <input
                  type="text"
                  required
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

          <div className="settingsContent">
            <div className="leftSettingsContent">
              <h2>Profile Photo Upload</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
                ea molestias repudiandae necessitatibus asperiores dolores
              </p>
            </div>

            <form action="">
              <div className="inputWrapper">
                <label htmlFor="">Profile Picture</label>
                <input type="file" name="" id="" />
              </div>
              <div className="buttonWrapper">
                <button>Cancel</button>
                <button type="submit">Upload</button>
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

            <form onSubmit={submitPersonalInfo}>
              <div className="inputWrapper">
                <label htmlFor="oldPassword">Old Password</label>
                <input
                  type="password"
                  required
                  name="oldPassword"
                  value={personalFormData.password}
                  onChange={handlePersonalInputChange}
                  id="oldPassword"
                  placeholder="Please Enter Your oldPassword"
                />
              </div>
              <div className="inputWrapper">
                <label htmlFor="password">New Password</label>
                <input
                  type="password"
                  required
                  name="password"
                  value={personalFormData.password}
                  onChange={handlePersonalInputChange}
                  id="password"
                  placeholder="Please Enter Your password"
                />
              </div>
              <div className="buttonWrapper">
                <button>Cancel</button>
                <button type="submit">Save</button>
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
            conpanyFormData
            <form onSubmit={submitCompanyDetails}>
              <h2>Mid-Year Review</h2>
              <div className="inputContainer">
                <div className="inputWrapper">
                  <label htmlFor="midYearStartDate">Start Date</label>
                  <input
                    type="datetime-local"
                    required
                    name="midYearStartDate"
                    value={conpanyFormData.midYearStartDate}
                    onChange={handleCompanyInputChange}
                    id="midYearStartDate"
                  />
                </div>
                <div className="inputWrapper">
                  <label htmlFor="midYearEndDate">End Date</label>
                  <input
                    type="datetime-local"
                    required
                    name="midYearEndDate"
                    value={conpanyFormData.midYearEndDate}
                    onChange={handleCompanyInputChange}
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
                    required
                    name="fullYearStartDate"
                    value={conpanyFormData.fullYearStartDate}
                    onChange={handleCompanyInputChange}
                    id="fullYearStartDate"
                  />
                </div>
                <div className="inputWrapper">
                  <label htmlFor="fullYearEndDate">End Date</label>
                  <input
                    type="datetime-local"
                    required
                    name="fullYearEndDate"
                    value={conpanyFormData.fullYearEndDate}
                    onChange={handleCompanyInputChange}
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
                    required
                    name="appraisalStartDate"
                    value={conpanyFormData.appraisalStartDate}
                    onChange={handleCompanyInputChange}
                    id="appraisalStartDate"
                  />
                </div>
                <div className="inputWrapper">
                  <label htmlFor="appraisalEndDate">End Date</label>
                  <input
                    type="datetime-local"
                    required
                    name="appraisalEndDate"
                    value={conpanyFormData.appraisalEndDate}
                    onChange={handleCompanyInputChange}
                    id="appraisalEndDate"
                  />
                </div>
              </div>

              <div className="buttonWrapper">
                <button>Cancel</button>
                <button type="submit">Save</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
