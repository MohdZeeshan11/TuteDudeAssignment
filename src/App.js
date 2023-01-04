import React from "react";
import HomePage from "./Components/HomePage/HomePage.js";
import Referral from "./Components/ReferalPage/Referral.js";
import { Routes,Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path='/' excat element={ <HomePage />}/>
      <Route path='/:refer' excat element={ <Referral /> }/>
    </Routes>
  );
}

export default App;
