import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie"

const List = () => {
  const [rows, setRows] = useState([])
  const url = `https://pms-jq9o.onrender.com/api/v1/admin/findme`

  const url2 = `https://pms-jq9o.onrender.com/api/v1/employee/employees/${Cookies.get('companyID')}`
  useEffect(() => {
    axios.get(url2, {headers: {Authorization: `Bearer ${Cookies.get('Token')}`}})
    .then(res => {
      setRows(res.data.data)
    })
  }, []);

  
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650,}} aria-label="simple table">
        <TableHead className="tablehead"> 
          <TableRow>
            <TableCell className="tableCell">Employee ID</TableCell>
            <TableCell className="tableCell">Employee Name</TableCell>
            <TableCell className="tableCell">Email Address</TableCell>
            <TableCell className="tableCell">Role</TableCell>
            <TableCell className="tableCell">Gender</TableCell>
            <TableCell className="tableCell">Department</TableCell>
            <TableCell className="tableCell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.employeeID}>
              <TableCell className="tableCell">{row.employeeID}</TableCell>
              <TableCell className="tableCell">
                <div className="cellWrapper">
                  <img src={row.profilePhoto} alt="" className="image" />
                  {row.firstName + " " + row.lastName}
                </div>
              </TableCell>
              <TableCell className="tableCell">{row.workEmail}</TableCell>
              <TableCell className="tableCell">{row.role}</TableCell>
              <TableCell className="tableCell">{row.gender}</TableCell>
              <TableCell className="tableCell">{row.department}</TableCell>
              <TableCell className="tableCell">
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;
