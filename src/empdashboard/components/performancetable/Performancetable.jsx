import "./performancetable.scss";
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

const Performancetable = () => {
  const [rows, setRows] = useState([])

  const url = `https://pms-jq9o.onrender.com/api/v1/review/myreviews`
  useEffect(() => {
    axios.get(url, {headers: {Authorization: `Bearer ${Cookies.get('EmpToken')}`}})
    .then(res => {
      setRows(res.data.data)
    })
  }, []);


  return (
    <TableContainer component={Paper} className="empperftable">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead className="tablehead">
          <TableRow className="rowtitle">
            <TableCell className="tableCell">Employee Name</TableCell>
            <TableCell className="tableCell">Ratings</TableCell>
            <TableCell className="tableCell">Date & Time</TableCell>
            <TableCell className="tableCell">Type</TableCell>
            <TableCell className="tableCell">Feedback</TableCell>
            <TableCell className="tableCell"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell className="tableCell">
                <div className="cellWrapper">
                  <img src={row.profilePhoto} alt="" className="image" />
                  {row.firstName + " " + row.lastName}
                </div>
              </TableCell>
              <TableCell className="tableCell">{row.ratings}</TableCell>
              <TableCell className="tableCell">{new Date(row.date).toDateString()}</TableCell>
              <TableCell className="tableCell">{row.reviewType}</TableCell>
              <TableCell className="tableCell">{row.feedback}</TableCell>
              <TableCell className="tableCell">
                <span className={`status ${row.reviews}`}>reviews {'>'}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Performancetable;
