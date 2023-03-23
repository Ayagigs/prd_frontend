import React from 'react'
import "./bulk.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { DocumentUpload } from 'iconsax-react';
import { Link } from "react-router-dom";
import { useState } from "react";


const Bulk = ({ inputs, title }) => {

    const [file, setFile] = useState("");

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
          <button className='addempbtn' >Add Employee</button>
        </div>
        
        </div>
    </div>
    </div>
  )
}

export default Bulk