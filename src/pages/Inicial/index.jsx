import { Box, Container, Divider } from "@mui/material";
import { Header } from "../../components/Header";
import { SectionMain } from "../../components/SectionMain";
import { Sidebar } from "../../components/common/Sidebar";

export const Inicial = () => {
  return (
    <Container sx={{ display: "flex"}}>
      <Sidebar />
      <Box>
      <Header />
      <Divider />
      <SectionMain />
      </Box>
    </Container>
  );
};
