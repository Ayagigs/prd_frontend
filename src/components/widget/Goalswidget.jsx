import "./goalswidget.scss";
import LinearDeterminate from './linear';
import { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie"

const Goalswidget = () => {
    const [completed, setCompleted] = useState(0)
    const [inProgress, setInProgress] = useState(0)
    const [overdue, setOverdue] = useState(0)
    const [total, setTotal] = useState(1)
    const [totalLength, setTotalLength] = useState(0)

    const url = `https://pms-jq9o.onrender.com/api/v1/goal/employeegoals/${Cookies.get('companyID')}`
    useEffect(() => {
      axios.get(url, {headers: {Authorization: `Bearer ${Cookies.get('EmpToken')}`}})
      .then(res => {
        setCompleted(res.data.data.filter((el) => el.status === 'Completed').length)
        setInProgress(res.data.data.filter((el) => el.status === 'In Progress').length)
        setOverdue(res.data.data.filter((el) => el.status === 'Overdue').length)
        setTotalLength(res.data.data.length)
        setTotal(res.data.data.length === 0 ? 1 : res.data.data.length)
      })
    }, []);


  return (
    <div className="goalswidget">
        <div className="goalsnumber">
            <div className="">
            <h1 className="no">{totalLength.toString()}</h1>
            <span className="sub">Goals in total</span>
                
        </div>
      
       </div>
        <div className="widget">
            <div className="left">
                <span className="title">Completed</span>
        
            <div sx={{ width: '100%' }}><LinearDeterminate  value={(completed/total)*100}/></div>
            <span className="link"></span>
        </div>
      <div className="right">
            <div className="percentage positive">
            <h1>{completed}/{totalLength} Completed ({(completed/total)*100}%)</h1>
                </div>
            </div>
       </div>
       <div className="widget">
            <div className="left">
                <span className="title">In Progress</span>
        
            <div sx={{ width: '100%' }}><LinearDeterminate  value={(inProgress/total)*100}/></div>
            <span className="link"></span>
        </div>
      <div className="right">
            <div className="percentage positive">
            <h1>{inProgress}/{totalLength} In Progress ({(inProgress/total)*100}%)</h1>
                </div>
            </div>
       </div>
       <div className="widget">
            <div className="left">
                <span className="title">Overdue</span>
        
            <div sx={{ width: '100%' }}><LinearDeterminate  value={(overdue/total)*100}/></div>
            <span className="link"></span>
        </div>
      <div className="right">
            <div className="percentage positive">
            <h1>{overdue}/{totalLength} Overdue ({(overdue/total)*100}%)</h1>
                </div>
            </div>
       </div>
    </div>
  )
}

export default Goalswidget