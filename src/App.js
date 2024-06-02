import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles";
import AutoInvest from "./pages/AutoInvest";

function App() {
  return (
    <>
      <GlobalStyles />
      <Router>
        <Routes>
          <Route path="/auto-invest" element={<AutoInvest />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
