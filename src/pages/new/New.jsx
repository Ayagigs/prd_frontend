import "./new.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
// import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";
import { Profile2User } from 'iconsax-react';
import { Profile } from 'iconsax-react';


import { Link } from "react-router-dom";

const New = ({ inputs, title }) => {
  const [file, setFile] = useState("");

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="addbywrapper">
        <div className="addby">
        <div className="topcontain">
          <Link to="/employee/trial" style={{ textDecoration: "none" }}>
          <button className="close-btn">X</button>
          </Link>
          <h1>Add Employee</h1>
          <p>Upload your employee detail using any of the methods provided</p>
        </div>
        <div className="middlecont">
          <Link to="/employee/trial/new/bulk" style={{ textDecoration: "none" }}>
            <li className="bulkadd">
            <Profile2User className='icona' size="32" color="#030BC3"/>
            <div className='wrapword'>
              <h2 className="addtitle">Bulk Add</h2>
              <span className="addsub">Add multiple employees at once</span>
              </div>
            </li>
          </Link>
          <Link to="/employee/trial/new/singleadd" style={{ textDecoration: "none" }}>
            <li className="singleadd">
            <Profile size="32" color="#030BC3"/>
              <div className='wrapword2'>
              <h2 className="addtitle">Single Add</h2>
              <span className="addsub">Add one employee at a time</span>
              </div>
            </li>
          </Link>   
        </div>
        <div className="downcont">
        <div className='newbuttons'>
        <Link to="/employee/trial" style={{ textDecoration: "none" }}>
          <button className='cancelbtn'>Cancel</button>
        </Link> 
          <button className='addempbtn' >Add Employee</button>
        </div>
        </div>
        </div>
        </div>
       </div>
    </div>
  );
};

export default New;
