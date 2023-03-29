import "./navbar.scss";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
// import { DarkModeContext } from "../../context/darkModeContext";
// import { useContext } from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";

const Navbar = () => {
  // const { dispatch } = useContext(DarkModeContext);
  const [data, setData] = useState({})

  useEffect(() => {
    const url = `https://pms-jq9o.onrender.com/api/v1/admin/findme`
    axios.get(url, {headers: {Authorization: `Bearer ${Cookies.get('Token')}`}})
    .then(res => {
      setData(res.data.data.company[0])
      console.log(res.data.data.company[0])
    })

  }, [])

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
              src={data.profilePhoto}
              alt=""
              className="passport"
            />
        </div>
        <div className="profcontainer">
          <span className="realnames">{data.companyName}</span>
        </div>
      </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
