import * as React from "react";
import NavHeader from "./component/nav-header/NavHeader";
import OrderBook from "./component/orderBook/OrderBook";
import { ConProvider } from "./contextApi/index";

function App() {
  return (
    <ConProvider>
      <NavHeader />
      <OrderBook />
    </ConProvider>
  );
}

export default App;
