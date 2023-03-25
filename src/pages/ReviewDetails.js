import '../style/ReviewDetails.css'
import { useState } from 'react';

const ReviewDetails = ({user, fullyear, midyear, appraisal}) => {
    const [reviewType, setReviewType] = useState('fullyear')





    return (
          <div className = {"reviewDetailsWrapper"}>
            <div className = "reviewDetails">
                <div className = "reviewDetailsHeading">
                    <div className = "reviewDetailsHeadingProfile">
                        <img src = {user.photo} alt="" />
                        <h3>{user.fullname}</h3>
                    </div>
                </div>
                <div className = "reviewDetailstabs">
                    <p className = {reviewType === 'fullyear' ? 'active' : 'unactive'} onClick={() => setReviewType('fullyear')}>Full-year Review</p>
                    <p className = {reviewType === 'midyear' ? 'active' : 'unactive'} onClick={() => setReviewType('midyear')}>Mid-year Review</p>
                    <p className = {reviewType === '360' ? 'active' : 'unactive'}  onClick={() => setReviewType('360')}>360 Appraisal</p>
                </div>

                <div className={reviewType === 'fullyear' ? 'reviewDetailsBottom' : 'hide'}>
                    {
                        fullyear.map((el) => {
                            return(
                                <div className = "reviewDetailsCard">
                                    <div className = "reviewDetailsCardHeading">
                                        <div className = "reviewDetailsCardProfile">
                                            <img src = {el.reviewer.profilePhoto} alt = "" />
                                            <h3>{el.reviewer.firstName + " " + el.reviewer.lastname}<span className={el.role === 'Staff' ? "show" : "hide"}><span className="circle"></span>{el.role === 'Performance manager' ? 'PM' : el.role === 'HR Manager' ? 'HR' : ''}</span></h3>
                                        </div>
                                        <p>{new Date(el.date).toDateString()}</p>
                                        <h3>{el.finalScore}</h3>
                                    </div>
                                    <p className = 'reviewDetailsCardContent'>{el.feedback}</p>
                                </div>
                            );
                        })
                    }
                </div>

                <div className = {reviewType === 'midyear' ? 'reviewDetailsBottom' : 'hide'}>
                    {
                        midyear.map((el) => {
                            return(
                                <div className="reviewDetailsCard">
                                    <div className="reviewDetailsCardHeading">
                                        <div className="reviewDetailsCardProfile">
                                            <img src = {el.reviewer.profilePhoto} alt = "" />
                                            <h3>{el.reviewer.firstName + " " + el.reviewer.lastname}<span className={el.role === 'Staff' ? "show" : "hide"}><span className="circle"></span>{el.role === 'Performance manager' ? 'PM' : el.role === 'HR Manager' ? 'HR' : ''}</span></h3>
                                        </div>
                                        <p>{new Date(el.date).toDateString()}</p>
                                        <h3>{el.finalScore}</h3>
                                    </div>
                                    <p className='reviewDetailsCardContent'>{el.feedback}</p>
                                </div>
                            );
                        })
                    }
                </div>

                <div className = {reviewType === '360' ? 'reviewDetailsBottom' : 'hide'}>
                    {
                        appraisal.map((el) => {
                            return(
                                <div className = "reviewDetailsCard">
                                    <div className = "reviewDetailsCardHeading">
                                        <div className = "reviewDetailsCardProfile">
                                            <img src = {el.reviewer.profilePhoto} alt = "" />
                                            <h3>{el.reviewer.firstName + " " + el.reviewer.lastname}<span className = {el.role === 'Staff' ? "show" : "hide"}><span className = "circle"></span>{el.role === 'Performance manager' ? 'PM' : el.role === 'HR Manager' ? 'HR' : ''}</span></h3>
                                        </div>
                                        <p>{new Date(el.date).toDateString()}</p>
                                        <h3>{el.finalScore}</h3>
                                    </div>
                                    <p className = 'reviewDetailsCardContent'>{el.feedback}</p>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
            
          </div>
      );
}

export default ReviewDetails