import { Box, Button, Divider, TextField, Typography } from "@mui/material";
import { Card } from "../Card";
import { getCoins } from "../../services/api";
import { useEffect, useState } from "react";

export const SectionMain = ({ isDarkMode }) => {
  const [criptos, setCriptos] = useState([]);
  const [filteredCriptos, setFilteredCriptos] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const data = await getCoins();
      setCriptos(data);
      setFilteredCriptos(data);
    };
    getData();
  }, []);

  const handleUpdatePrices = async () => {
    const data = await getCoins();
    setCriptos(data);
    setFilteredCriptos(data);
  };

  const searchCrypto = (e) => {
    const value = e.target.value.toLowerCase();
    if (value === "") {
      setFilteredCriptos(criptos);
    } else {
      const filtered = criptos.filter(
        (coin) =>
          coin.name.toLowerCase().includes(value) ||
          coin.symbol.toLowerCase().includes(value),
      );
      setFilteredCriptos(filtered);
    }
  };

  return (
    <Box component="section" sx={{ mt: 4 }}>
      <Box
        component="div"
        sx={{ display: "flex", justifyContent: "space-between", mb: 4 }}
      >
        <TextField
          onChange={searchCrypto}
          label="Buscar"
          variant="outlined"
          sx={{ width: "300px" }}
        />
        <Button variant="contained" onClick={handleUpdatePrices}>
          Atualizar Preços
        </Button>
      </Box>
      <Divider />
      <Box component="div" sx={{ mt: 4 }}>
        <Typography variant="h2" sx={{ fontSize: 22, fontWeight: "bold" }}>
          Mercado em Tempo Real
        </Typography>
        <Card isDarkMode={isDarkMode} criptos={filteredCriptos} />
      </Box>
    </Box>
  );
};
