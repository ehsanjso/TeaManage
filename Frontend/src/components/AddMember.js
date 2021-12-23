import React from "react";
import { Card } from "antd";
import CardHeader from "./CardHeader";
import MemberForm from "./MemberForm";

export default function AddMember() {
  return (
    <Card
      title={
        <CardHeader
          header="Team members"
          subHeader="You have 3 team members."
          hasButton={false}
        />
      }
      style={{ width: 400 }}
    >
      <MemberForm />
    </Card>
  );
}
