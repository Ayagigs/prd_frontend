import "./goalstable.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const Goalstable = () => {
  const rows = [
    {
      name: "Christian Apithy",
      goal: "Change Reservior",
      img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
      goaltitle: "Foster and grow a new or existing relationship",
      category: "Access Management",
      start: "1 March 2020",
      end: "5 December 2019",
      status: "overdue",
    },
    {
      name: "Emmanuel Sissoko",
      goal: "Inspect Temperature",
      img: "https://m.media-amazon.com/images/I/31JaiPXYI8L._AC_UY327_FMwebp_QL65_.jpg",
      goaltitle: "Gain and Understand a new or existing relationship",
      category: "App Intergration",
      start: "3 June 2020",
      end: "25 September 2019",
      status: "completed",
    },
    {
      name: "Amotekun Adeola",
      goal: "Diffuse Material",
      img: "https://m.media-amazon.com/images/I/71kr3WAj1FL._AC_UY327_FMwebp_QL65_.jpg",
      goaltitle: "Learn and practice a new or existing relationship",
      category: "App Testing",
      start: "7 June 2020",
      end: "05 December 2019",
      status: "In Progress",
    },
    {
      name: "Christian Apithy",
      goal: "Change Reservior",
      img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
      goaltitle: "Foster and grow a new or existing relationship",
      category: "Access Management",
      start: "1 March 2020",
      end: "5 December 2019",
      status: "overdue",
    },
    {
      name: "Emmanuel Sissoko",
      goal: "Inspect Temperature",
      img: "https://m.media-amazon.com/images/I/31JaiPXYI8L._AC_UY327_FMwebp_QL65_.jpg",
      goaltitle: "Gain and Understand a new or existing relationship",
      category: "App Intergration",
      start: "3 June 2020",
      end: "25 September 2019",
      status: "completed",
    },
    {
      name: "Amotekun Adeola",
      goal: "Diffuse Material",
      img: "https://m.media-amazon.com/images/I/71kr3WAj1FL._AC_UY327_FMwebp_QL65_.jpg",
      goaltitle: "Learn and practice a new or existing relationship",
      category: "App Testing",
      start: "7 June 2020",
      end: "05 December 2019",
      status: "In Progress",
    },  
    
  ];
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead className="tablehead">
          <TableRow className="rowtitle">
            <TableCell className="tableCell">Goal Title</TableCell>
            <TableCell className="tableCell">Category</TableCell>
            <TableCell className="tableCell">Start Date</TableCell>
            <TableCell className="tableCell">End Date</TableCell>
            <TableCell className="tableCell">Reviewer</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow>
              <TableCell className="tableCell">{row.goaltitle}</TableCell>
              <TableCell className="tableCell">{row.category}</TableCell>
              <TableCell className="tableCell">{row.start}</TableCell>
              <TableCell className="tableCell">{row.end}</TableCell>
              <TableCell className="tableCell">
                <div className="cellWrapper">
                  <img src={row.img} alt="" className="image" />
                  <img src={row.img} alt="" className="image" />
                  <img src={row.img} alt="" className="image" />
                  <img src={row.img} alt="" className="image" />
                </div>
              </TableCell>
              {/* <TableCell className="tableCell">
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Goalstable;
