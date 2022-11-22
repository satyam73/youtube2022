import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Feed from "./Feed";
import App from "../App";
function Router() {
  return (
    // <BrowserRouter>
    <Routes>
      <Route element={<Feed text={"hello world"} />} path="/home" />
      <Route element={<Feed text={"about"} />} path="/about" />
      <Route element={<Feed text={"contact"} />} path="/contact" />
    </Routes>
    // </BrowserRouter>
  );
}

export default Router;
