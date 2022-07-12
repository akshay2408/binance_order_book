import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

import { TableHeaderCell } from "../styled/Styled";

export default function DataTable(props) {
  const { rows, columns, color, group, side } = props;

  const price = (data) => {
    return data !== undefined ? (data[0] !== undefined ? +data[0][0] : 0) : 0;
  };

  const amount = (data) => {
    return data !== undefined ? (data[0] !== undefined ? +data[0][1] : 0) : 0;
  };

  return (
    <TableContainer
      component={Paper}
      style={{ maxHeight: "calc(100vh - 220px)" }}
    >
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            {columns.map((data) => (
              <TableHeaderCell style={{ background: color }}>
                {data}
              </TableHeaderCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {!rows !== undefined &&
            rows.map((data, index) => (
              <TableRow key={index}>
                <TableCell style={{ color: color }} align="center">
                  {side + " " + (index + 1)}
                </TableCell>
                <TableCell style={{ color: color }} align="center">
                  {price(data).toFixed(group)}
                </TableCell>
                <TableCell style={{ color: color }} align="center">
                  {amount(data).toFixed(group)}
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
