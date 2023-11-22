import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <AuthContextProvider>
      <React.StrictMode>
      <ToastContainer
          theme="dark"
          position="bottom-center"
          autoClose={3000}
          closeOnClick
          pauseOnHover={false}
        />
        <App />
      </React.StrictMode>
    </AuthContextProvider>
  </BrowserRouter>
);
