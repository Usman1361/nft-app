import React, { useState } from "react";
import {
  AppBar,
  Box,
  Button,
  Container,
  Drawer,
  IconButton,
  InputAdornment,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { logo } from "./SmallComponent/images.jsx";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
export const drawerWidth = 240;
const navItems = ["Home", "Explore", "Pages", "ContactUs"];
function Header(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{
        textAlign: "center",
        marginTop: "20px",
        justifyContent: "space-around",
      }}
    >
      <List>
        {navItems.map((item, i) => (
          <ListItem key={item}>
            <ListItemButton
              sx={{
                textAlign: "center",
                justifyContent: "center",
                color: "#FFFFFF",
              }}
            >
              {i === 0 && (
                <Link
                  to="/"
                  style={{ textDecoration: "none", color: "#FFFFFF" }}
                >
                  <ListItemText primary={item} />
                </Link>
              )}
              {i === 1 && (
                <Link
                  to="/explore"
                  style={{ textDecoration: "none", color: "#FFFFFF" }}
                >
                  <ListItemText primary={item} />
                </Link>
              )}
              {i != -0 && i !== 1 && (
                <Link
                  to="/working"
                  style={{ textDecoration: "none", color: "#FFFFFF" }}
                >
                  <ListItemText primary={item} />
                </Link>
              )}
            </ListItemButton>
          </ListItem>
        ))}
        <Button
          mt={{ xs: 5, md: 0 }}
          variant="contained"
          size="small"
          sx={{
            background: "linear-gradient( #FDAE8F , #FD1C68 )",
            padding: "10px",
            borderRadius: "8px",
          }}
        >
          <AccountBalanceWalletIcon sx={{ edge: "start" }} />
          <Link
            to="/working"
            style={{ textDecoration: "none", color: "#FFFFFF" }}
          >
            Connect Wallet
          </Link>
        </Button>
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <Box sx={{ bgcolor: "#121212" }}>
        <Container maxWidth="xl">
          <AppBar
            sx={{ boxShadow: "none", position: "static", bgcolor: "#121212" }}
          >
            <Toolbar>
              <Box sx={{ flexGrow: 1, display: "flex" }}>
                <Box
                  component="img"
                  src={logo}
                  width={50}
                  height={{ xs: 30, md: 50 }}
                  alt="logo"
                />
                <Typography
                  mt={{ xs: 1, md: 2 }}
                  variant={{ xs: "body2", md: "h5" }}
                  sx={{
                    color: "#FFFFFF",
                    fontFamily: " Urbanist",
                    fontWeight: 700,
                    fontStyle: "normal",
                  }}
                >
                  Ultra NFT
                </Typography>
                <Box
                  ml={3}
                  mt={1}
                  sx={{ display: { xs: "none", md: "block" } }}
                >
                  <TextField
                    size="small"
                    variant="outlined"
                    placeholder="Search"
                    sx={{ backgroundColor: "#8393AF", borderRadius: "8px" }}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <SearchIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Box>
              </Box>

              <Box sx={{ display: { xs: "none", md: "block" } }}>
                {navItems.map((item, i) => (
                  <Button
                    key={item}
                    sx={{
                      mx: 2,
                      color: "#FFFFFF",
                      fontFamily: " Urbanist",
                      fontWeight: 700,
                    }}
                  >
                    {i == 0 && (
                      <Link
                        to="/"
                        style={{ textDecoration: "none", color: "#FFFFFF" }}
                      >
                        {item}
                      </Link>
                    )}
                    {i == 1 && (
                      <Link
                        to="/explore"
                        style={{ textDecoration: "none", color: "#FFFFFF" }}
                      >
                        {item}
                      </Link>
                    )}
                    {i != 0 && i != 1 && (
                      <Link
                        to="/working"
                        style={{ textDecoration: "none", color: "#FFFFFF" }}
                      >
                        {item}
                      </Link>
                    )}
                  </Button>
                ))}
                <Button
                  variant="contained"
                  size="small"
                  sx={{
                    background: "linear-gradient( #FDAE8F , #FD1C68 )",
                    padding: "10px",
                    borderRadius: "8px",
                  }}
                >
                  <AccountBalanceWalletIcon sx={{ edge: "start" }} />
                  <Link
                    to="/working"
                    style={{ textDecoration: "none", color: "#FFFFFF" }}
                  >
                    Connect Wallet
                  </Link>
                </Button>
              </Box>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="end"
                onClick={handleDrawerToggle}
                sx={{
                  display: { sm: "block", md: "none" },
                  color: "white",
                }}
              >
                <MenuIcon />
              </IconButton>
              <Box sx={{ display: { xs: "block", md: "none" } }}>
                <Drawer
                  container={container}
                  variant="temporary"
                  anchor="right"
                  open={mobileOpen}
                  onClose={handleDrawerToggle}
                  ModalProps={{
                    keepMounted: true,
                  }}
                  sx={{
                    "& .MuiDrawer-paper": {
                      boxSizing: "border-box",
                      width: drawerWidth,
                      bgcolor: "#121212",
                    },
                  }}
                >
                  <Box>
                    <IconButton
                      sx={{
                        display: "inline",
                        float: "right",
                      }}
                      onClick={() => setMobileOpen(!mobileOpen)}
                    >
                      <CloseIcon sx={{ color: "white" }} />
                    </IconButton>
                  </Box>
                  {drawer}
                </Drawer>
              </Box>
            </Toolbar>
          </AppBar>
        </Container>
      </Box>
    </>
  );
}

export default Header;
