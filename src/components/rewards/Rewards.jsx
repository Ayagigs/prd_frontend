import "./rewards.scss";
import { Gift } from 'iconsax-react';
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
const Rewards = () => {

    const rows = [
        {
          name: "Christian Apithy",
          role: "Human Resource",
          img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
          wallet: "0xb8f21ca11a20e98e9bcb7638abf9d696be68b943",
          reward: "",
        },
        {
            name: "Damilola Fatai",
            role: "Driver",
            img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
            wallet: "0xe9bcb7638abf9d696beb8f21ca11a20e9868b943",
            reward: "",
        },
        {
            name: "Adewale Rabiu",
            role: "Surveyor",
            img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
            wallet: "0xe9bcb7638abf9d696beb8f21ca11a20e9868b943",
            reward: "",
        },
        {
            name: "Joseph Tunji",
            role: "Lab Analyst",
            img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
            wallet: "0xe9bcb7638abf9d696beb8f21ca11a20e9868b943",
            reward: "",
        },
        {
            name: "Christian Apithy",
            role: "Human Resource",
            img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
            wallet: "0xb8f21ca11a20e98e9bcb7638abf9d696be68b943",
            reward: "",
          },
          {
              name: "Damilola Fatai",
              role: "Driver",
              img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
              wallet: "0xe9bcb7638abf9d696beb8f21ca11a20e9868b943",
              reward: "",
          },
          {
              name: "Adewale Rabiu",
              role: "Surveyor",
              img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
              wallet: "0xe9bcb7638abf9d696beb8f21ca11a20e9868b943",
              reward: "",
          },
          {
              name: "Joseph Tunji",
              role: "Lab Analyst",
              img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
              wallet: "0xe9bcb7638abf9d696beb8f21ca11a20e9868b943",
              reward: "",
          },            
      ];


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
            <TableRow key={row.name}>
              <TableCell className="tableCell">
                <div className="cellWrapper">
                  <img src={row.img} alt="" className="image" />
                  {row.name}
                </div>
              </TableCell>
              <TableCell className="tableCell">{row.role}</TableCell>
              <TableCell className="tableCell">{row.wallet}</TableCell>
              <TableCell className="tableCell">{row.reward}
                <Gift size="20" color="#030bc3" /> 
                <button className='rewardbtn'>Reward</button>
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