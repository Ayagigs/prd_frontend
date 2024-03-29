import React from 'react';
import './profiletab.scss';
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom';
// import { Carousel } from '@trendyol-js/react-carousel';
import Appraisal360 from '../../pages/appriasal360/Appraisal360';
// import { Item } from './yourItem';
import { useState, useEffect } from 'react';
import Goalreviewapp from '../../pages/goalreviewapp/Goalreviewapp';
import PerformanceReview from '../../pages/PerformanceReview/performanceReview';
import Cookies from 'js-cookie';

const Profiletab = ({ data, reviewType }) => {
  const [rows, setRows] = useState([]);
  const [due, setDue] = useState('');
  const [modal, setModal] = useState(false)
  const [goalId, setGoalId] = useState(false)
  const [details, setDetails] = useState({})

  const role = Cookies.get('Role')

  useEffect(() => {
    setRows([]);

    if (data.data !== undefined) {
      
      if(reviewType === 'Goal Review'){
        console.log(data.data)
        if(role == 'Performance Manager'){
          return setRows(data.data.filter((el) => el.owner.role !== 'Performance Manager'))
        }else if(role == 'HR Manager'){
          return setRows(data.data.filter((el) => el.owner.role !== 'HR Manager'))
        }
        return setRows(data.data)
      }
      setRows(data.data.employeeNotReviewed);
      setDue(data.data.due);
    }
  }, [data]);
  
  const handleClick = (data) => {
    setDetails(data)
    setGoalId(data._id)
    setModal(true)
  }

  const close = () => {
    setModal(false)
    setTimeout(() => [
      window.location.reload()
    ], 1000)
  }

  return<>
      <div className="proftabsScroll">
        <div className="tabb">
          {rows?.map(el => {
            return (
              <Link style={{ textDecoration: 'none' }}>
                {reviewType === 'Goal Review' ? (
                  <div className="proftabs" onClick={() => handleClick(el)}>
                    <img
                      className="profimg"
                      src={el.owner.profilePhoto}
                      alt="profilepicture"
                    />

                    <div className="profdetails">
                      <p className="duedate">{'---'}</p>
                      <h1 className="emp">
                        {el.owner.firstName + ' ' + el.owner.lastName}
                      </h1>
                      <p className="post"> Goal Title: &nbsp;
                        {el.goaltitle}
                      </p>
                    </div>
                    <div className="revbutton">
                      <button>Review Now</button>
                    </div>
                  </div>
                ) : (
                  <div className="proftabs" onClick={() => handleClick(el)}>
                    <img
                      className="profimg"
                      src={el.profilePhoto}
                      alt="profilepicture"
                    />

                    <div className="profdetails">
                      <p className="duedate">
                        {due ? new Date(due).toDateString() : '---'}
                      </p>
                      <h1 className="emp">
                        {el.firstName + ' ' + el.lastName}
                      </h1>
                      <p className="post">
                        {el.jobTitle ? el.jobTitle : '---'}
                      </p>
                    </div>
                    <div className="revbutton">
                      <button>Review Now</button>
                    </div>
                  </div>
                )}
              </Link>
            );
          })}
        </div>
      </div>

    <p className={modal ? "closePModal" : "hide"} onClick={() => close()}>x</p>
    {
      modal ? 
      reviewType === '360 Appraisal' ? <Appraisal360 profile={details.profilePhoto} firstName={details.firstName} lastName={details.lastName} jobTitle ={details.jobTitle} due={due} id={details._id}/> : 
      reviewType === 'Goal Review' ? <Goalreviewapp profile={details.owner.profilePhoto} firstName={details.owner.firstName} lastName={details.owner.lastName} jobTitle ={details.owner.jobTitle} id={goalId} goal={details}/> :  reviewType === 'Performance Review' ? <PerformanceReview profile={details.profilePhoto} firstName={details.firstName} lastName={details.lastName} jobTitle ={details.jobTitle} id={details._id}/>  : undefined
    : undefined}
  </>;
};

export default Profiletab;
