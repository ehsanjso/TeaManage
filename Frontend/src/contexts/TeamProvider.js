import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { host } from "../actions/consts/host";
import { useNavigate } from "react-router-dom";
import * as R from "ramda";

const TeamContext = React.createContext();

export function useTeam() {
  return useContext(TeamContext);
}

export function TeamProvider({ children }) {
  const navigation = useNavigate();
  const [team, setTeam] = useState([]);
  const [fetchInProg, setFetchInProg] = useState(true);
  useEffect(() => {
    async function getTeam() {
      const { data } = await axios.get(`${host}/api/members`);
      setTeam(data.reverse());
      setFetchInProg(false);
    }
    getTeam();
  }, []);

  const addMember = async (values) => {
    setFetchInProg(true);
    try {
      await axios.post(`${host}/api/members/`, values);
      setTeam((prevMembers) => {
        const members = prevMembers ? [...prevMembers] : [];
        members.push(values);
        return members;
      });
      navigation("/");
    } catch (error) {}
    setFetchInProg(false);
  };

  const updateMember = async (values) => {
    setFetchInProg(true);
    try {
      await axios.put(`${host}/api/members/`, values);
      setTeam((prevMembers) => {
        const members = prevMembers ? [...prevMembers] : [];
        members.push(values);
        return members;
      });
      navigation("/");
    } catch (error) {}
    setFetchInProg(false);
  };

  const deleteMember = async (id) => {
    setFetchInProg(true);
    try {
      await axios.delete(`${host}/api/members/${id}`);
      setTeam((prevMembers) => {
        const members = prevMembers ? [...prevMembers] : [];
        const finalTeam = R.filter((el) => el.id !== id, members);
        return finalTeam;
      });
      navigation("/");
    } catch (error) {}
    setFetchInProg(false);
  };

  return (
    <TeamContext.Provider
      value={{ team, fetchInProg, addMember, updateMember, deleteMember }}
    >
      {children}
    </TeamContext.Provider>
  );
}
