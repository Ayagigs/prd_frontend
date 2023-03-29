import Navbar from "../../components/navbar/Navbar";
import "./homeperf.scss";
import Empwidget from "../../components/widget/Empwidget";
import Empfeatured from "../../components/featured/Empfeatured";
import Perfrev from "../../components/perfrev/Perfrev";
import Profiletab from "../../components/profiletab/Profiletab";
import Side from "../../components/sidebar/Side";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import Cookies from "js-cookie";
// import { Carousel } from '@trendyol-js/react-carousel';


const Homeperf = () => {
  const [data, setData] = useState({})

  useEffect(() => {
    const url = `https://pms-jq9o.onrender.com/api/v1/review/performanceReview`
    axios.get(url, {headers: {Authorization: `Bearer ${Cookies.get('EmpToken')}`}})
    .then(res => {
      console.log(res.data)
      setData(res.data)
    })
  }, [])
  return (
    <div className="emphome">
      <Side />
      <div className="emphomeContainer">
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
          <div className="undoappraisaltoo">
          <h1>360 Appraisal</h1>
          </div>
          </Link>

          <Link to="/emp-dashboard/goalreview" style={{ textDecoration: "none" }}>
          <div className="goalreviewundo">
          <h1>Self Appraisal</h1>
          </div>
          </Link>

          <Link to="/emp-dashboard/performancereview" style={{ textDecoration: "none" }}>
          <div className="perfreview">
          <h1>Performance Review</h1>
          </div>
          </Link>

          </div>
          <br />
          
        
        </div>
        <div className="viewtab">
     
            <Profiletab  data = {data}/>
          
         </div>
        
      </div>
    </div>
  );
};

export default Homeperf;
