import React from 'react'
// import "./appraisal.scss";
import Navbar from "../../components/navbar/Navbar";
import Side from "../../components/sidebar/Side";
import { Link } from "react-router-dom";
import { useEffect , useState} from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { toast } from 'react-toastify';



const Goalreviewapp = ({profile, firstName, lastName, jobTitle, id, goal}) => {
  const [question, setQuestion] = useState([])
  const [competencyQuestion, setCompetencyQuestion] = useState([])
  const [feedback, setFeedback] = useState('')
  const [option, setOption] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [score, setScore] = useState({
    score1: '',
    score2: '',
    score3: '',
    score4: '',
    score5: ''
  })
  const [competencyScore, setCompetencyScore] = useState({
    score1: '',
    score2: '',
    score3: '',
    score4: '',
    score5: ''
  })

  const handleChange = (index, value) => {
    if(index === 0){
      setScore({...score, score1: value})
    }else if(index === 1){
      setScore({...score, score2: value})
    }else if(index === 2){
      setScore({...score, score3: value})
    }else if(index === 3){
      setScore({...score, score4: value})
    }else if(index === 4){
      setScore({...score, score5: value})
    }


  }

  const handleCompetencyChange = (index, value) => {
    if(index === 0){
      setCompetencyScore({...competencyScore, score1: value})
    }else if(index === 1){
      setCompetencyScore({...competencyScore, score2: value})
    }else if(index === 2){
      setCompetencyScore({...competencyScore, score3: value})
    }else if(index === 3){
      setCompetencyScore({...competencyScore, score4: value})
    }else if(index === 4){
      setCompetencyScore({...competencyScore, score5: value})
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsLoading(true)
    console.log(Cookies.get('EmpToken'))
    const url = `https://pms-jq9o.onrender.com/api/v1/review/goalreview/${id}`
    if(!score.score1 || !score.score2 || !score.score3 || !score.score4 || !score.score5 || !competencyScore.score1 || !competencyScore.score2 || !competencyScore.score3 || !competencyScore.score4 || !competencyScore.score5){
      setIsLoading(false)
      return toast.error("Please input all scores")
    }
    axios.post(url, {
      scores: [score.score1, score.score2, score.score3, score.score4, score.score5],
      competencyScores: [competencyScore.score1, competencyScore.score2, competencyScore.score3, competencyScore.score4, competencyScore.score5],
      feedback: feedback
    },  {headers: {Authorization: `Bearer ${Cookies.get('EmpToken')}`}}
    ).then(res => {
      toast.success('Appraisal Sent Successfully')
      console.log(res.data.data)
      setIsLoading(false)
      setTimeout(() => {
        window.location.reload()
      }, 1500)
    }).catch(err => {
      setIsLoading(false)
      toast.error(err.response.data.message)
      console.log(err.response)
    })
  } 

  useEffect(() => {
    const url = `https://pms-jq9o.onrender.com/api/v1/question/getQuestions/${Cookies.get('empCompanyID')}/Goal Review/Review`

    axios.get(url,  {headers: {Authorization: `Bearer ${Cookies.get('EmpToken')}`}})
    .then(res => {
      setQuestion(res.data.data.sortedQuestion)
      setOption(res.data.data.sortedOption)
      console.log(res.data.data.sortedOption)
      console.log(res.data.data.sortedQuestion)
    }).catch(err => {
      console.log(err)
    })

    const url2 = `https://pms-jq9o.onrender.com/api/v1/question/competencyQuestions/${Cookies.get('empCompanyID')}/Competency`

    axios.get(url2,  {headers: {Authorization: `Bearer ${Cookies.get('EmpToken')}`}})
    .then(res => {
      setCompetencyQuestion(res.data.data.sortedQuestion)
      setOption(res.data.data.sortedOption)
      console.log(res.data.data.sortedOption)
      console.log(res.data.data.sortedQuestion)
    }).catch(err => {
      console.log(err)
    })
  }, [])


  return (
    <div className='appraisalhome'>
         <div className="appraisalcontainer">
        <div className="appraisalbox" style={{height: '600px'}}>
          <div className="apptopbox">
            <h1>Goal Review Appraisal</h1>
          </div>
            <hr />
          <div className='appraisalprofile'>
            <div className='appraisalproftab'>
              <img 
               className="profimg"
              src={profile}
              alt='profilepicture'
              />
     
      <div className="profdetails">
            <h1 className="emp">{firstName + " " + lastName}</h1>
            <p className="post">{jobTitle}</p>
            <p className="post"><b>Goal Title: &nbsp;</b>  {goal.goaltitle}</p>
            <p className="post"><b>Goal Description: &nbsp;</b> {goal.description}</p>
            <p className="post"><b>Goal Status: &nbsp;</b> {goal.status}</p>
            <br />
            
      </div>
   
        </div>
   
          </div>
          

          <div className="singleform">
          <p className='bodytext'>This form will assist in preparing the performance evaluation for Frank Cortage. 
            As someone who works with Bob on a regular basis, your feedback regarding his 
            performance will be useful to the overall review process.
          </p> 
            <div className='firstline'></div>
            {
              question.map((el, index) => {
                return<>
                  <label className='form-question'>
                {el.text}?
                  </label>
                  {
                    option.map((eloption) => {
                      return<>
                        <span className='check' >{eloption.text}</span>
                        <input type="radio" name={el.text} value={eloption.value} onChange={() => handleChange(index, eloption.value)}/> 
                      </>
                    })
                  } 
                    <br />
                    <br />
                </>
              })
            }

            <br />
            <br />
            <h3>Competency Questions</h3>
            {
              competencyQuestion.map((el, index) => {
                return<>
                  <label className='form-question'>
                {el.text}?
                  </label>
                  {
                    option.map((eloption) => {
                      return<>
                        <span className='check' >{eloption.text}</span>
                        <input type="radio" name={el.text} value={eloption.value} onChange={() => handleCompetencyChange(index, eloption.value)}/> 
                      </>
                    })
                  }
                    <br />
                    <br />
                </>
              })
            }
            <textarea name="" id="" cols="30" rows="5" placeholder='Feedback'  onChange={(e) => setFeedback(e.target.value)}></textarea>
            
           </div>


        </div>
        <button className="submitbtn" onClick={(e) => handleSubmit(e)}>{isLoading ? "Submitting..." :  "Submit Appraisal"}</button>
        
      </div>
    </div>
  )
}

export default Goalreviewapp