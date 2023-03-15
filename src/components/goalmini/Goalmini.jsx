import "./goalmini.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const Goalmini = () => {
  const rows = [
    {
      goaltitle: "Foster and grow a new or existing relationship",
      due: "today",
    },
    {
        goaltitle: "Gain and Understand a new or existing relationship",
        due: "today",
      },
      {
        goaltitle: "Learn and practice a new or existing relationship",
        due: "today",
      },
      {
        goaltitle: "Write a powerful new or existing relationship",
        due: "today",
      },
      {
        goaltitle: "Unnderstand and grow a new or existing relationship",
        due: "today",
      },
      {
        goaltitle: "Understand how powerful and grow a new or existing relationship",
        due: "today",
      },
      {
        goaltitle: "Maintain and grow a new or existing relationship",
        due: "today",
      },
      {
        goaltitle: "Reduce and grow a new or existing relationship",
        due: "today",
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
            <TableCell className="tableCell">Due Date</TableCell>
         </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.goaltitle}>
              <TableCell className="tableCell">{row.goaltitle}</TableCell>
              <TableCell className="tableCell">{row.due}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Goalmini;
