import "./perfrev.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Perfmini from "../perfmini/Perfmini";
// import { CircularProgressbar } from "react-circular-progressbar";
// import "react-circular-progressbar/dist/styles.css";


const Perfrev = () => {
  return (
    <div className="perfrev">
      <div className="top">
        <h1 className="title">Performance Review</h1>
        <h1 className="title pick">Mid-Year Review </h1>
        <select className='select'>
                  <option value="select"></option>
          </select>
        
        <button>View All</button>
        <MoreVertIcon fontSize="small" />
      </div>
      <Perfmini />
    </div>
  );
};

export default Perfrev;
