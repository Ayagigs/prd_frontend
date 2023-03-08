import "./sidebar.scss";
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
import Image from "./logo.png"

const Sidebar = () => {
  // const { dispatch } = useContext(DarkModeContext);
  return (
    <div className="sidebar">
      <div className="top">
      <span className="logo">View</span>
      <img
              src="src\components\sidebar\logo.png"
              alt=""
              className="avatar"
            />
      </div>
      <hr />
      <div className="center">
        <ul>
          <li>
          <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo"></span>
          <Home className="icon" variant="Outline" />
            <span>Home</span>
        </Link>
            
          </li>
          <Link to="/employee" style={{ textDecoration: "none" }}>
            <li>
              <Profile2User className="icon" variant="Outline" />
              <span>Employee</span>
            </li>
          </Link>
          <Link to="/goals" style={{ textDecoration: "none" }}>
            <li>
              <Cup className="icon" />
              <span>Goals</span>
            </li>
          </Link>
          <Link to="/performance" style={{ textDecoration: "none" }}>
          <li>
            <Chart1 className="icon" />
            <span>Performance</span>
          </li>
          </Link>
          <Link to="/settings" style={{ textDecoration: "none" }}>
          <li>
            <Setting2 className="icon" />
            <span>Settings</span>
          </li>
          </Link>
          <Link to="/wallet" style={{ textDecoration: "none" }}>
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

export default Sidebar;
