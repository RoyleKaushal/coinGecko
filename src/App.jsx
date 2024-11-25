import { useState } from "react";
import "./App.css";
import Home from "./screens/Home";
import { CurrencyContext } from "./src/context/CurrencyContext";

function App() {
  const [currency, setCurrency] = useState("usd");

  return (
    // <CurrencyContext.Provider value={{currency, setCurrency}}>
      <Home />
    //  </CurrencyContext.Provider>
  );
}

export default App;
