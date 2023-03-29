import "./sidebar.scss";
import React from 'react';
import { Home } from 'iconsax-react';
import { Profile2User } from 'iconsax-react';
import { Cup } from 'iconsax-react';
import { Chart1 } from 'iconsax-react';
import { Setting2 } from 'iconsax-react';
import { EmptyWallet } from 'iconsax-react';
import { Link } from "react-router-dom";
import Logo from './logo.png';
import MoreVertIcon from "@mui/icons-material/MoreVert";
// import { DarkModeContext } from "../../context/darkModeContext";
// import { useContext } from "react";
// import Image from "./logo.png"

const Sidebar = () => {
  // const { dispatch } = useContext(DarkModeContext);
  return (
    <div className="sidebar1">
      <div className="top">
      <img width="100px" src={Logo} alt="view logo" />
      </div>
      <hr />
      <div className="center">
        <ul>
          <li>
          <Link to="/dashboard" style={{ textDecoration: "none" }}>
          <Home className="icon" variant="Outline" />
          <span className="logo"></span>
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
          
      </ul>
      </div>
      <div className="bottom">
          <div className="usercontainer">
        <div>
          <img
            width={40}
              src="https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg"
              alt=""
              className="avatar"
            />
        </div>
        <div className="namecontainer">
          <span className="realname">Aya & Co. Ltd</span>
          <h1 className="userrole">Admin</h1>
        </div>
        <div>
          <Link to="" style={{ textDecoration: "none" }}>
            <MoreVertIcon fontSize="small" />
          </Link >
        </div>
      </div>  
        
      </div>
    </div>
  );
};

export default Sidebar;
