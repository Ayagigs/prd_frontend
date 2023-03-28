import Side from "../../components/sidebar/Side";
import Navbar from "../../components/navbar/Navbar";
import { Link } from "react-router-dom";
import "./addgoal.scss";
import Goalstable from "../../components/goalstable/Goalstable";
import Goalswidget from "../../components/widget/Goalswidget";
import { CalendarAdd } from 'iconsax-react';
import { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { toast } from "react-toastify";

const Addgoal = () => {
  const [formData, setFormData] = useState({
    goaltitle: '',
    startdate: '',
    enddate: '',
    category: '',
    description: '',
    keyobjectives: []
  })
  const [objective, setObjective] = useState()
  const [addInput, setAddInput] = useState(false)

  const addObjective = () => {
    setFormData({...formData, keyobjectives: [...formData.keyobjectives, objective]})
    setAddInput(false)
    setObjective('')
  }

  const url = `https://pms-jq9o.onrender.com/api/v1/goal/addgoal`
  const handleSubmit = () => {
    axios.post(url, formData,  {headers: {Authorization: `Bearer ${Cookies.get('EmpToken')}`}})
    .then((res) => {
      console.log(res.data)
      toast.success("Goal Added Successfully")

      setFormData({
        goaltitle: '',
        startdate: '',
        enddate: '',
        category: '',
        description: '',
        keyobjectives: []
      })
    }).catch((error) => {
      toast.error(error.message)
    })
  }



  return (
    <div className="emphome"> 
      <Side />
      <div className="emphomeContainer">
        <Navbar />
        <div className="empgoalcontainer">
        <div className="addgoalbox">
          <div className="goaltopbox">
            <h1>New Goal</h1>
            <button className='closegoalbtn'>
              <Link to="/empgoals" className="">
                X
              </Link>
            </button>
          </div>
            <hr />
            <input type="text" className="goaltitle" value={formData.goaltitle} placeholder="Goal Title..." onChange={(e) => setFormData({...formData, goaltitle: e.target.value})}/>
         <div className="goalschedule">
          <div className="startgoal">
            <h1 className="dmy">Start Date</h1>
            <p> 
              <input type="datetime-local" value={formData.startdate} onChange={(e) => setFormData({...formData, startdate: e.target.value})}/>
            </p>
          </div>
          <div className="endgoal">
            <h1 className="dmy">End Date</h1>
            <p> 
              <input type="datetime-local" value={formData.enddate}  onChange={(e) => setFormData({...formData, enddate: e.target.value})}/>
            </p>
          </div>
         </div>
         <div className="category">
          <p>Category</p>
          <select className="selcat" name="select category" id="" value={formData.category}  onChange={(e) => setFormData({...formData, category: e.target.value})}>Select Category <br />
            <option value="">Select category</option>
            <option value="Business Process Management">Business Process Management</option>
            <option value="Report Analytics">Report Analytics</option>
          </select>
         </div>
          <div className="desboxcont">
            <textarea className="desbox" placeholder="Description" id="" cols="30" rows="10" value={formData.description}  onChange={(e) => setFormData({...formData, description: e.target.value})}></textarea>
          </div>
        <h1 className="obj">Key Objectives <span onClick={() => setAddInput(true)}>+</span></h1>
        <div className={addInput ? "objectivesform" : "hide"}>
          <input type="text" value={objective} onChange={(e) => setObjective(e.target.value)}/>
          <button onClick={() => addObjective(false)}>Submit</button>
        </div>
        {
          formData.keyobjectives.map((el) => {
            return(
              <h2 className="footnote">{el}</h2>
            )
          })
        }
        <button className="addgoal-btn" onClick={() => handleSubmit()}>Add Goal</button>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Addgoal