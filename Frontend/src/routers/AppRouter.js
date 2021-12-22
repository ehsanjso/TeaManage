import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createBrowserHistory } from "history";

import NotFound from "../components/NotFound";

export const history = createBrowserHistory();

const AppRouter = (props) => {
  return (
    <BrowserRouter history={history}>
      <Routes>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
