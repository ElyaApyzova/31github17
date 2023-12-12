import React, { useEffect, useState } from "react";
import { TodoItem } from "./components/TodoItem";
import { Context } from "./context";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import { Todos } from "./components/Todos";
import Login from "./components/Login";
import Home from "./components/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/todos" element={<Todos />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
