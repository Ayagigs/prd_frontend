import "./rewards.scss";
import { Gift } from 'iconsax-react';
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import axios from "axios";
import Cookies from "js-cookie"
import { useState, useEffect } from "react";
import { toast } from 'react-toastify';
const Rewards = () => {
  const [rows, setRows] = useState([]);
  const [isLoading, setIsLoading] = useState(false)

  const url = `https://pms-jq9o.onrender.com/api/v1/employee/employees/${Cookies.get('companyID')}`
  
  useEffect(() => {
    axios.get(url, {headers: {Authorization: `Bearer ${Cookies.get('Token')}`}})
    .then(res => {
      setRows(res.data.data)
    })
  }, []);

  const sendreward = (wallet) => {
    setIsLoading(true)
    // change the url to the request url
    const url = `https://pms-jq9o.onrender.com/api/v1/employee/employees/${Cookies.get('companyID')}`

    axios.post(url, {
      // what body are you sending
    },  {headers: {Authorization: `Bearer ${Cookies.get('Token')}`}},
    ).then(res => {
      setIsLoading(false)
      setRows(res.data.data)
    }).catch(error=> {
      setIsLoading(false)
      console.log(error)
    })

  }
    


  return (
    <div>
    <TableContainer component={Paper} className="rewardstable">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead className="tablehead">
          <TableRow className="rowtitle">
            <TableCell className="tableCell">Employee Name</TableCell>
            <TableCell className="tableCell">Roles</TableCell>
            <TableCell className="tableCell">Wallet Address</TableCell>
            <TableCell className="tableCell"></TableCell>
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
              <TableCell className="tableCell">{row.role}</TableCell>
              <TableCell className="tableCell">{row.walletAddress ? row.walletAddress : '---'}</TableCell>
              <TableCell className="tableCell">
                <Gift size="20" color="#030bc3" /> 
                <button className='rewardbtn' onClick={() => sendreward(row.wallet)} disabled={isLoading ? true : false}>{isLoading ? 'Rewarding...' : 'Reward'}</button>
              </TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  )
}

export default Rewards