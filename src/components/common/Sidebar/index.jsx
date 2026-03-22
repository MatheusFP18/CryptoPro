import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { useState } from "react";
import Logo from "../../../assets/images/favicon.png";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import ShowChartIcon from "@mui/icons-material/ShowChart";

const drawerWidth = 240;

export const Sidebar = () => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("Dashboard");

  const toggleSidebar = () => {
    setOpen(!open);
  };

  const currentWidth = open ? drawerWidth : 64;

  const transitionStyle = {
    transition: theme.transitions.create(
      ["margin", "opacity", "padding", "background", "border"],
      {
        easing: theme.transitions.easing.sharp,
        duration: open
          ? theme.transitions.duration.enteringScreen
          : theme.transitions.duration.leavingScreen,
      },
    ),
  };

  const iconSx = (isActive) => ({
    minWidth: 0,
    mr: open ? 3 : 0,
    justifyContent: "center",
    color: isActive ? "#3713EC" : "#FFFFFF",
    ...transitionStyle,
    "&:hover": {
      color: "#3713EC",
    },
  });

  const getListItemButtonStyle = (itemLabel) => {
    const isActive = activeItem === itemLabel;
    return {
      minHeight: 48,
      justifyContent: open ? "initial" : "center",
      px: 2.5,
      borderLeft: "4px solid transparent",
      background: "transparent",
      ...transitionStyle,
      "&:hover": {
        background:
          "linear-gradient(90deg, rgba(55, 19, 236, 0.4) 0%, rgba(55, 19, 236, 0) 100%)",
        borderLeft: "4px solid #3713EC",
      },
      ...(isActive && {
        background:
          "linear-gradient(90deg, rgba(55, 19, 236, 0.4) 0%, rgba(55, 19, 236, 0) 100%)",
        borderLeft: "4px solid #3713EC",
      }),
    };
  };

  const menuItems = [
    { label: "Dashboard", icon: <DashboardIcon /> },
    { label: "Carteira", icon: <AccountBalanceWalletIcon /> },
    { label: "Mercado", icon: <ShowChartIcon /> },
  ];

  return (
    <Box sx={{ display: "flex" }}>
      <Drawer
        variant="permanent"
        open={open}
        sx={{
          width: currentWidth,
          flexShrink: 0,
          whiteSpace: "nowrap",
          boxSizing: "border-box",
          "& .MuiDrawer-paper": {
            bgcolor: "#FFFFFF00",
            width: currentWidth,
            overflowX: "hidden",
            transition: theme.transitions.create("width", {
              easing: theme.transitions.easing.sharp,
              duration: open
                ? theme.transitions.duration.enteringScreen
                : theme.transitions.duration.leavingScreen,
            }),
          },
        }}
      >
        <List>
          <ListItem disablePadding sx={{ display: "block" }}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon sx={iconSx(false)}>
                <Box
                  component="img"
                  src={Logo}
                  alt="Logo"
                  sx={{ width: 24, height: 24, borderRadius: 2 }}
                />
              </ListItemIcon>
              <ListItemText
                primary="CryptoPro"
                sx={{ opacity: open ? 1 : 0, ...transitionStyle }}
                primaryTypographyProps={{ variant: "h6", fontWeight: "bold" }}
              />
            </ListItemButton>
          </ListItem>
        </List>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: open ? "flex-start" : "center",
            px: open ? 1.5 : 0,
            ...transitionStyle,
            ...theme.mixins.toolbar,
          }}
        >
          <IconButton onClick={toggleSidebar}>
            {open ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </Box>

        <Divider />

        <List>
          {menuItems.map((item) => (
            <ListItem key={item.label} disablePadding sx={{ display: "block" }}>
              <ListItemButton
                onClick={() => setActiveItem(item.label)}
                sx={getListItemButtonStyle(item.label)}
              >
                <ListItemIcon sx={iconSx(activeItem === item.label)}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.label}
                  sx={{
                    opacity: open ? 1 : 0,
                    ...transitionStyle,
                    color: "#fff",
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
};
