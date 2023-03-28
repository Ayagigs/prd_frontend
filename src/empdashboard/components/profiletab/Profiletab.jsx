import React from 'react'
import "./profiletab.scss";
import { Link } from "react-router-dom";
import ReactDOM from 'react-dom';
// import { Carousel } from '@trendyol-js/react-carousel';
// import { Item } from './yourItem';
import { useState, useEffect } from 'react';

const Profiletab = ({data}) => {
  const [rows, setRows] = useState([])
  const [due, setDue] = useState('')

  useEffect(() => {
    setRows([])
    if(data.data !== undefined){
      setRows(data.data)
      setDue(data.due)
    }
  }, [, data])

  return (
    <div className="proftabsScroll">

      <div className='tabb'>
      {
        rows.map((el) => {
          return(
            <Link to="/emp-dashboard/appraisal/appraisal360" style={{ textDecoration: "none" }}>
              <div className='proftabs'>
                <img 
                className="profimg"
                src={el.profilePhoto}
                alt='profilepicture'
                />
            
                <div className="profdetails">
                      <p className="duedate">{due ? new Date(due).toDateString() : '---'}</p>
                      <h1 className="emp">{el.firstName + ' ' + el.lastName}</h1>
                      <p className="post">{el.jobTitle ? el.jobTitle : '---'}</p>
                </div>
                <div className='revbutton'>
                    <button>
                    Review Now
                    </button>
                  </div>     
              </div>
            </Link> 
          )
        })
      }
        
      </div>
    </div>
  )
}

export default Profiletab