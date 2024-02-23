import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0, 159, 6.0, 24, 4.0, 5),
  createData("Ice cream sandwich", 159, 6.0, 24, 4.0, 159, 6.0, 24, 4.0, 5),
  createData("Eclair", 159, 6.0, 24, 4.0, 159, 6.0, 24, 4.0, 5),
  createData("Cupcake", 159, 6.0, 24, 4.0, 159, 6.0, 24, 4.0, 5),
  createData("Gingerbread", 159, 6.0, 24, 4.0, 159, 6.0, 24, 4.0, 5),
];

const Expenses = () => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Categorii</TableCell>
            <TableCell align="center">Cumparaturi</TableCell>
            <TableCell align="center">Comandat</TableCell>
            <TableCell align="center">Intretinere</TableCell>
            <TableCell align="center">Educatie M</TableCell>
          </TableRow>
          <TableRow>
            <TableCell align="center">Total</TableCell>
            <TableCell align="center">0</TableCell>
            <TableCell align="center">0</TableCell>
            <TableCell align="center">0</TableCell>
            <TableCell align="center">0</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              //   sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              {/* <TableCell component="th" scope="row">
                {row.name}
              </TableCell> */}
              <TableCell align="center">{row.name}</TableCell>
              <TableCell align="center">{row.calories}</TableCell>
              <TableCell align="center">{row.fat}</TableCell>
              <TableCell align="center">{row.carbs}</TableCell>
              <TableCell align="center">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Expenses;
