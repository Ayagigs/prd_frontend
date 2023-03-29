import "./perfrev.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Perfmini from "../perfmini/Perfmini";
// import { CircularProgressbar } from "react-circular-progressbar";
// import "react-circular-progressbar/dist/styles.css";
import { useState } from "react";


const Perfrev = () => {
  const [reviewType, setReviewType] = useState('Mid-Year')

  return (
    <div className="perfrev">
      <div className="minitop">
        <h1 className="title">Performance Review</h1>
        <h1 className="picker">{reviewType} Review</h1>
        <select className='select' onChange={(e) => setReviewType(e.target.value)}>
          <option value="Mid-Year">Mid-Year Review</option>
          <option value="Full-Year">Full-Year Review</option>
        </select>
        
        <button>View All</button>
        <MoreVertIcon fontSize="small" />
      </div>
      <Perfmini reviewType={reviewType}/>
    </div>
  );
};

export default Perfrev;
