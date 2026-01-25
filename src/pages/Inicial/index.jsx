import { Container } from "@mui/material";
import { Header } from "../../components/Header";
import { Card } from "../../components/Card";

export const Inicial = ({ isDarkMode, toggleTheme }) => {
  return (
    <Container>
      <Header isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      <Card isDarkMode={isDarkMode} />
    </Container>
  );
};
