import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { Inicial } from "./pages/Inicial";
import { CustomThemeProvider, useThemeContext } from "./contexts/ThemeContext";

function AppContent() {
  const { mode } = useThemeContext();

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

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Inicial />
    </ThemeProvider>
  );
}

function App() {
  return (
    <CustomThemeProvider>
      <AppContent />
    </CustomThemeProvider>
  );
}

export default App;
