import "./widget.scss";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const Widget = ({ type }) => {
  let data;

  //temporary
  const amount = '';
  const diff = 40;

  switch (type) {
    case "user":
      data = {
        title: "Goals",
        isMoney: false,
      };
      break;
    case "order":
      data = {
        title: "My Reviews",
        isMoney: false,
      };
      break;
    case "earning":
      data = {
        title: "360 Appraisals",
        isMoney: false,
              };
      break;
    case "balance":
      data = {
        title: "Self Perfromance Review",
        isMoney: false,
      };
      break;
    default:
      break;
  }

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">
          {data.isMoney && "$"} {amount}
        </span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        <div className="percentage positive">
          {diff} %
        </div>
        {data.icon}
      </div>
    </div>
  );
};

export default Widget;
