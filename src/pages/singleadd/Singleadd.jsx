import React from 'react'
import "./singleadd.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { Link } from "react-router-dom";
import { useState } from 'react';
import axios from "axios";
import Cookies from "js-cookie"
import { toast } from 'react-toastify';

const Singleadd = () => {
  const [formData, setFormData] = useState({
    employeeID: "",
    firstName: "",
    lastName: "",
    workEmail: "",
    phoneNo: "",
    department: "",
    gender: "",
    role: ""
  })
  const [isLoading, setIsLoading] = useState(false);


  const handleSubmit = async event => {
    try {
      setIsLoading(true);

      const res = await axios.post(
        `https://pms-jq9o.onrender.com/api/v1/employee/registeration/${Cookies.get('companyID')}`,
        formData,
        {headers: {Authorization: `Bearer ${Cookies.get('Token')}`}}
        );
        console.log(res.data);
        setIsLoading(false);
      toast.success('Registeration Successfull');
      // navigate('/employee/trial/new/singleadd/verify')
      setFormData({
        employeeID: "",
        firstName: "",
        lastName: "",
        workEmail: "",
        phoneNo: "",
        department: "",
        gender: "",
        role: ""
      })
      //   setPopup(true);
    } catch (error) {
      setIsLoading(false);
      toast.error(error.response.data.message);
    }
  };


  return (
    <div className='singleaddcontainer'>
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="singleaddcont">
          <button className='closebtn'>X</button>
        <div className="topcont">
            <h1 className="title">Add New Employee</h1>
        </div>
        <div className="formcont">
         <main>
        <div id="main">
          <section>
            <div className="first-container">
              <div>
                <label className="id" For="id-input">
                  Employee ID 
                </label>
                <input
                  className="input"
                  type="text"
                  id="id-input"
                  name="Employee ID"
                  value={formData['employeeID']}
                  onChange={(e) => setFormData({...formData, employeeID: e.target.value})}
                />
              </div>
              <div>
                <label className="role" htmlFor="role-input">
                  Role
                </label>
                <select id="role-input" name="Role"  value={formData['role']} onChange={(e) => setFormData({...formData, role: e.target.value})}>
                  <option value="">--Select--</option>
                  <option value="HR Manager">HR Manager</option>
                  <option value="Performance Manager">Performance Manager</option>
                  <option value="Staff">Staff</option>
                </select>
              </div>
            </div>

            <div className="second-container">
            <div className="first">
              <label htmlFor="first">First Name</label>
              <input
                  className="input"
                  type="text"
                  id="id-input"
                  name="First name"
                  value={formData['firstName']}
                  onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                />
            </div>
            <div className="last">
              <label htmlFor="last">Last Name</label>
              <input
                  className="input"
                  type="text"
                  id="id-input"
                  name="Last name"
                  value={formData['lastName']}
                  onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                />
            </div>
            </div>

            <div className="third-container">
              <div id="email">
                <label htmlFor="email">Work email:</label>
                <input
                  className="input"
                  type="text"
                  id="email-input"
                  name="Work email"
                  value={formData['workEmail']}
                  onChange={(e) => setFormData({...formData, workEmail: e.target.value})}
                />
              </div>
              <div className="phone">
                <label htmlFor="phone">Phone number</label>
                <input
                  className="input"
                  type="text"
                  id="phone-input"
                  name="Phone number"
                  value={formData['phoneNo']}
                  onChange={(e) => setFormData({...formData, phoneNo: e.target.value})}
                />
              </div>
            </div>
            
            <div className="fourth-container">
              <div id="department">
                <label htmlFor="department">Department</label>
                <select name="department" id="department" value={formData.department} onChange={(e) => setFormData({...formData, department: e.target.value})}>
                  <option value="">--Select--</option>
                  <option value="Finance">Finance</option>
                  <option value="Audit">Audit</option>
                  <option value="Human Resources">Human Resource</option>
                </select>
              </div>
              <div className="Gender">
                <label htmlFor="Reg">Gender</label>
                <select className="select-state2" name="state" id="state" value={formData['gender']} onChange={(e) => setFormData({...formData, gender: e.target.value})}>
                  <option value="">--Select--</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
            </div>

      
          </section>
        </div>
        <div className='formbuttons'>
          <Link to="/employee/trial/new" style={{ textDecoration: "none" }}>
          <button className='cancelbtn'>Cancel</button>
          </Link>
          <Link style={{ textDecoration: "none" }}>
          <button className='addempbtn' onClick={() => handleSubmit()}>{isLoading ? 'Submitting...' : 'Add Employee'}</button>
          </Link>
          
        </div>
        
      </main>
    </div>

    </div>
    </div>
    </div>
  )
}

export default Singleadd