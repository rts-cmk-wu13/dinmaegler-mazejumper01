import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from "react";
import { RouterProvider } from "react-router";
import ReactDOM from "react-dom/client";
import router from "./router";
import './index.css'


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
