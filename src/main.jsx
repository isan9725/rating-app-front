import React from "react";
import ReactDOM from "react-dom/client";
import { RatingApp } from "./RatingApp";
import { BrowserRouter } from "react-router-dom";
import "./style.css";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <BrowserRouter>
            <RatingApp />
        </BrowserRouter>
    </React.StrictMode>
);
