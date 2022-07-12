import React, { useContext } from "react";
import DataTable from "../../common/DataTable";
import { Contx } from "../../contextApi/index";
import { columns, initailVar } from "../../InitaialVariable/InitaialValue";

var askSlice;
var appendData = [];

const Asks = (props) => {
  const { binanceCoins } = useContext(Contx);

  var askData = binanceCoins?.a;

  if (askData !== undefined) {
    appendData.push(askData);
  }

  if (appendData !== undefined) {
    askSlice = appendData.slice(-props.rows);
    askSlice.reverse();
  }
  return (
    <>
      <DataTable
        group={props.group}
        rows={askSlice}
        side={initailVar.SELL_SIDE}
        columns={columns}
        color={"#d84315"}
      />
    </>
  );
};

export default Asks;
