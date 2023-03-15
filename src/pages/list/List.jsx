import "./list.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Datatable from "../../components/datatable/Datatable"
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

const List = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <div className="searchemp">
        <SearchOutlinedIcon />
          <input type="text" 
          placeholder="find employee" /> 
        </div>
        <Datatable/>
      </div>
    </div>
  )
}

export default List