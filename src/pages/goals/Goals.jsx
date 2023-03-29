import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
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
        <div className="goalstablecont">
          <div className="goaltablebox">
            <h1 className="goalstitlebox">Goals</h1>
            <Goalstable/>
          </div>

          
        </div>
      </div>
    </div>
  );
};

export default Goals;
