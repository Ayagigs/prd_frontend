import "./perfmini.scss";
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

const Perfmini = ({reviewType}) => {

  const [rows, setRows] = useState([])
  const [review, setReview] = useState([])

  const url = `https://pms-jq9o.onrender.com/api/v1/review/myreviews`
  useEffect(() => {
    axios.get(url, {headers: {Authorization: `Bearer ${Cookies.get('EmpToken')}`}})
    .then(res => {
      setRows(res.data.data.filter((el) => el.reviewTime === reviewType && el.reviewType === 'Performance Review'))
    })
  }, []);


  // const rows = [
  //   {

  //     name: "Christian Apithy",
  //     img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
  //     feedback: "Your company is truly outstanding",
  //     date: "1 Jan 2022",
  //   },
  //   {
  //     name: "Frabcis Ign",
  //     img: "https://m.media-amazon.com/images/I/31JaiPXYI8L._AC_UY327_FMwebp_QL65_.jpg",
  //     feedback: "Incredible Company, looking forward to work more with you",
  //     date: "2 days ago",
  //     },
  //     {
  //       name: "Aboki Mallam",
  //       img: "https://m.media-amazon.com/images/I/71kr3WAj1FL._AC_UY327_FMwebp_QL65_.jpg",
  //     feedback: "Perfect Solution for our Business, Kudos Guys",
  //     date: "2 days ago",
  //     },
  //     {
  //       name: "Majekodunmi Fifewole",
  //       img: "https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_UY327_FMwebp_QL65_.jpg",
  //     feedback: "Foster and grow a new or existing relationship",
  //     date: "1 week ago",
  //     },
  //     {
  //       name: "Esther Fayawo",
  //       img: "https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg",
  //       feedback: "Apply and grow a new or existing relationship",
  //       date: "1 Jan 2022",
  //     },
  //     {
  //       name: "Ibikunle Amosun",
  //       img: "https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg",
  //       feedback: "Foster and grow a new or existing relationship",
  //       date: "19 Jan 2022",
  //     },
  //     {
  //       name: "Seyi Seun",
  //       img: "https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg",
  //       feedback: "Foster and grow a new or existing relationship",
  //       date: "20 June 2045",
  //     },
  // ];
  return (
    <TableContainer component={Paper} className="perftable">
      <Table className="minitab" sx={{ minWidth: 300}} aria-label="simple table">
        <TableHead className="tablehead"> 
          <TableRow>

            <TableCell className="tableCell">Employee Name</TableCell>
            <TableCell className="tableCell">Feedback</TableCell>
            <TableCell className="tableCell">Date & Time</TableCell>
         </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row._id}>
              <TableCell className="tableCell">
              <div className="cellWrapper">
                  <img src={row.reviewer.profilePhoto} alt="" className="image" />
                  {row.reviewer.firstName + " " + row.reviewer.lastName}
                </div>
              </TableCell>
              <TableCell className="tableCell">{row.feedback}</TableCell>
              <TableCell className="tabledate">{new Date(row.date).toDateString()}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Perfmini;
