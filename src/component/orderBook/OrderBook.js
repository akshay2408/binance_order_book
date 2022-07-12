import { Container, Grid } from "@mui/material";
import React, { useState } from "react";
import Selector from "../../common/Selector";
import {
  groupDecimal,
  initailVar,
  rows,
} from "../../InitaialVariable/InitaialValue";
import { BoxWrapOrder, GridWrapOrder, TextCoin } from "../../styled/Styled";
import AskBidsTable from "../asks-bids";

const OrderBook = () => {
  const [group, setGroup] = useState(2);
  const [tableRow, settTableRow] = useState(8);

  const onGroupChange = (event) => {
    setGroup(event.target.value);
  };

  const onRowChange = (event) => {
    settTableRow(event.target.value);
  };

  return (
    <>
      <Container maxWidth="xl">
        <BoxWrapOrder>
          <Grid container>
            <Grid item xs={12} md={6} sm={3}>
              <TextCoin variant="p">{initailVar.BTCUSDT}</TextCoin>
            </Grid>
            <GridWrapOrder item xs={12} md={6} sm={9}>
              <Selector
                value={group}
                options={groupDecimal}
                label={initailVar.GROUP}
                handleChange={onGroupChange}
              />
              <Selector
                value={tableRow}
                label={initailVar.DEPTH}
                options={rows}
                handleChange={onRowChange}
              />
            </GridWrapOrder>
          </Grid>
        </BoxWrapOrder>
        <AskBidsTable group={group} rows={tableRow} />
      </Container>
    </>
  );
};

export default OrderBook;
