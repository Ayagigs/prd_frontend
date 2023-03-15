import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { Link } from "react-router-dom";
import "./goals.scss";
import Goalstable from "../../components/goalstable/Goalstable";
import Goalswidget from "../../components/widget/Goalswidget";

const Goals = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Goalswidget/>
        </div>
        <div className="goalcontainer">
        <div className="goaltitle">Goals</div>
        <Link to="/employee/new" className="addgoal">
          Add Goals
        </Link>
          <Goalstable/>
        </div>
      </div>
    </div>
  );
};

export default Goals;
