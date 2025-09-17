import React from "react";
import { toggleTheme, toggleCollapse  } from "../../Redux/themeSlice.jsx";
import { Switch } from "antd";
import {
  StyledHeader,
  StyledSearch,
} from "../../Styles/SideBarStyles.jsx";
import { useDispatch, useSelector} from "react-redux";

const TheHeader = () => {

   
    
    const dispatch = useDispatch();
    const darkMode = useSelector((state) => state.theme.darkMode);
    const collapsed = useSelector((state) => state.theme.collapsed);
    
    
  return (
    <StyledHeader>
      
      

      
        
        <h2>Hello Musab</h2>
        
        <div style={{display:"flex", justifyContent:"center",alignItems:"center" }}>
        <StyledSearch placeholder="Search..." />
        <Switch
          checked={darkMode}
          onChange={() => dispatch(toggleTheme())}
          checkedChildren="🌙"
          unCheckedChildren="☀️"
        />
        </div>
    </StyledHeader>
  );
};

export default TheHeader;
