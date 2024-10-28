import "./App.css";
// import React from 'react';
import Tasks from "./pages/Onchain";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/freelton" element={<Home />} />
      <Route path="/freelton/tasks" element={<Tasks />} />
    </Routes>
  );
}

export default App;