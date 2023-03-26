import "./goalstable.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { TickCircle } from 'iconsax-react';
import { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie"

const Goalstable = () => {
  const [rows, setRows] = useState([])

  const url = `https://pms-jq9o.onrender.com/api/v1/goal/goals`
  useEffect(() => {
    axios.get(url, {headers: {Authorization: `Bearer ${Cookies.get('EmpToken')}`}})
    .then(res => {
      setRows(res.data.data.reverse())
    })
  }, []);

  
  return (
    <TableContainer component={Paper} className="goalstable">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead className="tablehead">
          <TableRow className="rowtitle">
            <TableCell className="tableCell">Goal Title</TableCell>
            <TableCell className="tableCell">Category</TableCell>
            <TableCell className="tableCell">Start Date</TableCell>
            <TableCell className="tableCell">End Date</TableCell>
            <TableCell className="tableCell">Reviewer</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow>
              <TableCell className="tableCell">
              <TickCircle size="22" color="#474750d6"/> 
                {row.goaltitle}</TableCell>
              <TableCell className="tableCell">{row.category}</TableCell>
              <TableCell className="tableCell">{new Date(row.startdate).toDateString()}</TableCell>
              <TableCell className="tableCell">{new Date(row.enddate).toDateString()}</TableCell>
              <TableCell className="tableCell">
                <div className="cellWrapper">
                
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Goalstable;
