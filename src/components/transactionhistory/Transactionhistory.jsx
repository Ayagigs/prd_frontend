import "./transactionhistory.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { ArrangeHorizontal } from 'iconsax-react';
import { Wallet2 } from 'iconsax-react';

const Transactionhistory = () => {
  const rows = [
    {
      transaction: "Sent to Kemik@gmail.com",
      date: "March 6, 2023. 2:30 AM",
      amount: "90,450.00 USD",
      status: "pending",
    },
    {
      transaction: "Sent to Kemik@gmail.com",
      date: "March 6, 2023. 2:30 AM",
      amount: "90,450.00 USD",
      status: "cancelled",
    },
    {
      transaction: "Sent to Kemik@gmail.com",
      date: "March 6, 2023. 2:30 AM",
      amount: "90,450.00 USD",
      status: "successful",
    },
    {
      transaction: "Sent to Kemik@gmail.com",
      date: "March 6, 2023. 2:30 AM",
      amount: "90,450.00 USD",
      status: "pending",
    },
    {
      transaction: "Sent to Kemik@gmail.com",
      date: "March 6, 2023. 2:30 AM",
      amount: "90,450.00 USD",
      status: "successful",
    },

  
  ];
  return (
    <TableContainer component={Paper} className="transtable">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.transaction}>
              <TableCell className="tableCell">
                <div className="cellWrapper">
                <ArrangeHorizontal size="15" color="#5157ed" />
                  {row.transaction}
                </div>
                <TableCell className="transdate">{row.date}</TableCell>
              </TableCell>
              <TableCell className="tableCell">{row.amount}</TableCell>
              <TableCell className="tableCell">
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <button className="viewallbtn">View all transactions</button>
    </TableContainer>

  );
};

export default Transactionhistory;
