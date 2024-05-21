import React from "react";

import { Routes, Route, Navigate } from "react-router-dom";

import Home from "./pages/Home/Home";
import Chat from "./pages/Chat/Chat";

function App() {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/chat" element={<Chat />} />

      {/* Redirect root path to /home */}
      <Route path="/" element={<Navigate to="/home" />} />

      {/* Default route for any undefined path */}
      <Route path="*" element={<Navigate to="/home" />} />
    </Routes>
  );
}

export default App;
