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
import ReviewDetails from "../../pages/ReviewDetails";
import { Link } from "react-router-dom";


const Performancetable = () => {
  const [rows, setRows] = useState([])
  const [details, setDetails] = useState({})
  const [reviewPopup, setReviewPopup] = useState(false)
  const [fullyear, setFullyear] = useState()
  const [midyear, setMidyear] = useState()
  const [appraisal, setAppraisal] = useState()

  const url = `https://pms-jq9o.onrender.com/api/v1/review/allreviews/${Cookies.get('companyID')}`
  useEffect(() => {
    axios.get(url, {headers: {Authorization: `Bearer ${Cookies.get('Token')}`}})
    .then(res => {
      setRows(res.data.data)
      console.log(res.data.data)
    })
  }, []);


  const Details = (row) => {
    setReviewPopup(true)
    setDetails({fullname: row.firstName + " " + row.lastName, photo: row.profilePhoto})
    setFullyear(row.reviews.filter((el) => el.reviewTime == 'Full-Year').sort((a,b) => 
    new Date(b.date) - new Date(a.date)
  ))
    setMidyear(row.reviews.filter((el) => el.reviewTime == 'Mid-Year').sort((a,b) => 
    new Date(b.date) - new Date(a.date)
  ))
    setAppraisal(row.reviews.filter((el) => el.reviewType == '360 Appraisal').sort((a,b) => 
    new Date(b.date) - new Date(a.date)
  ))
    
  }
  return <>
    <TableContainer component={Paper} className="perftable">
      <Table sx={{ maxWidth: 1380, minWidth: 600 }} aria-label="simple table">
        <TableHead className="tablehead">
          <TableRow className="rowtitle">
            <TableCell className="tableCell">Employee Name</TableCell>
            <TableCell className="tableCell">KPI vs Goals</TableCell>
            <TableCell className="tableCell">Competency</TableCell>
            <TableCell className="tableCell">Ratings</TableCell>
            <TableCell className="tableCell">Final Score</TableCell>
            <TableCell className="tableCell"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row._id}>
              <TableCell className="tableCell">
                <div className="cellWrapper">
                  <img src={row.profilePhoto} alt="" className="image" />
                  {row.firstName + " " + row.lastName}
                </div>
              </TableCell>
              <TableCell className="tableCell">{row.score > 0 ? parseFloat(row.score).toFixed(1) : '--'}</TableCell>
              <TableCell className="tableCell">{row.competency > 0 ? parseFloat(row.competency).toFixed(1) : '--'}</TableCell>
              <TableCell className="tableCell">{row.finalScore > 0 ? row.rating : '--'}</TableCell>
              <TableCell className="tableCell">{row.finalScore > 0 ? parseFloat(row.finalScore).toFixed(1) : '--'}</TableCell>
              <TableCell className="tableCell">
                <Link className={`status ${row.reviews}`} onClick={() => Details(row)} >reviews {'>'}</Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <p className={reviewPopup ? "closeReview" : "hide"} onClick={() => setReviewPopup(false)}>X</p>
    {reviewPopup ? <ReviewDetails user={details} fullyear={fullyear} midyear={midyear} appraisal={appraisal}/> : undefined}
                  
  </>;
};

export default Performancetable;
