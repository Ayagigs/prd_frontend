import "./featured.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie"
import { RingProgress} from '@mantine/core';
// import "./styles.css";
//   import DonutChart from "react-donut-chart";
  

const Featured = () => {
  const [completed, setCompleted] = useState(0)
  const [inProgress, setInProgress] = useState(0)
  const [overdue, setOverdue] = useState(0)
  const [total, setTotal] = useState(1)
  const [totalLength, setTotalLength] = useState(0)
  const [notStarted, setNotStarted] = useState(0)

  const url = `https://pms-jq9o.onrender.com/api/v1/goal/employeegoals/${Cookies.get('companyID')}`
    useEffect(() => {
      axios.get(url, {headers: {Authorization: `Bearer ${Cookies.get('EmpToken')}`}})
      .then(res => {
        setCompleted(res.data.data.filter((el) => el.status === 'Completed').length)
        setInProgress(res.data.data.filter((el) => el.status === 'In Progress').length)
        setOverdue(res.data.data.filter((el) => el.status === 'Overdue').length)
        setNotStarted(res.data.data.filter((el) => el.status === 'Not Started').length)
        setTotalLength(res.data.data.length)
        setTotal(res.data.data.length === 0 ? 1 : res.data.data.length)
      })
    }, []);
  
  // const reactDonutChartdata = [
  //   {
  //     label: "NDC",
  //     value: 25,
  //     color: "#00E396"
  //   },
  //   {
  //     label: "RDC",
  //     value: 65,
  //     color: "#FEB019"
  //   },
  //   {
  //     label: "STOCKIST",
  //     value: 100,
  //     color: "#FF4560"
  //   },
  //   {
  //     label: "HOSPITAL",
  //     value: 15,
  //     color: "#775DD0"
  //   }
  // ];
  // const reactDonutChartBackgroundColor = [
  //   "#00E396",
  //   "#FEB019",
  //   "#FF4560",
  //   "#775DD0"
  // ];
  // const reactDonutChartInnerRadius = 0.5;
  // const reactDonutChartSelectedOffset = 0.04;
  // const reactDonutChartHandleClick = (item, toggled) => {
  //   if (toggled) {
  //     console.log(item);
  //   }
  // };
  // let reactDonutChartStrokeColor = "#FFFFFF";
  // const reactDonutChartOnMouseEnter = (item) => {
  //   let color = reactDonutChartdata.find((q) => q.label === item.label).color;
  //   reactDonutChartStrokeColor = color;
  // };
  
  // export default function App() {
//  return (
//     <div className="App">
//       <DonutChart
//         width={500}
//         onMouseEnter={(item) => reactDonutChartOnMouseEnter(item)}
//         strokeColor={reactDonutChartStrokeColor}
//         data={reactDonutChartdata}
//         colors={reactDonutChartBackgroundColor}
//         innerRadius={reactDonutChartInnerRadius}
//         selectedOffset={reactDonutChartSelectedOffset}
//         onClick={(item, toggled) => reactDonutChartHandleClick(item, toggled)}
//       />
//     </div>
//   );
// }

  return (
    <div className="featured">
      <div className="top">
        <h1 className="title">Goal Metrics</h1>
        <MoreVertIcon fontSize="small" />
      </div>
      <div className="bottom">
        <div className="featuredChart">
        <RingProgress
          sections={[
            { value: (overdue/total)*100, color: 'red' },
            { value: (completed/total)*100, color: 'green' },
            { value: (inProgress/total)*100, color: 'blue' },
            { value: (notStarted/total)*100, color: 'rgb(216, 216, 216)' },
          ]}
          size={200}
          thickness={18}
        />

        
        </div>
        <div className="progressContents">
        <p className="overdue"><span className="overduering"></span> {(overdue/total)*100}% Overdue </p>
        <p className="completed"><span className="completedring"></span> {(completed/total)*100}% Completed </p>
        <p className="inprogress"><span className="inprogressring"></span> {(inProgress/total)*100}% In progress</p>
        <p className="notstarted"><span className="notstartedring"></span> {(notStarted/total)*100}% Not Started</p>
        </div>
      </div>
    </div>
  );
};

export default Featured;
