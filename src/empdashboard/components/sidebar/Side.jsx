import './side.scss';
import React from 'react';
import { Home } from 'iconsax-react';
import { Cup } from 'iconsax-react';
import { Chart1 } from 'iconsax-react';
import { Setting2 } from 'iconsax-react';
import { EmptyWallet } from 'iconsax-react';
import { Logout } from 'iconsax-react';
import { Link } from 'react-router-dom';
// import { DarkModeContext } from "../../context/darkModeContext";
// import { useContext } from "react";
import Swal from 'sweetalert2';
import Logo from './logo.png';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Avatar } from '@mantine/core';

const Side = () => {
  const [data, setData] = useState({});
  const [profile, setProfile] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const url = `https://pms-jq9o.onrender.com/api/v1/employee/findme`;
    axios
      .get(url, {
        headers: { Authorization: `Bearer ${Cookies.get('EmpToken')}` },
      })
      .then(res => {
        setData(res.data.data);
        setProfile(res.data.data.adminUser.profilePhoto);
      });
  }, []);

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
        Cookies.remove('EmpToken');
        Cookies.remove('empCompanyID');
        Cookies.remove('Role');
        navigate('/');
      }
    });
  };
  // const { dispatch } = useContext(DarkModeContext);
  return (
    <div className="side">
      <div className="sidebartop">
        <div className="top">
          <img width="100px" src={Logo} alt="view logo" />
        </div>
        <hr />
        <div className="sidecenter">
          <ul>
            <li>
              <Link to="/emp-dashboard" style={{ textDecoration: 'none' }}>
                <Home className="icon" variant="Outline" />
                <span className="logo"></span>
                <span>Home</span>
              </Link>
            </li>

            <Link to="/empgoals" style={{ textDecoration: 'none' }}>
              <li>
                <Cup className="icon" />
                <span>Goals</span>
              </li>
            </Link>
            <Link to="/empperformance" style={{ textDecoration: 'none' }}>
              <li>
                <Chart1 className="icon" />
                <span>Performance</span>
              </li>
            </Link>
            <Link to="/empsettings" style={{ textDecoration: 'none' }}>
              <li>
                <Setting2 className="icon" />
                <span>Settings</span>
              </li>
            </Link>
            <Link to="/empwallet" style={{ textDecoration: 'none' }}>
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
      <div className="sidebottom">
        <div className="usercontainer">
          <div className="settingsImgWrap">
            <Avatar
              src={profile}
              alt={'ga'}
              color="blue"
              radius={100}
              size={55}
            ></Avatar>
          </div>
          <div className="namecontainer">
            {/* <span className="realname">
              {data.firstName + ' ' + data.lastName}
            </span> */}
            <h1 className="userrole">{data.role}</h1>
          </div>
          <div>
            <Link to="" style={{ textDecoration: 'none' }}>
              <MoreVertIcon fontSize="large" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Side;
