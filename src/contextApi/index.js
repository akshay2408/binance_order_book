import React, { createContext, useEffect, useState } from "react";

export const Contx = createContext();

export const ConProvider = (props) => {
  const [state, setState] = useState({
    binanceCoins: {},
  });

  const callSocket = async () => {
    await binanceSocketCall();
  };
  useEffect(() => {
    callSocket();
  }, []);

  const binanceSocketCall = async (code = "BTC/USDT") => {
    var conn = new WebSocket("wss://stream.binance.com:9443/ws/btcusdt@depth");

    conn.onmessage = (evt) => {
      var value = evt.data;
      setState({
        binanceCoins: JSON.parse(value),
      });
    };
    conn.onerror = (evt) => {
      // console.error("an error occurred", evt.data);
    };
  };

  return (
    <Contx.Provider
      value={{
        ...state,
      }}
    >
      {props.children}
    </Contx.Provider>
  );
};
