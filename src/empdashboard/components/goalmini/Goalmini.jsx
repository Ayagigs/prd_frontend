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

const Goalmini = () => {
  const rows = [
    {
      goaltitle: "Foster and grow a new or existing relationship",
      due: "today",
    },
    {
        goaltitle: "Gain and Understand a new or existing relationship",
        due: "11/06/23",
      },
      {
        goaltitle: "Learn and practice a new or existing relationship",
        due: "21/04/23",
      },
      {
        goaltitle: "Write a powerful new or existing relationship",
        due: "04/04/23",
      },
      {
        goaltitle: "Unnderstand and grow a new or existing relationship",
        due: "18/06/23",
      },
      {
        goaltitle: "Understand how powerful and grow a new or existing relationship",
        due: "12/07/23",
      },
      {
        goaltitle: "Maintain and grow a new or existing relationship",
        due: "03/11/23",
      },
      {
        goaltitle: "Reduce and grow a new or existing relationship",
        due: "04/04/23",
      },
      {
        goaltitle: "Improve and grow a new or existing relationship",
        due: "today",
      },
  ];
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
            <TableRow key={row.goaltitle}>
              <TableCell className="tableCell">
                  <TickCircle size="22" color="#474750d6"/> 
                  {row.goaltitle}</TableCell>
              <TableCell className="dateCell">
                  <CalendarAdd size="22" color="#474750d6"/> 
                  {row.due}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Goalmini;
