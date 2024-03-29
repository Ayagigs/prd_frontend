import './sidebar.scss';
import React from 'react';
import { Home } from 'iconsax-react';
import { Profile2User } from 'iconsax-react';
import { Cup } from 'iconsax-react';
import { Chart1 } from 'iconsax-react';
import { Setting2 } from 'iconsax-react';
import { More2 } from 'iconsax-react';
import { EmptyWallet } from 'iconsax-react';
import { Link } from 'react-router-dom';
import { Logout } from 'iconsax-react';
import { Message } from 'iconsax-react';
import Logo from './logo.png';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import Swal from 'sweetalert2';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Avatar } from '@mantine/core';
// import Swal from 'sweetalert2'

// import { DarkModeContext } from "../../context/darkModeContext";
// import { useContext } from "react";
// import Image from "./logo.png"

const Sidebar = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({});
  const [profile, setProfile] = useState({});
  const [initials, setInitials] = useState('');

  useEffect(() => {
    const url = `https://pms-jq9o.onrender.com/api/v1/admin/findme`;
    axios
      .get(url, {
        headers: { Authorization: `Bearer ${Cookies.get('Token')}` },
      })
      .then(res => {
        setData(res.data.data.company[0]);
        setInitials(res.data.data.adminUser.firstName[0] + res.data.data.adminUser.lastName[0])
        setProfile(res.data.data.adminUser.profilePhoto);
        console.log(res.data.data.company[0]);
      });
  }, []);
  // const { dispatch } = useContext(DarkModeContext);
  const handleLogout = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will be logged out of the application',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, log me out',
      cancelButtonText: 'No, cancel',
    }).then(result => {
      if (result.isConfirmed) {
        // Clear the cookie that stores the user's login information
        // removeCookie('auth_token');
        // Redirect the user to the login page
        Cookies.remove('Token');
        Cookies.remove('companyID');
        navigate('/');
      }
    });
  };

  return (
    <div className="sidebar1">
      <div className="adminSidebartop">
        <div className="top">
          <img width="100px" src={Logo} alt="view logo" />
        </div>
        <hr />
        <div className="center">
          <ul>
            <li>
              <Link to="/dashboard" style={{ textDecoration: 'none' }}>
                <Home className="icon" variant="Outline" />
                <span className="logo"></span>
                <span>Home</span>
              </Link>
            </li>

            <Link to="/employee" style={{ textDecoration: 'none' }}>
              <li>
                <Profile2User className="icon" variant="Outline" />
                <span>Employee</span>
              </li>
            </Link>
            <Link to="/goals" style={{ textDecoration: 'none' }}>
              <li>
                <Cup className="icon" />
                <span>Goals</span>
              </li>
            </Link>
            <Link to="/performance" style={{ textDecoration: 'none' }}>
              <li>
                <Chart1 className="icon" />
                <span>Performance</span>
              </li>
            </Link>
            {/* <Link to="/message" style={{ textDecoration: 'none' }}>
              <li>
                <Message className="icon" />
                <span>Messaging</span>
              </li>
            </Link> */}
            <Link to="/settings" style={{ textDecoration: 'none' }}>
              <li>
                <Setting2 className="icon" />
                <span>Settings</span>
              </li>
            </Link>
            <Link to="/wallet" style={{ textDecoration: 'none' }}>
              <li>
                <EmptyWallet className="icon" />
                <span>Wallet</span>
              </li>
            </Link>
            <Link style={{ textDecoration: 'none' }} onClick={handleLogout}>
              <li>
                <Logout className="icon" />
                <span>Logout</span>
              </li>
            </Link>
          </ul>
        </div>
      </div>
      <div className="bottom">
        <div className="usercontainer">
          {/* <div className="settingsImgWrap">
          </div> */}
            <Avatar
              src={profile}
              alt={'ga'}
              color="blue"
              radius={100}
            >{initials}</Avatar>
          <div className="namecontainer">
            <span className="realname">{data.companyName}</span>
            <h1 className="userrole">Admin</h1>
          </div>
          <div>
            <Link to="" style={{ textDecoration: 'none' }}>
              <More2 size="32" color="#FF8A65" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
