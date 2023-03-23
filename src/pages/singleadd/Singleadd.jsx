import React from 'react'
import "./singleadd.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { Link } from "react-router-dom";

const Singleadd = () => {
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
                />
              </div>
              <div>
                <label className="role" htmlFor="role-input">
                  Role
                </label>
                <select id="role-input" name="Role">
                  <option value="select">Admin</option>
                  <option value="Admin">Admin</option>
                  <option value="Employee">Employee</option>
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
                />
            </div>
            <div className="last">
              <label htmlFor="last">Last Name</label>
              <input
                  className="input"
                  type="text"
                  id="id-input"
                  name="Last name"
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
                />
              </div>
              <div className="phone">
                <label htmlFor="phone">Phone number</label>
                <input
                  className="input"
                  type="text"
                  id="phone-input"
                  name="Phone number"
                />
              </div>
            </div>
            
            <div className="fourth-container">
              <div id="department">
                <label htmlFor="department">Department</label>
                <select name="department" id="department">
                  <option value="1">Finance</option>
                  <option value="2">Finance</option>
                  <option value="3">Audit</option>
                  <option value="3">Human Resource</option>
                </select>
              </div>
              <div className="Gender">
                <label htmlFor="Reg">Reg no.</label>
                <select className="select-state2" name="state" id="state">
                  <option value="select">Male</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
            </div>

      
          </section>
        </div>
        <div className='formbuttons'>
          <Link to="/employee/trial/new" style={{ textDecoration: "none" }}>
          <button className='cancelbtn'>Cancel</button>
          </Link>
          <Link to="/employee/trial/new/singleadd/verify" style={{ textDecoration: "none" }}>
          <button className='addempbtn' >Add Employee</button>
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