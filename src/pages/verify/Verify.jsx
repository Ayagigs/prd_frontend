import React from 'react'
import "./verify.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { Link } from "react-router-dom";
import { Profile2User } from 'iconsax-react';

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
        <Profile2User className='icona' size="32" color="#030BC3"/>
            <h1 className="verifytext">An email has been sent to</h1>
            <p className="inmail">adebisi@gmail.com</p>
        </div>


    </div>
    </div>
    </div>
  )
}

export default Verify