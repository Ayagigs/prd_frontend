import "./widget.scss";
// import Box from '@mui/material/Box';
import { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie"
import LinearDeterminate from './linear';


const Widget = () => {
  
  const [completed, setCompleted] = useState(0)
  const [total, setTotal] = useState(1)
  const [prBar, setPrBar] = useState({got: 0, total: 0})
  const [appraisalBar, setAppraisalBar] = useState({got: 0, total: 0})
  const [selfAppraised, setSelfAppraised] = useState({got: 0, total: 0})

  useEffect(() => {
      const url = `https://pms-jq9o.onrender.com/api/v1/goal/employeegoals/${Cookies.get('companyID')}`
      axios.get(url, {headers: {Authorization: `Bearer ${Cookies.get('Token')}`}})
      .then(res => {
        setCompleted(res.data.data.filter((el) => el.status === 'Completed').length)
        setTotal(res.data.data.length === 0 ? 1 : res.data.data.length)
      })

      const url2 = `https://pms-jq9o.onrender.com/api/v1/review/performancereviewbar`

        axios.get(url2, {headers: {Authorization: `Bearer ${Cookies.get('Token')}`}})
        .then(res => {
            console.log(res.data.data)
            setPrBar({...prBar, got: res.data.data.got})
            setPrBar({...prBar, total: res.data.data.expected})
        })

        const url3 = `https://pms-jq9o.onrender.com/api/v1/review/appraisalbar`

        axios.get(url3, {headers: {Authorization: `Bearer ${Cookies.get('Token')}`}})
        .then(res => {
            console.log(res.data.data)
            setAppraisalBar({...appraisalBar, got: res.data.data.got})
            setAppraisalBar({...appraisalBar, total: res.data.data.expected})
        })

        const url4 = `https://pms-jq9o.onrender.com/api/v1/review/selfappraisalbar`

        axios.get(url4, {headers: {Authorization: `Bearer ${Cookies.get('Token')}`}})
        .then(res => {
            console.log(res.data.data)
            setSelfAppraised({...selfAppraised, got: res.data.data.got})
            setSelfAppraised({...selfAppraised, total: res.data.data.expected})
            console.log(res)
        })
    }, []);
  // let data;

  //temporary
  // const amount = '';
  // const diff = '';

  // switch (type) {
  //   case "Goals":
  //     data = {
  //       title: "Goals",
  //       isMoney: false,
  //     };
  //     break;
  //   case "MyReviews":
  //     data = {
  //       title: "Performance Reviews",
  //       isMoney: false,
  //     };
  //     break;
  //   case "360Appraisals":
  //     data = {
  //       title: "360 Appraisals",
  //       isMoney: false,
  //             };
  //     break;
  //   case "SelfPerformanceReview":
  //     data = {
  //       title: "Self Appraisals",
  //       isMoney: false,
  //     };
  //     break;
  //   default:
  //     break;
  // }

  return <>
    <div className="widgetbox">
      <div className="left">
        <span className="title">Goals</span>
        
        <div sx={{ width: '100%' }}><LinearDeterminate  value={(completed / total) * 100}/></div>
      </div>
      <div className="right">
        <div className="percentage positive">
        <h1>{(completed/total) * 100}% Completed</h1>
        </div>
        {/* {data.icon} */}
      </div>
    </div>
    <div className="widgetbox">
      <div className="left">
        <span className="title">Performance Review</span>
        
        <div sx={{ width: '100%' }}><LinearDeterminate   value={(prBar.got / (prBar.total == 0 ? 1 : prBar.total)) * 100}/></div>
      </div>
      <div className="right">
        <div className="percentage positive">
        <h1>{(prBar.got / (prBar.total == 0 ? 1 : prBar.total)) * 100}% Completed</h1>
        </div>
        {/* {data.icon} */}
      </div>
    </div>
    <div className="widgetbox">
      <div className="left">
        <span className="title">360 Appraisal</span>
        
        <div sx={{ width: '100%' }}><LinearDeterminate  value={(appraisalBar.got / (appraisalBar.total == 0 ? 1 : appraisalBar.total)) * 100} /></div>
      </div>
      <div className="right">
        <div className="percentage positive">
        <h1>{(appraisalBar.got / (appraisalBar.total == 0 ? 1 : appraisalBar.total)) * 100}% Completed</h1>
        </div>
        {/* {data.icon} */}
      </div>
    </div>
    <div className="widgetbox">
      <div className="left">
        <span className="title">Self Appraisal</span>
        
        <div sx={{ width: '100%' }}><LinearDeterminate   value={(selfAppraised.got / (selfAppraised.total == 0 ? 1 : selfAppraised.total)) * 100}/></div>
      </div>
      <div className="right">
        <div className="percentage positive">
        <h1>{(selfAppraised.got / (selfAppraised.total == 0 ? 1 : selfAppraised.total)) * 100}% Completed</h1>
        </div>
        {/* {data.icon} */}
      </div>
    </div>
  </>
};

export default Widget;
