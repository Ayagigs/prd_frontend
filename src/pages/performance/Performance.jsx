import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./performance.scss";
// import Widget from "../../components/widget/Widget";
// import Chart from "../../components/chart/Chart";
import Performancetable from "../../components/performancetable/Performancetable";
import Performancewidget from "../../components/widget/Performancewidget";

const Performance = () => {
    return (
      <div className="home">
        <Sidebar />
        <div className="homeContainer">
          <Navbar />
          <div className="widgets">
          <Performancewidget/>
          
        </div>
        <div className="listContainer">
          <div className="employeeTitle">Employee Performance</div>
          <Performancetable />
        </div>
        </div>
      </div>
    );
  };
  
  export default Performance;
  

