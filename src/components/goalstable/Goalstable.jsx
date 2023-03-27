import "./goalstable.scss";
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
import GoalDetails from "../../pages/GoalDetails";

const Goalstable = () => {
  const [rows, setRows] = useState([])
  const [details, setDetails] = useState({})
  const [goalPopup, setGoalPopup] = useState(false)

  const url = `https://pms-jq9o.onrender.com/api/v1/goal/employeegoals/${Cookies.get('companyID')}`
  useEffect(() => {
    axios.get(url, {headers: {Authorization: `Bearer ${Cookies.get('Token')}`}})
    .then(res => {
      setRows(res.data.data.reverse())
      console.log(res.data.data)
    })
  }, []);

  const Details = (row) => {
    setGoalPopup(true)
    setDetails(row)
  }

  return <>
    <TableContainer component={Paper} className="goalsmaintable">
      <Table sx={{ maxWidth: 1380, minWidth: 1200  }} aria-label="simple table">
        <TableHead className="tablehead">
          <TableRow className="rowtitle">
            <TableCell className="tableCell">Employee Name</TableCell>
            <TableCell className="tableCell">Goal Title</TableCell>
            <TableCell className="tableCell">Category</TableCell>
            <TableCell className="tableCell">Start Date</TableCell>
            <TableCell className="tableCell">End Date</TableCell>
            <TableCell className="tableCell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row._id}>
              <TableCell className="tableCell">
                <div className="cellWrapper"  onClick={() => Details(row)}>
                  <img src={row.owner.profilePhoto} alt="" className="image" />
                  {row.owner.firstName + " " + row.owner.lastName}
                </div>
              </TableCell>
              <TableCell className="tableCell">{row.goaltitle}</TableCell>
              <TableCell className="tableCell">{row.category}</TableCell>
              <TableCell className="tableCell">{new Date(row.startdate).toLocaleDateString()}</TableCell>
              <TableCell className="tableCell">{new Date(row.enddate).toLocaleDateString()}</TableCell>
              <TableCell className="tableCell">
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <p className={goalPopup ? "closeGoal" : "hide"} onClick={() => setGoalPopup(false)}>X</p>
    {goalPopup ? <GoalDetails goal={details}/> : undefined}
  </>;
};

export default Goalstable;
