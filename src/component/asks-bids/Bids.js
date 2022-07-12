import React, { useContext } from "react";
import DataTable from "../../common/DataTable";
import { Contx } from "../../contextApi/index";
import { columns, initailVar } from "../../InitaialVariable/InitaialValue";

var BidsSlice;
var appendData = [];

const Bids = (props) => {
  const { binanceCoins } = useContext(Contx);

  var askData = binanceCoins?.b;

  if (askData !== undefined) {
    appendData.push(askData);
  }

  if (appendData !== undefined) {
    BidsSlice = appendData.slice(-props.rows);
    BidsSlice.reverse();
  }

  return (
    <>
      <DataTable
        {...props}
        side={initailVar.BUY_SIDE}
        rows={BidsSlice}
        columns={columns}
        color="#689f38"
      />
    </>
  );
};

export default Bids;
