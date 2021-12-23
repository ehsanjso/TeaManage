import React from "react";
import { Card } from "antd";
import { Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import MemberCard from "./MemberCard";
import "../styles/components/team.scss";
import { Link } from "react-router-dom";

export default function Team() {
  return (
    <Card title={<CardHeader membersCount={3} />} style={{ width: 400 }}>
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

const CardHeader = (membersCount) => {
  return (
    <div className="team-header">
      <div className="team-header__left">
        <h1>Team members</h1>
        <p>You have 3 team members.</p>
      </div>
      <div className="team-header__right">
        <Button type="primary" shape="round" icon={<PlusOutlined />}>
          <Link to="/add-member">Add</Link>
        </Button>
      </div>
    </div>
  );
};
