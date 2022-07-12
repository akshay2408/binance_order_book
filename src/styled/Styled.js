import styled from "@emotion/styled";
import { Box, Grid, TableCell, TextField, Typography } from "@mui/material";

export const TableHeaderCell = styled(TableCell)({
  color: "#fff",
  position: "sticky",
  top: "0",
  textAlign: "center",
  fontWeight: "bold",
  fontSize: "20px",
});

export const TextSellBuy = styled(Typography)({
  fontWeight: "bold",
  fontSize: "30px",
  color: "#4c4c4c",
  marginLeft: "10px",
});

export const TextCoin = styled(Typography)({
  fontWeight: "bold",
  fontSize: "20px",
  color: "#4c4c4c",
});

export const BoxWrapOrder = styled(Box)({
  marginBottom: "20px",
  marginTop: "30px",
});

export const GridWrapOrder = styled(Grid)({
  display: "flex",
  justifyContent: "flex-end",
});

export const SelectorField = styled(TextField)({
  width: "100%",
  maxWidth: "280px",
  marginRight: "20px",
});
