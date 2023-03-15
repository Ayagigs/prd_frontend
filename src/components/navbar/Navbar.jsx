import "./navbar.scss";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
// import { DarkModeContext } from "../../context/darkModeContext";
// import { useContext } from "react";

const Navbar = () => {
  // const { dispatch } = useContext(DarkModeContext);

  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
        <SearchOutlinedIcon />
          <input type="text" 
          placeholder="Search by; employee: Jane or goal: find fish" />
          
        </div>
       
        <div className="items">
           <div className="item profile">
            <img
              src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className="avatar"
            />
            <p className="owner">Aya and Co</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
