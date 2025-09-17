import React from "react";
import { StyledCard } from "../../Styles/SideBarStyles";
import { UserOutlined, TeamOutlined, ThunderboltOutlined } from "@ant-design/icons";

const StatsCard = () => {
  return (
    <StyledCard>
      <div className="stats-wrapper">
        <div className="stat-card">
          <div className="stat-icon">
            <UserOutlined />
          </div>
          <div className="stat-text">
          <h3>Total Customers</h3>
          <h2>5,423</h2>
          <p className="positive">+16% this month</p>
          </div>
        </div>

        <div className="stat-card">
          <div
            className="stat-icon"
            style={{ background: "#e6f7ff", color: "#1890ff" }}
          >
            <TeamOutlined />
          </div>
          <div className="stat-text">
          <h3>Members Today</h3>
          <h2>1,893</h2>
          <p className="negative">-1% this month</p>
          </div>
        </div>

        <div className="stat-card">
          <div
            className="stat-icon"
            style={{ background: "#fff7e6", color: "#fa8c16" }}
          >
            <ThunderboltOutlined />
          </div>
          <div className="stat-text">
          <h3>Active Now</h3>
          <h2>189</h2>
          <p>Currently online</p>
          </div>
        </div>
      </div>
    </StyledCard>
  );
};

export default StatsCard;