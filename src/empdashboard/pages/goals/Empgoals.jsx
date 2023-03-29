import Side from "../../components/sidebar/Side";
import Navbar from "../../components/navbar/Navbar";
import { Link } from "react-router-dom";
import "./empgoals.scss";
import Goalstable from "../../components/goalstable/Goalstable";
import Goalswidget from "../../components/widget/Goalswidget";

const Empgoals = () => {
  return (
    <div className="emphome"> 
      <Side />
      <div className="emphomeContainer">
        <Navbar />
        <div className="widgets">
          <Goalswidget/>
        </div>
        <div className="empgoalcontainer">
        <div className="goaltitlebox">
          <h1> Goals </h1>
          
          <div className="sidetitle">
          <h1 className="pick">All 
              <select className='select'>
                  <option value="select"></option>
              </select>
          </h1>
          <h1 className="pick">Sort 
              <select className='select'>
                  <option value="select"></option>
              </select>
          </h1>
        

        <Link to="/empgoals/addgoal" className="">
          <button className="addgoalbtn"> Add Goals </button>
        </Link>
          </div>
        </div>
        <div className="goaltable">
        <Goalstable/>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Empgoals;
