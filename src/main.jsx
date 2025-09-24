import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";

import { Provider, useSelector } from "react-redux";
import store from "./store/store.jsx";
import { lightTheme, darkTheme } from "./themeconfig.jsx";
import { ConfigProvider } from "antd";

const ThemedApp = () => {
  const darkMode = useSelector((state) => state.theme.darkMode);

  return (
    <ConfigProvider theme={darkMode ? darkTheme : lightTheme}>
      <App /> {/* ✅ App still works here */}
    </ConfigProvider>
  );
};

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <StrictMode>
        <ThemedApp /> {/* ✅ wrap App with theming */}
      </StrictMode>
    </BrowserRouter>
  </Provider>
);