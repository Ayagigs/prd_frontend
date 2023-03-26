import Side from "../../components/sidebar/Side";
import Navbar from "../../components/navbar/Navbar";
import { Link } from "react-router-dom";
import "./addgoal.scss";
import Goalstable from "../../components/goalstable/Goalstable";
import Goalswidget from "../../components/widget/Goalswidget";
import { CalendarAdd } from 'iconsax-react';

const Addgoal = () => {
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
          <h1 className="goaltitle">Goal Title...</h1>
         <div className="goalschedule">
          <div className="startgoal">
            <h1 className="dmy">Start Date</h1>
            <p> 
              <CalendarAdd size="22" color="#474750d6"/>
              03 Aug 2020  
            </p>
          </div>
          <div className="endgoal">
            <h1 className="dmy">End Date</h1>
            <p> 
              <CalendarAdd size="22" color="#474750d6"/>
              03 Aug 2020  
            </p>
          </div>
         </div>
         <div className="category">
          <p>Category</p>
          <select className="selcat" name="select category" id="">Select Category <br />
          <option value="">Select category</option>
          </select>
         </div>
          <div className="desboxcont">
            <input 
            className="desbox"
            type="text" 
            placeholder="Description"
            />
          </div>
        <h1 className="obj">Key Objectives</h1>
        <h2 className="footnote">Now that you've finished a plan, it's essential to measure your growth.
          We've included assessments.
        </h2>
        <button className="addgoal-btn">Add Goal</button>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Addgoal