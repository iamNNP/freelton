import "./App.css";
// import React from 'react';
import Learn from "./pages/Onchain";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path={`${process.env.PUBLIC_URL}/`} element={<Home />} />
      <Route path={`${process.env.PUBLIC_URL}/learn`} element={<Learn />} />
    </Routes>
  );
}

export default App;