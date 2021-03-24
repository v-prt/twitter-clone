import React from "react";
import { BrowserRouter } from "react-router-dom";
import GlobalStyles from "../GlobalStyles";
import { Sidebar } from "./Sidebar";
import { Routes } from "./Routes";
import { CurrentUserProvider } from "../CurrentUserContext";

export const App = () => {
  return (
    <BrowserRouter>
      <CurrentUserProvider>
        <GlobalStyles />
        <Sidebar />
        <Routes />
      </CurrentUserProvider>
    </BrowserRouter>
  );
};
