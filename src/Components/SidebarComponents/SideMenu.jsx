import React from "react";
import { Menu, theme, Avatar } from "antd";
import { UserOutlined, MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { useNavigate, useLocation } from "react-router-dom";
import menuItems from "../../utils/MenuItems.jsx";
import { toggleCollapse } from "../../Redux/themeSlice.jsx";
import SidebarLogo from "../../assets/setting 1.svg?react";
import { useDispatch, useSelector } from "react-redux";

import {
  StyledSider,
  SidebarTitle,
  SidebarLogoWrapper,
  SidebarFooter,
  SidebarUsername,
  GlobalMenuStyles,
  TriggerBtn
} from "../../Styles/SideBarStyles.jsx";

const MainMenu = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const collapsed = useSelector((state) => state.theme.collapsed);

  return (
    <StyledSider
      trigger={null}
      collapsible
      collapsed={collapsed}
      collapsedWidth={80}
      width={300}
    >
      {/* --- Sidebar Header --- */}
      {collapsed ? (
        <SidebarLogoWrapper>
          <SidebarLogo aria-label="Logo" />
        </SidebarLogoWrapper>
      ) : (
        <SidebarTitle>
          <SidebarLogo aria-label="Logo" />
          <h2>Dashboard</h2>
        </SidebarTitle>
      )}

      {/* ✅ Always render collapse button */}
      <TriggerBtn
    icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
    onClick={() => dispatch(toggleCollapse())}
  />

      {/* --- Menu --- */}
      <GlobalMenuStyles>
        <Menu
          theme="light"
          mode="inline"
          selectedKeys={[location.pathname]}
          items={menuItems}
          onClick={({ key }) => navigate(key)}
        />
      </GlobalMenuStyles>

      {/* --- Footer --- */}
      <SidebarFooter>
        <Avatar size={48} icon={<UserOutlined />} />
        {!collapsed && <SidebarUsername>Musab</SidebarUsername>}
      </SidebarFooter>
    </StyledSider>
  );
};

export default MainMenu;
