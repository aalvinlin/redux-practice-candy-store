import React from "react";

import CandyStock from "./components/CandyStock";
import ShoppingBasket from "./components/ShoppingBasket";
import EmployeeDashboard from "./components/EmployeeDashboard";

import "./App.css";

const App = () => (
  <>
    <header>
      <h1>Web26 Candy Store</h1>
    </header>

    <CandyStock />
    
    <div className="bottomContainer">
      <EmployeeDashboard />
      <ShoppingBasket />
    </div>
  </>
);

export default App;