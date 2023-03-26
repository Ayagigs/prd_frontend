import '../style/GoalDetails.css'
import {AiOutlineClockCircle} from 'react-icons/ai'
import {BsCalendarWeek} from 'react-icons/bs'

const GoalDetails = ({goal}) => {

    return<>
        <div className="goalDetailsWrapper">
            <div className="goalDetails">

                <div className="leftGoalDetails">
                        <h1>{goal.goaltitle}</h1>
                    <div className="leftInnerGoalDetails">

                            <div className="leftGoalDetailsHeading">
                                <div className="goalDetailsProfile">
                                    <img src={goal.profilePhoto} alt="" />
                                    <h3>{goal.owner.firstName + " " + goal.owner.lastName}</h3>
                                </div>

                                <p className={goal.status == 'Completed' ? 'completed' : goal.status == 'Overdue' ? 'overdue ': 'others'}><AiOutlineClockCircle/>{goal.status}</p>
                            </div>

                            <p>{goal.description}</p>

                            <div className="goalCategory">
                                <h4>Category</h4>
                                <p>{goal.category}</p>
                            </div>

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

export default GoalDetails