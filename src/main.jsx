import React from "react";
import ReactDOM from "react-dom/client";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import Success from "./Success.jsx";
import Fail from "./Fail.jsx";
import "./index.css";


ReactDOM.createRoot(document.getElementById("root")).render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/success" element={<Success />} />
            <Route path="/fail" element={<Fail />} />
        </Routes>
    </BrowserRouter>
);