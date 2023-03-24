import "./featured.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie"
// import "./styles.css";
//   import DonutChart from "react-donut-chart";
  

const Featured = () => {
  console.log(Cookies.get('companyID'))


  
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

  const url = `https://pms-jq9o.onrender.com/api/v1/admin/findme`

  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDA5ZDM5YTk4ODYwNDUzY2EwNzg4MzEiLCJyb2xlIjoiQWRtaW4iLCJjb21wYW55TmFtZSI6IkF5YSBMaW1pdGVkIiwiaWF0IjoxNjc5NjY1NjE0LCJleHAiOjE2Nzk3NTIwMTR9.HmoXpE55bD9vb27OgQ_8S2yYV3Sxoq4_887LKfp7E70'
    
  useEffect(() => {
    axios.get(url, {headers: {Authorization: `Bearer ${token}`}})
    .then(res => {
      Cookies.set("companyID", res.data.data.adminUser._id)
    })
  }, []);

  return (
    <div className="featured">
      <div className="top">
        <h1 className="title">Goal Metrics</h1>
        <MoreVertIcon fontSize="small" />
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <CircularProgressbar value={70} text={"70%"} strokeWidth={5} />
        </div>
        <p className="overdue">25% Overdue</p>
        <p className="completed">25% Completed</p>
        <p className="inprogress">25% In progress</p>
        <p className="notstarted">25% Not Started</p>
      </div>
    </div>
  );
};

export default Featured;
