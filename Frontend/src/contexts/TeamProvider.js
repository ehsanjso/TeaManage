import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { host } from "../actions/consts/host";
import * as R from "ramda";

const TeamContext = React.createContext();

export function useTeam() {
  return useContext(TeamContext);
}

export function TeamProvider({ children }) {
  const [team, setTeam] = useState([]);
  const [fetchInProg, setFetchInProg] = useState(true);
  useEffect(() => {
    async function getTeam() {
      const { data } = await axios.get(`${host}/api/members`);
      setTeam(data);
      setFetchInProg(false);
    }
    getTeam();
  }, []);

  return (
    <TeamContext.Provider value={{ team, fetchInProg }}>
      {children}
    </TeamContext.Provider>
  );
}
