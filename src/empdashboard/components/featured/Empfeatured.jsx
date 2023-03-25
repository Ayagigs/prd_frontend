import "./empfeatured.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Goalmini from "../goalmini/Goalmini";


const Empfeatured = () => {
  return (
    <div className="empfeatured">
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

export default Empfeatured;
