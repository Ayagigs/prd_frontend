import "./side.scss";
import React from 'react';
import { Home } from 'iconsax-react';
import { Profile2User } from 'iconsax-react';
import { Cup } from 'iconsax-react';
import { Chart1 } from 'iconsax-react';
import { Setting2 } from 'iconsax-react';
import { EmptyWallet } from 'iconsax-react';
import { Link } from "react-router-dom";
// import { DarkModeContext } from "../../context/darkModeContext";
// import { useContext } from "react";
import Logo from './logo.png';

const Side = () => {
  // const { dispatch } = useContext(DarkModeContext);
  return (
    <div className="side">
      <div className="top">
      <img width="100px" src={Logo} alt="view logo" />
      </div>
      <hr />
      <div className="sidecenter">
        <ul>
          <li>
          <Link to="/emp-dashboard" style={{ textDecoration: "none" }}>
          <Home className="icon" variant="Outline" />
          <span className="logo"></span>
            <span>Home</span>
        </Link> 
          </li>

          <Link to="/empgoals" style={{ textDecoration: "none" }}>
            <li>
              <Cup className="icon" />
              <span>Goals</span>
            </li>
          </Link>
          <Link to="/empperformance" style={{ textDecoration: "none" }}>
          <li>
            <Chart1 className="icon" />
            <span>Performance</span>
          </li>
          </Link>
          <Link to="/empsettings" style={{ textDecoration: "none" }}>
          <li>
            <Setting2 className="icon" />
            <span>Settings</span>
          </li>
          </Link>
          <Link to="/empwallet" style={{ textDecoration: "none" }}>
          <li>
            <EmptyWallet className="icon" />
            <span>Wallet</span>
          </li>
          </Link>
          
          
       <hr />
      </ul>
      </div>
      <div className="bottom">
      <div className="items">
           <div className="item profile">
            <img
              src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className="avatar"
            />
            <p className="owner">Aya and Co</p>
          </div>
        </div>
        
        
      </div>
    </div>
  );
};

export default Side;
