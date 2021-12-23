import React from "react";
import { Avatar, Tag } from "antd";
import { UserOutlined } from "@ant-design/icons";
import "../styles/components/member-card.scss";

export default function MemberCard({ isAdmin, name, phone, email }) {
  return (
    <div className="member-card">
      <div className="member-avatar">
        <Avatar size={64} icon={<UserOutlined />} />
      </div>

      <div className="member-detail">
        <h3>
          {name}{" "}
          {isAdmin && (
            <Tag color="#f50" className="admin-tag">
              admin
            </Tag>
          )}
        </h3>
        <p>{phone}</p>
        <p>{email}</p>
      </div>
    </div>
  );
}
