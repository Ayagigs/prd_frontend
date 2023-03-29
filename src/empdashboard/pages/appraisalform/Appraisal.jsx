import React from 'react'
import "./appraisal.scss";
import Navbar from "../../components/navbar/Navbar";
import Side from "../../components/sidebar/Side";
import { Link } from "react-router-dom";



const Appraisal = () => {
  return (
    <div className='appraisalhome'>
         <Side />
         <div className="appraisalcontainer">
        <Navbar />
        <div className="appraisalbox">
          <div className="apptopbox">
            <h1>Self Appraisal</h1>
            <button className='closeform-btn'>
              <Link to="/emp-dashboard/goalreview" style={{ textDecoration: "none" }}>
                X
              </Link>
            </button>
          </div>
            <hr />
          <div className='appraisalprofile'>
            <div className='appraisalproftab'>
              <img 
               className="profimg"
              src="https://m.media-amazon.com/images/I/71kr3WAj1FL._AC_UY327_FMwebp_QL65_.jpg"
              alt='profilepicture'
              />
     
      <div className="profdetails">
            <h1 className="emp"> Frank Cortage</h1>
            <p className="post"> Senior System Analyst</p>
            <p className="appduedate"> Due: Feb 2023 </p>
            <br />
            
      </div>
   
        </div>
   
          </div>
          <p className='bodytext'>This form will assist in preparing the performance evaluation for Frank Cortage. 
            As someone who works with Bob on a regular basis, your feedback regarding his 
            performance will be useful to the overall review process.
          </p>

          <div className="singleform">
            <div className='firstline'></div>
            <label className='form-question'>
                Motivates the team consistently?
            </label>
              <span className='check'>Strongly disagree</span>
              <input type="checkbox" onChange={() => {}} />  
              <span className='check'>Disagree</span>
              <input type="checkbox" onChange={() => {}} />  
              <span className='check'>Neutral</span>
              <input type="checkbox" onChange={() => {}} />  
              <span className='check'>Agree</span>
              <input type="checkbox" onChange={() => {}} />  
              <span className='check'>Strongly Agree</span>
              <input type="checkbox" onChange={() => {}} />  
            <br />

            <div className='firstline'></div>
            <label className='form-question'>
                Motivates the team consistently?
            </label>
              <span className='check'>Strongly disagree</span>
              <input type="checkbox" onChange={() => {}} />  
              <span className='check'>Disagree</span>
              <input type="checkbox" onChange={() => {}} />  
              <span className='check'>Neutral</span>
              <input type="checkbox" onChange={() => {}} />  
              <span className='check'>Agree</span>
              <input type="checkbox" onChange={() => {}} />  
              <span className='check'>Strongly Agree</span>
              <input type="checkbox" onChange={() => {}} />  
            <br />

            <div className='firstline'></div>
            <label className='form-question'>
                Motivates the team consistently?
            </label>
              <span className='check'>Strongly disagree</span>
              <input type="checkbox" onChange={() => {}} />  
              <span className='check'>Disagree</span>
              <input type="checkbox" onChange={() => {}} />  
              <span className='check'>Neutral</span>
              <input type="checkbox" onChange={() => {}} />  
              <span className='check'>Agree</span>
              <input type="checkbox" onChange={() => {}} />  
              <span className='check'>Strongly Agree</span>
              <input type="checkbox" onChange={() => {}} />  
            <br />

            <div className='firstline'></div>
            <label className='form-question'>
                Motivates the team consistently?
            </label>
              <span className='check'>Strongly disagree</span>
              <input type="checkbox" onChange={() => {}} />  
              <span className='check'>Disagree</span>
              <input type="checkbox" onChange={() => {}} />  
              <span className='check'>Neutral</span>
              <input type="checkbox" onChange={() => {}} />  
              <span className='check'>Agree</span>
              <input type="checkbox" onChange={() => {}} />  
              <span className='check'>Strongly Agree</span>
              <input type="checkbox" onChange={() => {}} />  
            <br />
           </div>

        </div>
        <button className="submitbtn">Submit Appraisal</button>
        
      </div>
    </div>
  )
}

export default Appraisal