import React from 'react'
import Sidenav from './sideBar'
import Navbar from './navBar'
import { BsArrowUp, BsArrowDown, BsChevronDown, BsCheckCircle } from 'react-icons/bs'
import christian from '../images/christian.png'
import girlfirstrow from '../images/girlfirstrow.png'
import yellowbg from '../images/yellowbg.png'
import plusiconbg from '../images/plus-icon.png'
import plusicon from '../images/Vector.png'
import secondrowgirl from '../images/2ndrowgirl.png'
import thirdrowman from '../images/3rdrowman.png'
import fourthrowman from '../images/4throwfirst.png'
import fourthrowman1 from '../images/4throwsecond.png'
import fifthrowman from '../images/5throwman.png'
import seventhrowman from '../images/7throwman.png'
import seventhrowwoman from '../images/7throw-woman.png'
import eighthrowman from '../images/8throwman.png'


const goals = () =>{
    return(
        <div className='App'>
            <Navbar/>
            <div className='page'>
                <Sidenav />
                <div className='content'>
                    <div className='content-header-one'>
                        <div className='header-box first-box'>
                            <h1>24</h1>
                            <p>Goals in total</p>
                        </div>
                        <div className='header-box'>
                            <h2>Completed</h2>
                            <div className='progressbarCont'><p className='progressBar completed'></p></div>
                            <p>10/24 Completed (42%)</p>
                        </div>
                        <div className='header-box'>
                            <h2>Goals</h2>
                            <div className='progressbarCont'><p className='progressBar'></p></div>
                            <p>4/24 in progress(16%)</p>
                        </div>
                        <div className='header-box'>
                            <h2>Goals</h2>
                            <div className='progressbarCont'><p className='progressBar overdue'></p></div>
                            <p>10/24 Overdue (42%)</p>
                        </div>
                    </div>
                    <div className='classGrid'>
                        <div className='homepageGrid-header'>
                            <h2>Goals</h2>
                            <div className='homeselect'>
                                <h2>All <BsChevronDown  className='arrowDown' /></h2>
                                <p><BsArrowUp className='absolute'/><BsArrowDown/>Sort</p>
                                <button> + Add Goal</button>
                            </div>
                        </div>
                        <div className='goalsGrid'>
                            <div className='goals-grid-header'>
                                <h2>Goal Title</h2>
                                <h2>Category</h2>
                                <h2>Start Date</h2>
                                <h2>End Date</h2>
                                <h2>Reviewer</h2>
                            </div>
                            <div className='goals-grid-content'>
                                <div className='goalTitle'>
                                    <p><BsCheckCircle /> Foster and grow a new or existing relationship</p>
                                    <p><BsCheckCircle /> Foster and grow a new or existing relationship</p>
                                    <p><BsCheckCircle /> Foster and grow a new or existing relationship</p>
                                    <p><BsCheckCircle /> Foster and grow a new or existing relationship</p>
                                    <p><BsCheckCircle /> Foster and grow a new or existing relationship</p>
                                    <p><BsCheckCircle /> Foster and grow a new or existing relationship</p>
                                    <p><BsCheckCircle /> Foster and grow a new or existing relationship</p>
                                    <p><BsCheckCircle /> Foster and grow a new or existing relationship</p>
                                </div>
                                <div className='goalTitle'>
                                    <p>Access Management</p>
                                    <p>App Integration</p>
                                    <p>App Testing</p>
                                    <p>Business Process Management</p>
                                    <p>Case Management</p>
                                    <p>Case Management</p>
                                    <p>Case Management</p>
                                    <p>Case Management</p>
                                </div>
                                <div className='goalTitle'>
                                    <p>03 Aug 2020</p>
                                    <p>06 Jun 2020</p>
                                    <p>14 Sep 2020</p>
                                    <p>02 Nov 2020</p>
                                    <p>14 Sep 2020</p>
                                    <p>14 Sep 2020</p>
                                    <p>14 Sep 2020</p>
                                    <p>14 Sep 2020</p>
                                </div>
                                <div className='goalTitle'>
                                    <p>1 Jan 2022</p>
                                    <p>4 Apr 2022</p>
                                    <p>11 Nov 2022</p>
                                    <p>3 Mar 2022</p>
                                    <p>3 Mar 2022</p>
                                    <p>3 Mar 2022</p>
                                    <p>1 Jan 2022</p>
                                    <p>1 Jan 2022</p>
                                </div>
                                <div className='goalReviews'>
                                    <div><img src={christian}/><img src={girlfirstrow}/><img src={yellowbg}/><div className='plus-icon'><img src={plusiconbg}/><img className='plus-vector'src={plusicon}/></div></div>
                                    <div><img src={christian}/><img src={secondrowgirl}/><img src={yellowbg}/><div className='plus-icon'><img src={plusiconbg}/><img className='plus-vector'src={plusicon}/></div></div>
                                    <div><img src={thirdrowman}/><img src={yellowbg}/><div className='plus-icon'><img src={plusiconbg}/><img className='plus-vector'src={plusicon}/></div></div>
                                    <div><img src={fourthrowman}/><img src={fourthrowman1}/><div className='plus-icon'><img src={plusiconbg}/><img className='plus-vector'src={plusicon}/></div></div>
                                    <div><img src={fifthrowman}/><img src={yellowbg}/><div className='plus-icon'><img src={plusiconbg}/><img className='plus-vector'src={plusicon}/></div></div>
                                    <div><img src={christian}/><img src={girlfirstrow}/><div className='plus-icon'><img src={plusiconbg}/><img className='plus-vector'src={plusicon}/></div></div>
                                    <div><img src={seventhrowman}/><img src={seventhrowwoman}/><img src={yellowbg}/><div className='plus-icon'><img src={plusiconbg}/><img className='plus-vector'src={plusicon}/></div></div>
                                    <div><img src={eighthrowman}/><img src={girlfirstrow}/><img src={yellowbg}/><div className='plus-icon'><img src={plusiconbg}/><img className='plus-vector'src={plusicon}/></div></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default goals