import React, { useState } from "react";
import "./App.css";
import Main from "./containers/Main";
import { ThemeProvider } from "styled-components";
import { blackTheme } from "./theme";
import { GlobalStyles } from "./global";

function App() {
  const userTheme = localStorage.getItem("portfolioTheme")
    ? JSON.parse(localStorage.getItem("portfolioTheme"))
    : blackTheme;
  const [theme, settheme] = useState(userTheme);
  const getTheme = (theme) => {
    settheme(theme);
  };
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <div>
          <Main getTheme={getTheme} theme={theme} />
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
