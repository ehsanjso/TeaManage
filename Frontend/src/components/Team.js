import React from "react";
import { Card } from "antd";
import CardHeader from "./CardHeader";
import MemberCard from "./MemberCard";
import "../styles/components/team.scss";

export default function Team() {
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
      <MemberCard
        isAdmin={true}
        name="Adrien Olczak"
        phone="415-310-1619"
        email="adrien@instawork.com"
      />
      <MemberCard
        isAdmin={false}
        name="Adrien Olczak"
        phone="415-310-1619"
        email="adrien@instawork.com"
      />
      <MemberCard
        isAdmin={false}
        name="Adrien Olczak"
        phone="415-310-1619"
        email="adrien@instawork.com"
      />
      <MemberCard
        isAdmin={false}
        name="Adrien Olczak"
        phone="415-310-1619"
        email="adrien@instawork.com"
      />
    </Card>
  );
}
