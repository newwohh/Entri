import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./openingHours.css";
import { createTheme } from "@mui/material";

function createData(name, calories) {
  return { name, calories };
}
export default function DenseTable(props) {
  const font = "'Tangerine'";

  const theme = createTheme({
    typography: {
      fontFamily: font,
    },
  });

  const rows = [
    createData("Monday", props.operatingHours.Monday),
    createData("Tuesday", props.operatingHours.Tuesday),
    createData("Wednesday", props.operatingHours.Wednesday),
    createData("Thursday", props.operatingHours.Thursday),
    createData("Friday", props.operatingHours.Friday),
    createData("Saturday", props.operatingHours.Saturday),
    createData("Sunday", props.operatingHours.Sunday),
  ];
  return (
    <TableContainer
      component={Paper}
      className="w"
      sx={{ width: 900, marginLeft: 5 }}
    >
      <Table sx={{ minWidth: 350 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell
              sx={{ fontWeight: 1000, fontSize: 23, color: "#7F669D" }}
            >
              Day{" "}
            </TableCell>
            <TableCell
              sx={{ fontWeight: 1000, fontSize: 23, color: "#7F669D" }}
              align="right"
            >
              Time
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell
                component="th"
                scope="row"
                sx={{ fontFamily: font, fontSize: 25 }}
              >
                {row.name}
              </TableCell>
              <TableCell align="right" sx={{ fontFamily: font, fontSize: 25 }}>
                {row.calories}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
