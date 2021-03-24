import React from "react";
import { BrowserRouter } from "react-router-dom";
import GlobalStyles from "../GlobalStyles";

import { Sidebar } from "./Sidebar";

import { CurrentUserProvider } from "../CurrentUserContext";
import { Routes } from "./Routes";

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
