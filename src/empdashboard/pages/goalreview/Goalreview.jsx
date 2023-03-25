import Navbar from "../../components/navbar/Navbar";
import "./goalreview.scss";
import Empwidget from "../../components/widget/Empwidget";
import Empfeatured from "../../components/featured/Empfeatured";
import Perfrev from "../../components/perfrev/Perfrev";
import Profiletab from "../../components/profiletab/Profiletab";
import Side from "../../components/sidebar/Side";
import { Link } from "react-router-dom";


const Goalreview = () => {
  return (
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
          <h1>Goal Review</h1>
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
            <Profiletab  />
         </div>
        
      </div>
    </div>
  );
};

export default Goalreview;
