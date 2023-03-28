import "./navbar.scss";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Link } from "react-router-dom";
import MoreVertIcon from "@mui/icons-material/MoreVert";
// import { DarkModeContext } from "../../context/darkModeContext";
// import { useContext } from "react";

const Navbar = () => {
  // const { dispatch } = useContext(DarkModeContext);

  return (
    <div className="empnavbar">
      <div className="navwrapper">
        <div className="search">
        <SearchOutlinedIcon />
          <input type="text" 
          placeholder="Search by; employee: Jane or goal: find fish" />
          
        </div>
       
        <div className="items">
        <div className="usercont">
        <div>
          <img
            width={40}
              src="https://m.media-amazon.com/images/I/71kr3WAj1FL._AC_UY327_FMwebp_QL65_.jpg"
              alt=""
              className="passport"
            />
        </div>
        <div className="profcontainer">
          <span className="realnames">Charles Godfrey</span>
        </div>
      </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
