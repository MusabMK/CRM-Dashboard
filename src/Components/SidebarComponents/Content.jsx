import React from "react";
import { theme } from "antd";
import MainRoutes from "../../Routes/MainRoutes.jsx";
import { useSelector } from "react-redux";
import { StyledContent, ContentBox } from "../../Styles/SideBarStyles.jsx";

const Content = () => {
  const darkMode = useSelector((state) => state.theme.darkMode);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <StyledContent
      themeMode={darkMode}
      style={{
        
        minHeight: 280,
        background: colorBgContainer,
        borderRadius: borderRadiusLG,
      }}
    >
      <ContentBox>
        <MainRoutes />
      </ContentBox>
    </StyledContent>
  );
};

export default Content;
