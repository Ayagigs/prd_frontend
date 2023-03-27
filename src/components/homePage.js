import React from 'react';
import Sidenav from './sideBar';
import { BsArrowUp, BsArrowDown, BsChevronDown, BsArrowRight, BsCheckCircle } from 'react-icons/bs'
import { BiCopy } from 'react-icons/bi'
import { TbCalendarStats } from 'react-icons/tb'
import christian from '../images/christian.png'
import amen from '../images/Amen.png'
import emmanuel from '../images/Emmanuel.png'
import somo from '../images/somo.png'
import oscar from '../images/oscar.png'
import bob from '../images/Bob.png'
import janet from '../images/Janet.png'
import frank from '../images/Frank.png'
import onyinye from '../images/Onyinye.png'

const HomePage = () =>{
    return(
        <div className='page'>
            <Sidenav />
            <div className='homePagecontent'>
                <div className='contentHeader'>
                    <div className='header-box'>
                        <h2>Goals</h2>
                        <div className='progressbarCont'><p className='progressBar'></p></div>
                        <p>40% Completed</p>
                    </div>
                    <div className='header-box'>
                        <h2>Performance review</h2>
                        <div className='progressbarCont'><p className='progressBar'></p></div>
                        <p>40% Completed</p>
                    </div>
                    <div className='header-box'>
                        <h1>$14,000.00</h1>
                        <div className='walletBalance'>
                            <p>Wallet Balance</p>
                            <div className='walleticonsCont'>
                                <div className='walletIcons'>
                                    <BsArrowUp className='walletIcon'/>
                                    <p>Send</p>
                                </div>
                                <div className='walletIcons'>
                                    <BsArrowDown className='walletIcon'/>
                                    <p>Receive</p>
                                </div>
                                <div className='walletIcons'>
                                    <BiCopy className='walletIcon'/>
                                    <p>Copy</p>
                                </div>
                            </div>
                        </div>
                    </div>                    
                </div>
                <div className='homepageGrid'>
                    <div className='goalCont'>
                        <div className='homepageGrid-header'>
                            <h2>Goals</h2>
                            <div className='homeselect'>
                                <h2>All <BsChevronDown  className='arrowDown' /></h2>
                                <p>View all <BsArrowRight/></p>
                            </div>
                        </div>
                        <div className='goalContent'>
                            <div className='goalHeader'>
                                <h2>Goal Title</h2>
                                <h2>Due date</h2>
                            </div>
                            <div className='goalText'>
                                <div className='goalTitle'>
                                    <p><BsCheckCircle /> Foster and grow a new or existing relationship</p>
                                    <p><BsCheckCircle /> Gain insight into what you need for a great a....</p>
                                    <p><BsCheckCircle /> Learn practical ways to give acceptance to o....</p>
                                    <p><BsCheckCircle /> Write powerful reflection questions to help yo...</p>
                                    <p><BsCheckCircle /> Understand how the soul's wellbeing impacts ...</p>
                                    <p><BsCheckCircle /> Understand how the soul's wellbeing impacts ...</p>
                                </div>
                                <div className='goalTitle'>
                                    <p><TbCalendarStats /> today</p>
                                    <p><TbCalendarStats /> 2/01/23</p>
                                    <p><TbCalendarStats /> 1/19/23</p>
                                    <p><TbCalendarStats /> 1/19/23</p>
                                    <p><TbCalendarStats /> 1/30/23</p>
                                    <p><TbCalendarStats /> 1/30/23</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='performanceCont'>
                        <div className='homepageGrid-header'>
                            <h2>Performance review</h2>
                            <div className='homeselect'>
                                <h2>Mid-Year Review <BsChevronDown  className='arrowDown' /></h2>
                                <p>View all <BsArrowRight/></p>
                            </div>
                        </div>
                        <div className='performanceGrid'>
                            <div className='performance-grid-header'>
                                <h2>Employee</h2>
                                <h2>Feedback</h2>
                                <h2>Date & time</h2>
                            </div>
                            <div className='performance-grid-content'>
                                <div className='performance-grid-column'>
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
                                </div>
                                <div className='performance-grid-column middle'>
                                    <p>Your company is truly upstanding and is....</p>
                                    <p>It's the perfect solution for our business...</p>
                                    <p>It's the perfect solution for our business...</p>
                                    <p>This is simply unbelievable! I like it mor...</p>
                                    <p>This is simply unbelievable! I like it mor...</p>
                                    <p>This is simply unbelievable! I like it mor...</p>
                                </div>
                                <div className='performance-grid-column date'>
                                    <p>1 Jan 2022</p>
                                    <p>2 days ago</p>
                                    <p>2 days ago</p>
                                    <p>1 week ago</p>
                                    <p>1 Jan 2022</p>
                                    <p>1 Jan 2022</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='homeFooter'>
                    <div className='homeFooter-header'>
                        <h2>360 Appraisal</h2>
                        <p>Goal Review</p>
                        <p>Performance Review</p>
                    </div>
                    <div className='homeFooter-grid'>
                        <div className='analysts'>
                            <img src={frank}/>
                            <div>
                                <p>Due: Feb 2023</p>
                                <h2>Frank Cortage</h2>
                                <p>Senior System Analyst</p>
                                <h3>Review Now</h3>
                            </div>
                        </div>
                        <div className='analysts'>
                            <img src={bob}/>
                            <div>
                                <p>Due: Mar 2023</p>
                                <h2>Bob Holland</h2>
                                <p>Senior System Analyst</p>
                                <h3>Review Now</h3>
                            </div>
                        </div>
                        <div className='analysts'>
                            <img src={onyinye}/>
                            <div>
                                <p>Due: Feb 2023</p>
                                <h2>Onyinye Evans</h2>
                                <p>Senior System Analyst</p>
                                <h3>Review Now</h3>
                            </div>
                        </div>
                        <div className='analysts'>
                            <img src={janet}/>
                            <div>
                                <p>Due: Feb 2023</p>
                                <h2>Janet Evalyn</h2>
                                <p>Senior System Analyst</p>
                                <h3>Review Now</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default HomePage