import React from 'react'
import "./bulk.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { DocumentUpload } from 'iconsax-react';
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie"
import { toast } from 'react-toastify';


const Bulk = ({ inputs, title }) => {

    const [file, setFile] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async event => {
      try {
        setIsLoading(true);

        
        const formdata = new FormData()
        formdata.append("file", file)
  
        const res = await axios.post(
          `https://pms-jq9o.onrender.com/api/v1/employee/csvupload/${Cookies.get('companyID')}`,
          formdata,
          {headers: {Authorization: `Bearer ${Cookies.get('Token')}`}}
        );
        setIsLoading(false);
        toast.success('Email has been sent to all employees');
        setFile('')
        //   setPopup(true);
      } catch (error) {
        setIsLoading(false);
        toast.error(error.response.data.message);
      }
    };

  return (
    <div className='bulkaddcont'>
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className='bulkbox'>
        <Link to="/employee/trial/new" style={{ textDecoration: "none" }}>
        <button className="close-btn">X</button>
        </Link>
        <h1 className='bulktext'>Add Employee</h1>
        
        <div className='importcont'>
        <div className="import">
           <div className="formInput">
                <label htmlFor="file">
                <DocumentUpload size="52" color="#c1cbff"/>
                </label>
                <input
                  type="file"
                  id="file"
                  onChange={(e) => setFile(e.target.files[0])}
                  style={{ display: "none" }}
                />
            </div>

            <Link className='addfile'>Browse files</Link>
            <p>or</p>
            <br /> 
            <p>Drag and drop files</p>
          </div>
        </div>

        <div className='buttons'>
        <Link to="/employee/trial/new" style={{ textDecoration: "none" }}>
          <button className='cancelbtn'>Cancel</button>
        </Link>
        <Link to="/employee/trial/new/bulk/verifybulk" style={{ textDecoration: "none" }}>
          <button className='addempbtn' >Add Employee</button>
        </Link> 
        </div>
        
        </div>
    </div>
    </div>
  )
}

export default Bulk