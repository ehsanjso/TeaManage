import React from "react";
import { Card } from "antd";
import { find, propEq } from "ramda";
import { useTeam } from "../contexts/TeamProvider";
import { useParams } from "react-router-dom";
import CardHeader from "./CardHeader";
import MemberForm from "./MemberForm";

export default function EditMember() {
  const { team } = useTeam();
  const params = useParams();
  const member = find(propEq("id", parseInt(params.id, 10)))(team);

  return (
    <Card
      title={
        <CardHeader
          header="Edit team member"
          subHeader="Edit contact info, location and role."
          hasButton={false}
        />
      }
      style={{ width: 400 }}
    >
      <MemberForm editMode={true} {...member} />
    </Card>
  );
}
