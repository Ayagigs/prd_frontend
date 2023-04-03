import "./performancewidget.scss";
import LinearDeterminate from './linear';
import axios from "axios";
import Cookies from "js-cookie";
import { useState, useEffect } from "react";

const Performancewidget = () => {
    const [rows, setRows] = useState()
    const [rating, setRating] = useState()
    const [prBar, setPrBar] = useState({got: 0, total: 0})
    const [appraisalBar, setAppraisalBar] = useState({got: 0, total: 0})
    const [selfAppraised, setSelfAppraised] = useState({got: 0, total: 0})

    useEffect(() => {
        const url = `https://pms-jq9o.onrender.com/api/v1/employee/findme`

        axios.get(url, {headers: {Authorization: `Bearer ${Cookies.get('Token')}`}})
        .then(res => {
            setRating(res.data.data.finalScore)
        })

        const url2 = `https://pms-jq9o.onrender.com/api/v1/review/performancereviewbar`

        axios.get(url2, {headers: {Authorization: `Bearer ${Cookies.get('Token')}`}})
        .then(res => {
            setPrBar({got: res.data.data.got, total: res.data.data.expected})
        })

        const url3 = `https://pms-jq9o.onrender.com/api/v1/review/appraisalbar`

        axios.get(url3, {headers: {Authorization: `Bearer ${Cookies.get('Token')}`}})
        .then(res => {
            setAppraisalBar({got: res.data.data.got, total: res.data.data.expected})
        })

        const url4 = `https://pms-jq9o.onrender.com/api/v1/review/selfappraisalbar`

        axios.get(url4, {headers: {Authorization: `Bearer ${Cookies.get('Token')}`}})
        .then(res => {
            setSelfAppraised({got: res.data.data.got, total: res.data.data.expected})
        })
    }, [])

  return (
    <div className="performancewidget">
        <div className="widget">
            <div className="left">
                <span className="title">PM Reviews</span>
        
            <div sx={{ width: '100%' }}><LinearDeterminate value={(prBar.got / (prBar.total == 0 ? 1 : prBar.total)) * 100}/></div>
            <span className="link"></span>
        </div>
      <div className="right">
            <div className="percentage positive">
            <h1>{prBar.got}/{prBar.total} Performance Review ({parseFloat(prBar.got / (prBar.total == 0 ? 1 : prBar.total)).toFixed(2) * 100}%)</h1>
                </div>
            </div>
       </div>
       <div className="widget">
            <div className="left">
                <span className="title">360 Appraisal</span>
        
            <div sx={{ width: '100%' }}><LinearDeterminate  value={parseFloat(appraisalBar.got / (appraisalBar.total == 0 ? 1 : appraisalBar.total)).toFixed(2) * 100}/></div>
            <span className="link"></span>
        </div>
      <div className="right">
            <div className="percentage positive">
            <h1>{appraisalBar.got}/{appraisalBar.total} 360 Appraisal ({parseFloat((appraisalBar.got / (appraisalBar.total == 0 ? 1 : appraisalBar.total))).toFixed(2) * 100} %)</h1>
                </div>
            </div>
       </div>
       <div className="widget">
            <div className="left">
                <span className="title">Self Appraisal</span>
        
            <div sx={{ width: '100%' }}><LinearDeterminate  value={parseFloat((selfAppraised.got / (selfAppraised.total == 0 ? 1 : selfAppraised.total))).toFixed(2) * 100}/></div>
            <span className="link"></span>
        </div>
      <div className="right">
            <div className="percentage positive">
            <h1>{selfAppraised.got}/{selfAppraised.total} Self Appraisal ({parseFloat(selfAppraised.got / (selfAppraised.total == 0 ? 1 : selfAppraised.total)).toFixed(2) * 100}%)</h1>
                </div>
            </div>
       </div>
    </div>
  )
}

export default Performancewidget