import { Container } from "@mui/material";
import { Header } from "../Header";

export const Inicial = ({ isDarkMode, toggleTheme }) => {
  return (
    <Container>
      <Header isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
    </Container>
  );
};
