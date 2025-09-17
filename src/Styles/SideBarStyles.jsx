import styled from "styled-components";
import { Layout, Button, Input } from "antd";

const { Header, Content, Sider } = Layout;

export const LayoutWrapper = styled(Layout)`
 
  min-height:100vh;

  .ant-layout {
    background: #f7f4ff !important;
  }
  .ant-layout-header {
    background: #f7f4ff;
  }
`;

export const StyledSider = styled(Sider)`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  z-index: 1000;
  background: #fff;
  
  //display: flex;
  //flex-direction: column;
  //justify-content: space-between !important;
  //height: 100vh;
  //overflow:auto;

  .ant-layout-sider-children {
    background-color: #ffffff;
    display: flex;
    flex-direction: column;
    justify-content: space-between !important;
    height: 100%;
  }
`;

export const SidebarHeader = styled.div`
padding-top:5px;
  display: flex;
  flex-direction: column;
  font-weight: bold;
  background:white;
  margin-left
  
  
`;

export const SidebarTitle = styled.div`
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 0px 10px;
  margin-top: 25px;
  h2 {
    color: black;
    font-family: "Poppins", sans-serif;
    font-weight: 600;
    margin-left: 5px;
  }
`;

export const SidebarLogoWrapper = styled.div`
  width: 37px;
  height: 37px;
  margin-left: 21px;
  margin-bottom: 15px;
  margin-top: 25px;
`;

export const SidebarFooter = styled.div`
  border-top: #060000 2px;
  text-align: center;
  display: flex;
  flex-direction: row;
  margin-top: 10px;
  margin-left: 12px;
`;

export const SidebarUsername = styled.p`
  margin: 20px;
  font-size: 14px;
  font-weight: 500;
  color: #333;
`;

export const StyledHeader = styled(Header)`
 padding: 0 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ themeMode }) => (themeMode ? "#1f1f1f" : "#ffffff")};
  color: ${({ themeMode }) => (themeMode ? "#fff" : "#000")};ffff;

  
`;


export const TriggerBtn = styled(Button)`
  position: absolute;
  top: 50px; /* adjust vertical position */
  right: -16px; /* ✅ half inside, half outside */
  width: 32px;
  height: 32px;
  border-radius: 50%;
  box-shadow: 0 2px 6px rgba(0,0,0,0.15);
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  z-index: 1100;

  &:hover {
    background: #f0f0f0;
  }
`;

export const MainHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const StyledSearch = styled(Input.Search)`
  width: 200px;
`;

export const StyledContent = styled(Content)`
  // transition: margin-left 0.3s ease;
  background: #fafbff;
  color: #000;

  .ant-layout-content {
    padding: 10px !important;
  }
  .ant-tag-green {
    background: rgba(22, 192, 152, 0.38);
    border-color: #008767;
    color: #008767;
  }
  .ant-tag-red {
    border-color: rgba(223, 4, 4, 1);
    color: rgba(223, 4, 4, 1);
    background-color: rgba(255, 197, 197, 1);
  }
  .ant-table-wrapper{
    overflow-y:auto;
  }

  background: ${({ themeMode }) => (themeMode ? "#141414" : "#fafbff")};
  color: ${({ themeMode }) => (themeMode ? "#fff" : "#000")};
`;

export const ContentBox = styled.div`
  min-height: 360px;
  border-radius: 8px;
`;

{
  /*

export const StyledCard = styled.div`
  margin-bottom: 24px;
  width: 100%;

  .stat-card {
    height: 100%;
    padding: 20px;
    border-radius: 16px;
    background: #fff;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-family: "Poppins", sans-serif;
  }

  .stat-icon {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #f0ebff;
    color: #5932ea;
    font-size: 20px;
    margin-bottom: 12px;
  }

  h3 {
    font-size: 14px;
    font-weight: 500;
    color: #9197b3;
    margin: 0;
  }

  h2 {
    font-size: 24px;
    font-weight: 600;
    margin: 4px 0;
  }

  p {
    font-size: 12px;
    margin: 0;
  }

  .positive {
    color: #16c098;
    font-weight: 500;
  }

  .negative {
    color: #ff4d4f;
    font-weight: 500;
  }
  .ant-row {
    padding: 15px;
  }
`;

*/
}

export const StyledCard = styled.div`
  margin-bottom: 24px;
  width: 100%;

  .stats-wrapper {
    display: flex;
    border-radius: 16px;
    background: #fff;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
    overflow: hidden; /* keeps rounded corners clean */
    height: 150px;
  }

  .stat-card {
    flex: 1;
    margin-top: 30px;
    margin-bottom: 30px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    font-family: "Poppins", sans-serif;
    align-items: center;
  }

  .stat-card:not(:last-child) {
    border-right: 1px solid #f0f0f0;
  }

  .stat-icon {
    width: 74px;
    height: 74px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #f0ebff;
    color: #5932ea;
    font-size: 20px;
    margin-right: 10px;
  }
  .stat-text {
    line-height: 22px;
  }

  h3 {
    font-size: 14px;
    font-weight: 500;
    color: #9197b3;
    margin: 0;
  }

  h2 {
    font-size: 24px;
    font-weight: 600;
    margin: 4px 0;
  }

  p {
    font-size: 12px;
    margin: 0;
  }

  .positive {
    color: #16c098;
    font-weight: 500;
  }

  .negative {
    color: #ff4d4f;
    font-weight: 500;
  }
`;

export const GlobalMenuStyles = styled.div`
  .ant-menu-item {
    margin-top: 24px;
    margin-bottom: 24px;
    margin-right: 1px;
    padding-left: 24px !important;
    padding-top: 4.5px !important;
    font-family: "Poppins", sans-serif;
    font-weight: 400;
    font-size: 14px;
    color: #9197b3 !important;
  }

  .ant-menu-item:hover {
    background-color: #5932ea !important;
    color: #fff !important;

    svg > path {
      fill: #fff !important;
    }
  }

  .ant-menu-item-selected {
    background-color: #5932ea !important;
    color: #fff !important;

    svg > path {
      fill: #ffffff !important;
    }
  }

  .ant-menu-submenu-title {
    margin-top: 24px;
    margin-bottom: 24px;
    margin-right: 1px;
    padding-left: 24px !important;
    padding-top: 4.5px !important;
    font-family: "Poppins", sans-serif;
    font-weight: 400;
    font-size: 14px;
    color: #9197b3 !important;
  }

  .ant-menu-submenu-title:hover {
    background-color: #5932ea !important;
    color: #fff !important;
  }

  .ant-menu-submenu-title:hover svg > path {
    fill: #fff !important;
  }

  .ant-menu-submenu-selected .ant-menu-submenu-title {
    background-color: #5932ea !important;
    color: #fff !important;
  }

  .ant-menu-submenu-selected .ant-menu-submenu-title svg > path {
    fill: #fff !important;
  }

  .ant-menu-sub {
    background: #fff !important;
  }

  .ant-menu-sub .ant-menu-item {
    padding-left: 40px !important;
    margin: 8px 0;
    font-size: 13px;
    color: #9197b3 !important;
  }

  .ant-menu-sub .ant-menu-item:hover {
    background-color: #f0ebff !important;
    color: #5932ea !important;
  }

  .ant-menu-sub .ant-menu-item-selected {
    background-color: #e5dbff !important;
    color: #5932ea !important;
  }

  .ant-menu-submenu-arrow {
    right: 16px;
    transition: transform 0.3s ease;
  }
  .ant-menu-submenu-arrow::before,
  .ant-menu-submenu-arrow::after {
    width: 8px;
    transition: all 0.3s;
  }
  .ant-menu-submenu-arrow::before {
    transform: rotate(45deg) translateY(-3px);
  }
  .ant-menu-submenu-arrow::after {
    transform: rotate(-45deg) translateY(3px);
  }
  .ant-menu-submenu-open
    > .ant-menu-submenu-title
    .ant-menu-submenu-arrow::before {
    transform: rotate(-45deg) translateY(-2px);
  }
  .ant-menu-submenu-open
    > .ant-menu-submenu-title
    .ant-menu-submenu-arrow::after {
    transform: rotate(45deg) translateY(2px);
  }
  .ant-menu-sider{
    overflow-y:auto !important;
  }
`;
