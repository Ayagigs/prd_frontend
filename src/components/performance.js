import React from 'react'
import Sidenav from './sideBar'
import Navbar from './navBar'
import { BsChevronRight} from 'react-icons/bs'
import christian from '../images/christian.png'
import amen from '../images/Amen.png'
import emmanuel from '../images/Emmanuel.png'
import somo from '../images/somo.png'
import oscar from '../images/oscar.png'

const employeePerformance = () =>{
    return(
        <div className='App'>
            <Navbar/>
            <div className='page'>
                <Sidenav />
                <div className='content'>
                    <div className='content-header-one'>
                        <div className='header-box first-box'>
                            <h1>4.0</h1>
                            <p>Ratings</p>
                        </div>
                        <div className='header-box'>
                            <h2>Performance Reviews</h2>
                            <div className='progressbarCont'><p className='progressBar completed'></p></div>
                            <p>10/24 Completed (42%)</p>
                        </div>
                        <div className='header-box'>
                            <h2>360 Appraisal</h2>
                            <div className='progressbarCont'><p className='progressBar'></p></div>
                            <p>4/24 in progress(16%)</p>
                        </div>
                        <div className='header-box'>
                            <h2>Goal Reviews</h2>
                            <div className='progressbarCont'><p className='progressBar overdue'></p></div>
                            <p>10/24 Overdue (42%)</p>
                        </div>
                    </div>
                    <div className='employeePerformance'>
                        <div className='homepageGrid-header'>
                            <h2>Employee Performance</h2>
                        </div>
                        <div className='ratingsGrid'>
                            <div className='ratings-grid-header'>
                                <h2>Employee Name</h2>
                                <h2>Ratings</h2>
                                <h2>Date & Time</h2>
                                <h2>Feedback</h2>
                            </div>
                            <div className='ratings-grid-content'>
                                <div className='goalTitle'>
                                    <div>
                                        <img src={christian}/>
                                        <p>Christian Apithy</p>
                                    </div>
                                    <div>
                                        <img src={amen}/>
                                        <p>Amen Dossou-Yovo</p>
                                    </div>
                                    <div>
                                        <img src={emmanuel}/>
                                        <p>Emmanuel Sossou</p>
                                    </div>
                                    <div>
                                        <img src={somo}/>
                                        <p>Somogyi Adrián</p>
                                    </div>
                                    <div>
                                        <img src={oscar}/>
                                        <p>Oscar Kossou</p>
                                    </div>
                                    <div>
                                        <img src={oscar}/>
                                        <p>Oscar Kossou</p>
                                    </div>
                                    <div>
                                        <img src={oscar}/>
                                        <p>Oscar Kossou</p>
                                    </div>
                                </div>
                                <div className='goalTitle'>
                                    <p>Excellent</p>
                                    <p>Satisfactory</p>
                                    <p>Outstanding</p>
                                    <p>-</p>
                                    <p>-</p>
                                    <p>-</p>
                                    <p>Outstanding</p>
                                </div>
                                <div className='goalTitle'>
                                    <p>1 Jan 2023</p>
                                    <p>2 days ago</p>
                                    <p>2 days ago</p>
                                    <p>02 Nov 2020</p>
                                    <p>-</p>
                                    <p>-</p>
                                    <p>-</p>
                                </div>
                                <div className='goalTitle'>
                                    <p>Your company is truly upstanding and is....</p>
                                    <p>Your company is truly upstanding and is....</p>
                                    <p>Your company is truly upstanding and is....</p>
                                    <p>--</p>
                                    <p>--</p>
                                    <p>--</p>
                                    <p>--</p>
                                </div>
                                <div className='goalTitle right'>
                                    <p>Reviews <BsChevronRight /></p>
                                    <p>Reviews <BsChevronRight /></p>
                                    <p>Reviews <BsChevronRight /></p>
                                    <p>Reviews <BsChevronRight /></p>
                                    <p>Reviews <BsChevronRight /></p>
                                    <p>Reviews <BsChevronRight /></p>
                                    <p>Reviews <BsChevronRight /></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default employeePerformance