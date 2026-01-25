import { Box, Typography, useTheme } from "@mui/material";
import { TrendingUp, Sun, Moon } from "lucide-react";

export const Header = ({ isDarkMode, toggleTheme }) => {
  const theme = useTheme();

  return (
    <Box
      component="header"
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottom: 1
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 3,
          p: 3,
        }}
      >
        <Box
          component="div"
          sx={{
            bgcolor: "#2563EB",
            p: 1,
            borderRadius: 2,
            width: 40,
            height: 40,
          }}
        >
          <TrendingUp size={24} color="#FFFFFF" />
        </Box>
        <Typography variant="h1" sx={{ fontSize: 24, fontWeight: "bold" }}>
          CryptoPro
        </Typography>
      </Box>

      <Box
        onClick={toggleTheme}
        sx={{
          cursor: "pointer",
          p: 1,
          borderRadius: 5,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transition: "background-color 0.3s",
          "&:hover": {
            bgcolor: theme.palette.action.hover,
          },
        }}
      >
        {isDarkMode ? <Sun size={24} /> : <Moon size={24} />}
      </Box>
    </Box>
  );
};
