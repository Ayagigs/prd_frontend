import React from 'react'
import "./verifybulk.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { Link } from "react-router-dom";
import { SmsNotification } from 'iconsax-react';

const Verifybulk = () => {
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
        <SmsNotification className='icona' variant="TwoTone" size="52" color="#030BC3" />
            <h1 className="verifytext">An email has been sent to a</h1>
            <p className="inmail">Bulk list</p>
        </div>


    </div>
    </div>
    </div>
  )
}

export default Verifybulk