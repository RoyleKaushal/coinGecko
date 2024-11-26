import { Route, Routes } from "react-router-dom";
// import Home from "../../../screens/Home";
// import CoinDetailScreen from "../../../screens/CoinDetailScreen";
import MainLayout from "../../../screens/Layout";
import { lazy } from "react";

const Home = lazy(()=> import ("../../../screens/Home"));
const CoinDetailScreen = lazy(()=> import ("../../../screens/CoinDetailScreen"));

function Routing() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
      </Route>
      <Route path="/" element={<MainLayout />}>
        <Route path="/details/:coinId" element={<CoinDetailScreen />} />
      </Route>
    </Routes>
  );
}

export default Routing;
