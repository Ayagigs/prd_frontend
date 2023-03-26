import "./widget.scss";
// import Box from '@mui/material/Box';
import LinearDeterminate from './linear';


const Widget = ({ type }) => {
  let data;

  //temporary
  // const amount = '';
  // const diff = '';

  switch (type) {
    case "Goals":
      data = {
        title: "Goals",
        isMoney: false,
      };
      break;
    case "MyReviews":
      data = {
        title: "My Reviews",
        isMoney: false,
      };
      break;
    case "360Appraisals":
      data = {
        title: "360 Appraisals",
        isMoney: false,
              };
      break;
    case "SelfPerformanceReview":
      data = {
        title: "Self Perfromance Review",
        isMoney: false,
      };
      break;
    default:
      break;
  }

  return (
    <div className="widgetbox">
      <div className="left">
        <span className="title">{data.title}</span>
        
        <div sx={{ width: '100%' }}><LinearDeterminate /></div>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        <div className="percentage positive">
        <h1>40% Completed</h1>
        </div>
        {data.icon}
      </div>
    </div>
  );
};

export default Widget;
