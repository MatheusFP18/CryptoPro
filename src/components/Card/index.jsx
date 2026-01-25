import { Box, Button, Typography } from "@mui/material";
import { getCoins } from "../../services/api";
import { useEffect, useState } from "react";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarOutlinedIcon from "@mui/icons-material/StarOutlined";
 
export const Card = ({ isDarkMode }) => {
  const [criptos, setCriptos] = useState([]);
  const [favorites, setFavorites] = useState({});

  useEffect(() => {
    const getData = async () => {
      const data = await getCoins();
      setCriptos(data);
    };
    getData();
  }, []);

  const handleFavorite = (id) => {
    setFavorites((prevFavorites) => ({
      ...prevFavorites,
      [id]: !prevFavorites[id],
    }));
  };

  return (
    <Box
      component="section"
      sx={{ display: "flex", gap: 5, flexWrap: "wrap", mt: 4 }}
    >
      {criptos.map((cripto) => (
        <Box
          key={cripto.id}
          component="div"
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            bgcolor: isDarkMode ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)",
            borderRadius: 2,
            width: "300px",
            p: 2,
            transition: "transform 0.2s ease-in-out",
            "&:hover": { transform: "translate(0px, -5px)" },
          }}
        >
          <Box
            component="div"
            sx={{ display: "flex", justifyContent: "space-between" }}
          >
            <Box component="div" sx={{ display: "flex", gap: 2 }}>
              <img
                src={cripto.image}
                alt={cripto.name}
                style={{ width: "50px" }}
              />
              <Box>
                <Typography
                  variant="h2"
                  sx={{ fontSize: 18, fontWeight: "bold" }}
                >
                  {cripto.name}
                </Typography>
                <Typography>{cripto.symbol}</Typography>
              </Box>
            </Box>
            <Button onClick={() => handleFavorite(cripto.id)} sx={{ "&:hover": { bgcolor: "transparent" }, minWidth: "24px", height: "24px", p: 0 }}>
              {favorites[cripto.id] ? <StarOutlinedIcon sx={{ color: "yellow" }} /> : <StarBorderIcon />}
            </Button>
          </Box>
          <Typography variant="h2" sx={{ fontSize: 22, fontWeight: "bold" }}>
            {" "}
            {cripto.current_price.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};
