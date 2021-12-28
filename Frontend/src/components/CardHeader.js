import React from "react";
import { Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import "../styles/components/card-header.scss";

const CardHeader = ({ header, subHeader, hasButton }) => {
  const navigate = useNavigate();
  return (
    <div className="team-header">
      <div className="team-header__left">
        <h1>{header}</h1>
        <p>{subHeader}</p>
      </div>
      <div className="team-header__right">
        {hasButton && (
          <Button
            type="primary"
            shape="round"
            icon={<PlusOutlined />}
            onClick={() => {
              navigate("/add-member");
            }}
          >
            Add
          </Button>
        )}
      </div>
    </div>
  );
};

export default CardHeader;
