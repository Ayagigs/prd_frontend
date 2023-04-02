import '../../style/EmpGoalDetails.scss'
import {AiOutlineClockCircle} from 'react-icons/ai'
import {BsCalendarWeek} from 'react-icons/bs'
import {BsChevronDown} from 'react-icons/bs'
import { useEffect, useState } from 'react'

const EmpGoalDetails = ({goal}) => {
    const [employees, setEmployees] = useState([])
    const [reviewers, setReviewers] = useState([])
    const [status, setStatus] = useState('')
    const [showCompleted, setShowCompleted] = useState(false)
    useEffect(() => {
        console.log(goal)
        setStatus(goal.status)
    }, [])

    const removeEmployee = (id) => {
        setReviewers(reviewers.filter((el) => el._id !== id))
    }

    const handleChange = (e) => {
        setReviewers({...reviewers, e})
    }

    const handleShowCompleted = () => {
        if(status === 'Completed'){
            return setShowCompleted(false)
        }
        showCompleted ? setShowCompleted(false) : setShowCompleted(true)
    }

    const handleStatusChange = () => {
        setStatus('Completed')
        setShowCompleted(false)
    }

    return<>
        <div className="goalDetailsWrapper">
            <div className="goalDetails">

                <div className="leftGoalDetails">
                        <h1>{goal.goaltitle}</h1>
                    <div className="leftInnerGoalDetails">


                            <div className="goalDateDetails">
                                <div className="goalDate">
                                    <h4>Start Date</h4>
                                    <p><BsCalendarWeek/> {new Date(goal.startdate).toDateString()}</p>
                                </div>
                                <div className="goalDate">
                                    <h4>End Date</h4>
                                    <p><BsCalendarWeek/> {new Date(goal.enddate).toDateString()}</p>
                                </div>
                            </div>
                            <div className="categoryWrapper">
                                
                                <div className="goalCategory">
                                    <h4>Category</h4>
                                    <p>{goal.category}
                                    </p>
                                </div>
                                <div className="goalCategory">
                                    <h4>Status</h4>
                                    <p className={status === 'Completed' ? 'completed' : status === 'Overdue' ? 'overdue ': 'others'}><AiOutlineClockCircle/>{status} <BsChevronDown className='dropdownarrow' onClick={() => handleShowCompleted()}/></p>
                                    <p className={showCompleted ? 'dropdown' : 'hide'} onClick={() => handleStatusChange()}><AiOutlineClockCircle/> Completed</p>
                                </div>

                            </div>

                            <div className="reviewersWrapper">
                                <h4>Reviewers</h4>
                                <select name="" id="" onChange={(e) => handleChange(e.target.value)}>
                                    <option value="">Search by name</option>
                                    <option value="">Search by name</option>
                                    <option value="">Search by name</option>
                                </select>
                                <div className="reviewersDetails">
                                    <div className="detcard">
                                        <img src="" alt="" />
                                        <p>Sophia Okosodo <span className='delete' onClick={() => removeEmployee()}>X</span></p>
                                    </div>
                                </div>
                            </div>

                            <div className="descriptionWrapper">
                                <h4>Description</h4>
                                <p>{goal.description}</p>
                            </div>
                            <div className="goalKeyObjectives">
                                <h4>Key Objectives</h4>
                                <div className="keyObjectivesContent">
                                {
                                    goal.keyobjectives.map((el) => {
                                        return(
                                            <p>{el}</p>
                                        )
                                    })
                                }
                                </div>
                            </div>
                    </div>
                </div>

                <div className="rightGoalDetails">
                    <div className="rightGoalInnerDetails">
                        <div className="rightGoalDetailsHeading">
                            <h2>Goal Feedbacks</h2>
                            <p>Here you find the feedbacks of those select to review this goal</p>
                        </div>

                        <div className="rightGoalDetailsBottom">
                        {
                            goal.reviews.map((el) => {
                                return(
                                    <div className="goalFeedback">
                                        <div className="goalFeedbackHeading">
                                            <div className="goalFeedbackProfile">
                                                <img src={el.reviewer.profilePhoto} alt="" />
                                                <h4>{el.reviewer.firstName + " " + el.reviewer.lastName}</h4>
                                            </div>
                                            <p>{new Date(el.date).toDateString()}</p>
                                        </div>
                                        <p>{el.feedback}</p>
                                    </div>
                                )
                            })
                        }

                        </div>
                    </div>
                </div>

            </div>
        </div>
    </>

}

export default EmpGoalDetails