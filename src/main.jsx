import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/Routes.jsx";
import Provider from "../Providers/Provider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <div className=" mx-auto max-w-6xl ">
    <Provider>
      <RouterProvider router={router}></RouterProvider>
    </Provider>
  </div>
);
