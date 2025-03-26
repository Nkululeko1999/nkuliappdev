import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { GitHub, LinkedIn, Facebook, Menu } from "@mui/icons-material";
import { Link } from "react-router-dom";

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const navItems = [
    "Home",
    "About",
    "Projects",
    "Experience",
    "Skills",
    "Services",
  ];
  const icons = [
    { icon: <GitHub />, link: "https://github.com/" },
    { icon: <LinkedIn />, link: "https://linkedin.com/" },
    { icon: <Facebook />, link: "https://facebook.com/" },
  ];

  // For responsiveness
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: "inherit", boxShadow: "none", px: 1 }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* Logo with custom font */}
        <Typography
          variant="h6"
          sx={{
            fontWeight: "bold",
            fontFamily: "'Poppins', sans-serif",
            fontSize: 20,
          }}
        >
          NkuliAppDev
        </Typography>

        {/* Navigation Links for large screens */}
        {!isMobile && (
          <Box display="flex" gap={2}>
            {navItems.map((item) => (
              <Link
                key={item}
                to={`/${item.toLowerCase()}`}
                style={{
                  fontFamily: "'Roboto', sans-serif",
                  fontWeight: 300,
                  fontSize: 14,
                  textTransform: "capitalize",
                  color: "#fff",
                  textDecoration: "none", // Ensures no underline
                  padding: "6px 12px", // Adds spacing around links
                  transition: "color 0.3s",
                }}
                onMouseEnter={(e) => (e.target.style.color = "#00bcd4")}
                onMouseLeave={(e) => (e.target.style.color = "#fff")}
              >
                {item}
              </Link>
            ))}
          </Box>
        )}

        {/* Social Media Icons and Hamburger Menu on mobile */}
        <Box display="flex" gap={1} alignItems="center">
          {icons.map(({ icon, link }, index) => (
            <IconButton key={index} color="inherit" href={link} target="_blank">
              {icon}
            </IconButton>
          ))}

          {isMobile && (
            <IconButton color="inherit" onClick={toggleDrawer}>
              <Menu />
            </IconButton>
          )}
        </Box>
      </Toolbar>

      {/* Drawer for mobile navigation */}
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer}>
        <Box
          sx={{
            width: 250,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "20px",
            backgroundColor: "#000512", 
            height: "100%",
          }}
        >
          <List>
            {navItems.map((item) => (
              <ListItem button key={item} onClick={toggleDrawer}>
                <ListItemText
                  primary={
                    <Link
                      to={`/${item.toLowerCase()}`}
                      style={{
                        color: "#fff",
                        textDecoration: "none",
                        textTransform: "capitalize",
                      }}
                    >
                      {item}
                    </Link>
                  }
                />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </AppBar>
  );
};

export default Header;
