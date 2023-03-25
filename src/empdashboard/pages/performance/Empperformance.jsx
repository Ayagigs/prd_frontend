import Side from "../../components/sidebar/Side";
import Navbar from "../../components/navbar/Navbar";
import "./empperformance.scss";
// import Widget from "../../components/widget/Widget";
// import Chart from "../../components/chart/Chart";
import Performancetable from "../../components/performancetable/Performancetable";
import Performancewidget from "../../components/widget/Performancewidget";

const Empperformance = () => {
    return (
      <div className="emphome">
        <Side />
        <div className="emphomeContainer">
          <Navbar />
          <div className="widgets">
          <Performancewidget/>
          
        </div>
        <div className="empperformanceContainer">
          <div className="perftitle">Employee Performance</div>
          <Performancetable />
        </div>
        </div>
      </div>
    );
  };
  
  export default Empperformance;
  

