import "./empwidget.scss";
import LinearDeterminate from './linear';
import { Copy } from 'iconsax-react';
import { ArrangeHorizontal } from 'iconsax-react';
import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import axios from "axios";

const Empwidget = () => {
  const [completed, setCompleted] = useState(0)
  const [total, setTotal] = useState(0)
  const [prBar, setPrBar] = useState({got: 0, total: 0})

  useEffect(() => {
      const url = `https://pms-jq9o.onrender.com/api/v1/goal/goals`
      axios.get(url, {headers: {Authorization: `Bearer ${Cookies.get('EmpToken')}`}})
      .then(res => {
        setCompleted(res.data.data.filter((el) => el.status === 'Completed'))
        setTotal(res.data.data.length === 0 ? 1 : res.data.data.length)
      }).catch(err => {
        console.log(err)
      })


      const url2 = `https://pms-jq9o.onrender.com/api/v1/review/performancereviewbar`
      axios.get(url2, {headers: {Authorization: `Bearer ${Cookies.get('EmpToken')}`}})
      .then(res => {
          console.log(res.data.data)
          setPrBar({...prBar, got: res.data.data.got})
          setPrBar({...prBar, total: res.data.data.expected})
      }).catch(err => {
        console.log(err)
      })

    }, []);


  return (
    
    <div className="empwidgets"> 
        <div className="widget"> 
            <div className="left">
                <span className="title">Goals</span>
            <div sx={{ width: '100%' }}><LinearDeterminate value={(completed / (total === 0 ? 1 : total)) * 100} /></div>
            <span className="link"></span>
        </div>
      <div className="right">
            <div className="percentage positive">
              <h1 className="complete">{(completed / (total === 0 ? 1 : total)) * 100}% Completed </h1>
            </div>
            </div>
       </div>
       <div className="widget">
            <div className="left">
                <span className="title">Performance Review</span>
        
            <div sx={{ width: '100%' }}><LinearDeterminate value={(prBar.got /( prBar.total == 0 ? 1 : prBar.total)) * 100}/></div>
            <span className="link"></span>
        </div>
      <div className="right">
            <div className="percentage positive">
            <h1 className="complete">{(prBar.got / (prBar.total == 0 ? 1 : prBar.total)) * 100}% Completed</h1>
                </div>
            </div>
       </div>
       <div className="walletwidget">
          <div className="walletbal">
            <p className="amt"> $14,000.00</p>
            <p className="bal"> Wallet Balance</p>
          </div>
          <div className="walletactions">
            <div className="sendbutton">
            <ArrangeHorizontal size="32" color="#5157ed" />
              <p>Send</p>
            </div>
            <div className="recievebutton">
            <ArrangeHorizontal size="32" color="#5157ed" />
              <p>Recieve</p>
            </div>
            <div className="copybutton">
              <Copy  size="32" color="#5157ed"/>  
              <p>Copy</p>
            </div>
          </div>
      
       </div>
    </div>
  )
}

export default Empwidget