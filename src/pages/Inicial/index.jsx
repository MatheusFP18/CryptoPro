import { Container, Divider } from "@mui/material";
import { Header } from "../../components/Header";
import { SectionMain } from "../../components/SectionMain";

export const Inicial = ({ isDarkMode, toggleTheme }) => {
  return (
    <Container>
      <Header isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      <Divider />
      <SectionMain isDarkMode={isDarkMode} />
    </Container>
  );
};
