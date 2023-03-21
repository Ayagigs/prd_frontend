import "./performancetable.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const Performancetable = () => {
  const rows = [
    {
      name: "Christian Apithy",
      goal: 2.4,
      img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
      competency: 4.0,
      ratings: "Excellent",
      score: 4.2,
      reviews: "Reviews  >",
    },
    {
      name: "Emmanuel Sissoko",
      goal: 2.4,
      img: "https://m.media-amazon.com/images/I/31JaiPXYI8L._AC_UY327_FMwebp_QL65_.jpg",
      competency: 4.0,
      ratings: "Satisfactory",
      score: 4.2,
      reviews: "Reviews  >",
    },
    {
      name: "Amotekun Adeola",
      goal: 3.4,
      img: "https://m.media-amazon.com/images/I/71kr3WAj1FL._AC_UY327_FMwebp_QL65_.jpg",
      competency: 4.2,
      ratings: "Excellent",
      score: 4.2,
      reviews: "Reviews  >",
    },{
      name: "Somogyi Adrian",
      goal: 4.4,
      img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
      competency: "-",
      ratings: "-",
      score: "--",
      reviews: "Reviews  >",
    },
    {
      name: "Oscar Kossou",
      goal: 1.4,
      img: "https://m.media-amazon.com/images/I/31JaiPXYI8L._AC_UY327_FMwebp_QL65_.jpg",
      competency: "-",
      ratings: "-",
      score: "--",
      reviews: "Reviews  >",
    },
    {
      name: "Amotekun Adeola",
      goal: 2.4,
      img: "https://m.media-amazon.com/images/I/71kr3WAj1FL._AC_UY327_FMwebp_QL65_.jpg",
      competency: 4.2,
      ratings: "--",
      score: "4.2",
      reviews: "Reviews  >",
    },
    
    
    
  ];
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
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
            <TableRow key={row.name}>
              <TableCell className="tableCell">
                <div className="cellWrapper">
                  <img src={row.img} alt="" className="image" />
                  {row.name}
                </div>
              </TableCell>
              <TableCell className="tableCell">{row.goal}</TableCell>
              <TableCell className="tableCell">{row.competency}</TableCell>
              <TableCell className="tableCell">{row.ratings}</TableCell>
              <TableCell className="tableCell">{row.score}</TableCell>
              <TableCell className="tableCell">
                <span className={`status ${row.reviews}`}>{row.reviews}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Performancetable;
