import Side from "../../components/sidebar/Side";
import Navbar from "../../components/navbar/Navbar";
import { Link } from "react-router-dom";
import "./addgoal.scss";
import Goalstable from "../../components/goalstable/Goalstable";
import Goalswidget from "../../components/widget/Goalswidget";


const Addgoal = () => {
  return (
    <div className="emphome"> 
      <Side />
      <div className="emphomeContainer">
        <Navbar />
        <div className="empgoalcontainer">
        <div className="addgoalbox">
          <h1> Goals </h1>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Addgoal