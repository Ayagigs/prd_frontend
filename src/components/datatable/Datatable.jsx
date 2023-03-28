import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns } from "../../datatablesource";
import { Link } from "react-router-dom";
import { useState ,  useEffect} from "react";
import axios from "axios";
import Cookies from "js-cookie"
import { toast } from 'react-toastify';
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import {RiDeleteBin6Line} from "react-icons/ri"
import Paper from "@mui/material/Paper";

const Datatable = () => {
  const [data, setData] = useState([]);

  const url = `https://pms-jq9o.onrender.com/api/v1/employee/employees/${Cookies.get('companyID')}`
  
  useEffect(() => {
    axios.get(url, {headers: {Authorization: `Bearer ${Cookies.get('Token')}`}})
    .then(res => {
      setData(res.data.data)
    })
  }, []);
  
  
  const handleDelete = (id) => {
    // setData(data.filter((item) => item.id !== id));
    const url2 = `https://pms-jq9o.onrender.com/api/v1/admin/deactivate/${id}`

    // console.log(Cookies.get('companyID'))

    axios.patch(url2, {headers: {Authorization: `Bearer ${Cookies.get('Token')}`}})
    .then(res => {
      setData(res.data.data)
      console.log(res)
    })
  };
  const handleView = (id) => {
  };

  return (
    <div className="datatable">
      <div className="datatableTitle">
        Employee Status
        <Link to="/employee/trial" className="link">
          Add Employee 
        </Link>
      </div>
      <TableContainer component={Paper} className="table">
      <Table sx={{ maxWidth: 1380, minWidth: 600  }} aria-label="simple table">
        <TableHead className="tablehead">
          <TableRow className="rowtitle">
            <TableCell className="tableCell">Employee Name</TableCell>
            <TableCell className="tableCell">Employee ID</TableCell>
            <TableCell className="tableCell">Email Address</TableCell>
            <TableCell className="tableCell">Role</TableCell>
            <TableCell className="tableCell">Gender</TableCell>
            <TableCell className="tableCell">Status</TableCell>
            <TableCell className="tableCell"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row._id}>
              <TableCell className="tableCell">
                <div className="cellWrapper" onClick={() => handleView(row._id)}>
                  <img src={row.profilePhoto} alt="" className="image" />
                  {row.firstName + " " + row.lastName}
                </div>
              </TableCell>
              <TableCell className="tableCell">{row.employeeID}</TableCell>
              <TableCell className="tableCell">{row.workEmail}</TableCell>
              <TableCell className="tableCell">{row.role}</TableCell>
              <TableCell className="tableCell">{row.gender}</TableCell>
              <TableCell className="tableCell">
                <span className={row.status === 'Active' ? 'active' : 'inactive'}>{row.status}</span>
              </TableCell>
              <TableCell className="tableCell">
                <span className='delete' onClick={() => handleDelete(row._id)}><RiDeleteBin6Line/></span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
};

export default Datatable;
