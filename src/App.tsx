import "./App.css";
// import React from 'react';
import Learn from "./pages/Onchain";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="https://iamnnp.github.io/freelton" element={<Home />} />
      <Route path="https://iamnnp.github.io/freelton/learn" element={<Learn />} />
    </Routes>
  );
}

export default App;