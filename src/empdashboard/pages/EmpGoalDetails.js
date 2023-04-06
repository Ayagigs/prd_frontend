import '../../style/EmpGoalDetails.scss'
import {AiOutlineClockCircle} from 'react-icons/ai'
import {BsCalendarWeek} from 'react-icons/bs'
import {BsChevronDown} from 'react-icons/bs'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Cookies from 'js-cookie'
import { toast } from 'react-toastify'

const EmpGoalDetails = ({goal}) => {
    const [employees, setEmployees] = useState([])
    const [object, setObject] = useState([])
    const [reviewers, setReviewers] = useState([])
    const [status, setStatus] = useState('')
    const [fetching, setFetching] = useState(false)
    const [loading, setLoading] = useState(false)
    const [showCompleted, setShowCompleted] = useState(false)
    useEffect(() => {
        setFetching(true)
        setStatus(goal.status)
        const url = 'https://pms-jq9o.onrender.com/api/v1/employee/getColleagues'
        axios.get(url, {headers: {Authorization: `Bearer ${Cookies.get('EmpToken')}`}})
        .then(res => {
            setFetching(false)
            setEmployees(res.data.data)
        }).catch(err => {
            console.log(err.response.data.message)
        })

    }, [])

    const removeEmployee = (id) => {
        setObject(object.filter((el) => el._id !== id))
        setReviewers(object.filter((el) => el._id !== id))
    }

    const handleChange = (id) => {
        const employee = employees.find((el) => el._id === id)
        object.push(employee)
        setReviewers([...object])
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

    const handleSubmit = () => {
        setLoading(true)
        const idArray = []
        for(let i = 0; i < reviewers.length; i++){
            idArray.push(reviewers[i]._id)
        }

        const url = `https://pms-jq9o.onrender.com/api/v1/goal/edit/${goal._id}`
        axios.patch(url, {
            isCompleted: status === 'Completed' ? true : false,
            status: status === 'Completed' ? 'Completed' : new Date() >goal.enddate ? 'Overdue' : new Date() < goal.startdate ? 'Not Started' : 'In Progress',
            reviewers: idArray
        }, {headers: {Authorization: `Bearer ${Cookies.get('EmpToken')}`}})
        .then(res => {
            setLoading(false)
            toast.success('Goal Edited Successfully')
        }).catch(err => {
            toast.error(err.response.data.message)
        })
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
                                <option value="">--Select--</option>
                                    {
                                        fetching ? <option value="">Fetching Employees...</option>
                                        :
                                        employees.map((el) => {
                                            return(
                                                <option value={el._id}>
                                                    {el.firstName + ' ' + el.lastName}
                                                </option>
                                            )
                                        })
                                    }
                                </select>
                                <div className="reviewersDetails">
                                {
                                    reviewers.map((el) => {
                                        return(
                                            <div className="detcard">
                                                <img src={el.profilePhoto} alt="" />
                                                <p>{el.firstName + ' ' + el.lastName} <span className='delete' onClick={() => removeEmployee(el._id)}>X</span></p>
                                            </div>

                                        )
                                    })
                                }
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
                    <div className="buttonWrap">
                        <button onClick={handleSubmit}>{loading ? 'Submitting...' : 'Submit'}</button>
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