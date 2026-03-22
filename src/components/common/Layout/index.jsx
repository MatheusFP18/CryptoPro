import { Box, Container, Divider } from "@mui/material";
import { Header } from "../../Header";
import { Sidebar } from "../Sidebar";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <Container sx={{ display: "flex" }}>
      <Sidebar />
      <Box sx={{ flexGrow: 1 }}>
        <Header />
        <Divider />
        <Box component="main">
          <Outlet />
        </Box>
      </Box>
    </Container>
  );
};
