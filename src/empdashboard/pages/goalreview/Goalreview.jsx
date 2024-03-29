import Navbar from "../../components/navbar/Navbar";
import "./goalreview.scss";
import Empwidget from "../../components/widget/Empwidget";
import Empfeatured from "../../components/featured/Empfeatured";
import Perfrev from "../../components/perfrev/Perfrev";
// import Profiletab from "../../components/profiletab/Profiletab";
import Side from "../../components/sidebar/Side";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import Appraisal from "../appraisalform/Appraisal";


const Goalreview = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [jobTitle, setJobTitle] = useState('')
  const [profile, setProfile] = useState('')
  const [dataExists, setDataExists] = useState(false)
  const [due, setDue] = useState('')
  const [modal, setModal] = useState(false)

  useEffect(() => {
    const url = `https://pms-jq9o.onrender.com/api/v1/review/selfappraisal`
    axios.get(url, {headers: {Authorization: `Bearer ${Cookies.get('EmpToken')}`}})
    .then(res => {
      console.log(res.data)
      if(res.data.message === 'It is not yet time for 360 appraisal'){
        return setDataExists(false)
      }
      setDataExists(true)
      setFirstName(res.data.data.firstName)
      setLastName(res.data.data.lastName)
      setJobTitle(res.data.data.jobTitle)
      setProfile(res.data.data.profilePhoto)
      setDue(res.data.due)
    })

  }, [])
  

  return <>
    <div className="emphome">
      <Side />
      <div className="goalreviewContainer">
        <Navbar />
        <div className="empwidgets">
          <Empwidget />
      
        </div>
        <div className="empmiddlecont">
          <Empfeatured />
          <Perfrev />
        </div>
        <div className="emplistContainer">
          <div className="tabs">
          <Link to="/emp-dashboard/appraisal" style={{ textDecoration: "none" }}>
          <div className="appraisal-undo">
          <h1>360 Appraisal</h1>
          </div>
          </Link>

          <Link to="/emp-dashboard/goalreview" style={{ textDecoration: "none" }}>
          <div className="goalreview">
          <h1>Self Appraisal</h1>
          </div>
          </Link>

          {
            Cookies.get('Role') === 'Performance Manager' ? 
          <Link to="/emp-dashboard/performancereview" style={{ textDecoration: "none" }}>
          <div className="undoperfreview">
          <h1>Performance Review</h1>
          </div>
          </Link>
          :
          undefined
          }

          <Link to="/emp-dashboard/maingoalreview" style={{ textDecoration: "none" }}>
          <div className="undomaingoalreview">
          <h1>Goal Review</h1>
          </div>
          </Link>

          </div>
          <br />
          
        
        </div>
        <div className="viewtabs">
        <Link  style={{ textDecoration: "none" }}>
       <div className={dataExists ? 'appraisalproftab' : 'hide'} onClick={() => setModal(true)}>
      <img 
      className="profimg"
      src={profile}
      alt='profilepicture'
      />
     
      <div className="profdetails">
        <p className="duedate">{due ? new Date(due).toDateString() : '---'}</p>
        <h1 className="emp">{firstName + " " + lastName} </h1>
        <p className="post">{jobTitle ? jobTitle : '---'}</p>
      </div>   
      </div>
      </Link> 
         </div>
        
      </div>
    </div>

    <p className={modal ? "closePModal" : "hide"} onClick={() => setModal(false)}>x</p>
    {
      modal ? <Appraisal profile={profile} firstName={firstName} lastName={lastName} jobTitle ={jobTitle} due={due ? new Date(due).toDateString() : '---'}/> : undefined
    }
  </>;
};

export default Goalreview;
