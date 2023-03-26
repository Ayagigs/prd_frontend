import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { TickCircle } from 'iconsax-react';
// import { CalendarAdd } from 'iconsax-react';
import "./trial.scss";
import Image from './imageholder.png';

import { Link } from "react-router-dom";

const Trial = () => {
    return (
      <div className="home1">
        <Sidebar />
        <div className="trialContainer">
          <Navbar />
          <div className="trialcont">
           <div className="trialdetails">
           
              <button className="closetrial-btn">
              <Link to="/employee" style={{ textDecoration: "none" }}>
                X
              </Link>
              </button>
           
           <p className="title">Start your Premium 30-days free trial</p>
            <p className="sub"> Unlock the power of your work force. Very simple pricing, one plan for a monthly fee. </p>
            <div className="charges">
                <div className="super">USDT</div>
            <p className="amount">6.89</p>
            </div>
            <p className="sub"> per month</p>
            <div>
                <ul>
                    <li className="sub2">
                    <TickCircle size="22" color="#3e45eb"/>30 days free Trial</li>
                    <li className="sub2"> 
                    <TickCircle size="22" color="#3e45eb"/>Maximum of 5 emplotees for 30 days</li>
                    <li className="sub2">
                    <TickCircle size="22" color="#3e45eb"/>Unlimited performance review</li>
                    </ul>
            </div>
            <p className="sub">Get access to all features for the next 30 days to bring your teams performance to the best level ever</p>
            <div className="buttons">
            <Link to="/employee/trial/new" style={{ textDecoration: "none" }}>
            <button className="starttrialbtn"> Start your 30 days free trial</button>
            </Link>
            
            <button className="skipbtn"> 
              <Link to="/employee" style={{ textDecoration: "none" }}>
                Skip free trial
              </Link>
              </button>         
            </div>
          </div>
        </div>
        <div className="sideimage">
        <img width="" height="577px" src={Image} alt="view logo" />
        </div>
        <div>
          
        </div>
        </div>
      </div>
    );
  };
  
  export default Trial;
  
