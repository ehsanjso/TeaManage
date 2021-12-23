import React from "react";
import { Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import "../styles/components/card-header.scss";

const CardHeader = ({ header, subHeader, hasButton }) => {
  return (
    <div className="team-header">
      <div className="team-header__left">
        <h1>{header}</h1>
        <p>{subHeader}</p>
      </div>
      <div className="team-header__right">
        {hasButton && (
          <Button type="primary" shape="round" icon={<PlusOutlined />}>
            <Link to="/add-member">Add</Link>
          </Button>
        )}
      </div>
    </div>
  );
};

export default CardHeader;
