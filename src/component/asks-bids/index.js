import { Grid } from "@mui/material";
import React from "react";
import { initailVar } from "../../InitaialVariable/InitaialValue";
import { TextSellBuy } from "../../styled/Styled";
import Asks from "./Asks";
import Bids from "./Bids";

const AskBidsTable = (props) => {
  return (
    <>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 4 }}>
        <Grid item xs={12} md={12} sm={12} lg={6}>
          <TextSellBuy variant="p">{initailVar.BUY_SIDE}</TextSellBuy>
          <Bids {...props} />
        </Grid>
        <Grid item lg={6} xs={12} md={12} sm={12}>
          <TextSellBuy variant="p">{initailVar.SELL_SIDE}</TextSellBuy>
          <Asks {...props} />
        </Grid>
      </Grid>
    </>
  );
};

export default AskBidsTable;
