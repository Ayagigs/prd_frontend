import "./navbar.scss";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Link } from "react-router-dom";
import MoreVertIcon from "@mui/icons-material/MoreVert";
// import { DarkModeContext } from "../../context/darkModeContext";
// import { useContext } from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";

const Navbar = () => {
  const [data, setData] = useState({})
  // const { dispatch } = useContext(DarkModeContext);

  useEffect(() => {
    const url = `https://pms-jq9o.onrender.com/api/v1/employee/findme`
    axios.get(url, {headers: {Authorization: `Bearer ${Cookies.get('EmpToken')}`}})
    .then(res => {
      setData(res.data.data)
    })

  }, [])

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
              src={data.profilePhoto}
              alt=""
              className="passport"
            />
        </div>
        <div className="profcontainer">
          <span className="realnames">{data.firstName + ' ' + data.lastName}</span>
        </div>
      </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
