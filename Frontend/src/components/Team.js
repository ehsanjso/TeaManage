import React from "react";
import { Card, Spin } from "antd";
import { useTeam } from "../contexts/TeamProvider";
import CardHeader from "./CardHeader";
import MemberCard from "./MemberCard";
import "../styles/components/team.scss";

export default function Team() {
  const { team, fetchInProg } = useTeam();
  return (
    <Card
      title={
        <CardHeader
          header="Team members"
          subHeader="You have 3 team members."
          hasButton={true}
        />
      }
      style={{ width: 400 }}
    >
      <div className="team-card-body">
        {fetchInProg ? (
          <Spin size="large" />
        ) : (
          <div className="team-list">
            {team.map((member) => (
              <MemberCard
                isAdmin={member.isadmin}
                name={`${member.firstname} ${member.lastname}`}
                phone={member.phone}
                email={member.email}
                key={member.phone}
              />
            ))}
          </div>
        )}
      </div>
    </Card>
  );
}
