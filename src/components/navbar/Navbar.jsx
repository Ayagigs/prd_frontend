import "./navbar.scss";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
// import { DarkModeContext } from "../../context/darkModeContext";
// import { useContext } from "react";

const Navbar = () => {
  // const { dispatch } = useContext(DarkModeContext);

  return (
    <div className="navbar1">
      <div className="wrap">
        <div className="search">
        <SearchOutlinedIcon />
          <input type="text" 
          placeholder="Search by; employee: Jane or goal: find fish" />
          
        </div>
       
        <div className="items">
        <div className="userconts">
        <div>
          <img
            width={40}
              src="https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg"
              alt=""
              className="passport"
            />
        </div>
        <div className="profcontainer">
          <span className="realnames">Aya & Co. Ltd</span>
        </div>
      </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
