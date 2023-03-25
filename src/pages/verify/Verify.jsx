import React from 'react'
import "./verify.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { Link } from "react-router-dom";
import { SmsNotification } from 'iconsax-react';

const Verify = () => {
  return (
    <div className='verificationcontainer'>
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="verifycont">
            <Link to="/employee/trial/new" style={{ textDecoration: "none" }}>
            <button className='closeverify'>X</button>
            </Link>
          
        <div className="maincont">
        <SmsNotification className='icona' variant="TwoTone" size="52" color="#030BC3"/>
            <h1 className="verifytext">An email has been sent to</h1>
            <p className="inmail">adebisi@gmail.com</p>
        </div>


    </div>
    </div>
    </div>
  )
}

export default Verify