import React from "react";
import { Card } from "antd";
import CardHeader from "./CardHeader";
import MemberForm from "./MemberForm";

export default function AddMember() {
  return (
    <Card
      title={
        <CardHeader
          header="Add a team member"
          subHeader="Set email, location and role."
          hasButton={false}
        />
      }
      style={{ width: 400 }}
    >
      <MemberForm />
    </Card>
  );
}
