import "./featured.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Featured = () => {
  return (
    <div className="featured">
      <div className="top">
        <h1 className="title">Goal Metrics</h1>
        <MoreVertIcon fontSize="small" />
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <CircularProgressbar value={70} text={"70%"} strokeWidth={5} />
        </div>
        <p className="overdue">25% Overdue</p>
        <p className="completed">25% Completed</p>
        <p className="inprogress">25% In progress</p>
        <p className="notstarted">25% Not Started</p>
      </div>
    </div>
  );
};

export default Featured;
