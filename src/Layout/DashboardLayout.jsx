import React from "react";
import { Layout } from "antd";
import TheHeader from "../Components/SidebarComponents/StyledHeader.jsx";
import StatsCard from "../Components/SidebarComponents/StatsCard.jsx";
import MainMenu from "../Components/SidebarComponents/SideMenu.jsx";
import { LayoutWrapper } from "../Styles/SideBarStyles.jsx";
import Content from "../Components/SidebarComponents/Content.jsx";
import { useSelector } from "react-redux";

const DashboardLayout = () => {
  const collapsed = useSelector((state) => state.theme.collapsed);
  const darkMode = useSelector((state) => state.theme.darkMode);
  return (
    <LayoutWrapper className={darkMode ? "dark-mode" : "light-mode"}>
      <MainMenu
      // collapsed={collapsed} setCollapsed={setCollapsed}
      />
      

      <Layout
        style={{
          marginLeft: collapsed ? 80 : 300, 
          transition: "margin-left 0.3s ease",
          background: "transparent", 
          padding: "24px",
        }}
      >
       

        <div style={{ maxWidth: "1200px", margin: "0 auto", width: "100%" }}>
        <TheHeader
        // collapsed={collapsed} setCollapsed={setCollapsed}
        />
          <StatsCard />
          <Content />
        </div>
      </Layout>
    </LayoutWrapper>
  );
};

export default DashboardLayout;
