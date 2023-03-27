import "./goalmini.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { TickCircle } from 'iconsax-react';
import { CalendarAdd } from 'iconsax-react';
import { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";

const Goalmini = () => {
  
  const [rows, setRows] = useState([])

  const url = `https://pms-jq9o.onrender.com/api/v1/goal/goals`
  useEffect(() => {
    axios.get(url, {headers: {Authorization: `Bearer ${Cookies.get('EmpToken')}`}})
    .then(res => {
      setRows(res.data.data.reverse())
    })
  }, []);
 
  return (
    <TableContainer component={Paper} className="minitable">
      <Table className="minitab" sx={{ minWidth: 300}} aria-label="simple table">
        <TableHead className="tablehead"> 
          <TableRow>
            <TableCell className="tableCell">Goal Title</TableCell>
            <TableCell className="datecellhead">Due Date</TableCell>
         </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row._id}>
              <TableCell className="tableCell">
                  <TickCircle size="22" color="#474750d6"/> 
                  {row.goaltitle}</TableCell>
              <TableCell className="dateCell">
                  <CalendarAdd size="22" color="#474750d6"/> 
                  {new Date(Date.now()) === new Date(row.enddate) ? 'today' : new Date(row.enddate).toLocaleDateString()}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Goalmini;
