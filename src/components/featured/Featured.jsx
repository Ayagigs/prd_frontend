import "./featured.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Goalmini from "../goalmini/Goalmini";
// import { CircularProgressbar } from "react-circular-progressbar";
// import "react-circular-progressbar/dist/styles.css";


const Featured = () => {
  return (
    <div className="featured">
      <div className="top">
        <h1 className="title">Goals</h1>
        <h1 className="title pick">All </h1>
        <select className='select'>
                  <option value="select"></option>
          </select>
        
        <button>View All</button>
        <MoreVertIcon fontSize="small" />
      </div>
      <Goalmini />
    </div>
  );
};

export default Featured;
