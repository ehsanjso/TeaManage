import React from "react";
import { Avatar, Tag } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import "../styles/components/member-card.scss";

export default function MemberCard({ isAdmin, name, phone, email, id }) {
  let navigate = useNavigate();
  return (
    <div
      className="member-card"
      onClick={() => {
        navigate(`/member/${id}`);
      }}
    >
      <div className="member-avatar">
        <Avatar size={64} icon={<UserOutlined />} />
      </div>

      <div className="member-detail">
        <h3>{name}</h3>
        <p>{phone.replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3")}</p>
        <p>{email}</p>
      </div>
      {isAdmin && (
        <Tag color="#f50" className="admin-tag">
          admin
        </Tag>
      )}
    </div>
  );
}
