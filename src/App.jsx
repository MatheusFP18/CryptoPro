import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { useState, useEffect } from "react";
import { Inicial } from "./Inicial";

function App() {
  const [mode, setMode] = useState(() => {
    const savedMode = localStorage.getItem("themeMode");
    return savedMode ? savedMode : "dark";
  });

  useEffect(() => {
    localStorage.setItem("themeMode", mode);
  }, [mode]);

  const theme = createTheme({
    palette: {
      mode,
      ...(mode === "dark"
        ? {
            background: {
              default: "#0F162A",
              paper: "#1E293B",
            },
            text: {
              primary: "#F8FAFC",
              secondary: "#94A3B8",
            },
            
          }
        : {
            background: {
              default: "#F8FAFC",
              paper: "#FFFFFF",
            },
            text: {
              primary: "#0F162A",
              secondary: "#64748B",
            },
          }),
    },
  });

  const toggleTheme = () => {
    setMode((prevMode) => (prevMode === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <Inicial isDarkMode={mode === "dark"} toggleTheme={toggleTheme} />
      </CssBaseline>
    </ThemeProvider>
  );
}

export default App;
