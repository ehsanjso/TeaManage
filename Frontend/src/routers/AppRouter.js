import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createBrowserHistory } from "history";
import { TeamProvider } from "../contexts/TeamProvider";

import Team from "../components/Team";
import AddMember from "../components/AddMember";
import EditMember from "../components/EditMember";
import NotFound from "../components/NotFound";

export const history = createBrowserHistory();

const AppRouter = () => {
  return (
    <BrowserRouter history={history}>
      <TeamProvider>
        <Routes>
          <Route path="/" element={<Team />} />
          <Route path="/add-member" element={<AddMember />} exact />
          <Route path="/member/:id" element={<EditMember />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </TeamProvider>
    </BrowserRouter>
  );
};

export default AppRouter;
