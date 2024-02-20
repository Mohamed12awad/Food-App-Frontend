import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { CiMenuFries as MenuIcon } from "react-icons/ci";

import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import { SiProbot as AdbIcon } from "react-icons/si";

import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import List from "@mui/material/List";
import { Link } from "react-router-dom";

const pages = [
  { name: "Home", to: "/" },
  { name: "about", to: "/about" },
  { name: "Products", to: "/" },
  { name: "Pricing", to: "/" },
  { name: "Blog", to: "/" },
];
// const settings = ["Profile", "Account", "Dashboard", "Logout"];

function ResponsiveAppBar() {
  const [drawer, setDrawer] = React.useState(false);

  const handleOpenDrawer = () => {
    setDrawer(true);
  };
  const handleCloseDrawer = () => {
    setDrawer(false);
  };
  const iOS =
    typeof navigator !== "undefined" &&
    /iPad|iPhone|iPod/.test(navigator.userAgent);

  return (
    <React.Fragment>
      <AppBar
        position="sticky"
        color="transparent"
        className="backdrop-blur-lg shadow-sm transition-colors duration-500 bg-white/80 supports-backdrop-blur:bg-white/95 "
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <AdbIcon
              className="hidden md:flex text-xl mr-2 font-bold decoration-[none] text-inherit"
              color="AD343E"
            />
            <Typography
              variant="h6"
              noWrap
              component={Link}
              to="/"
              className="hidden md:flex text-2xl  main-font italic mr-3 font-bold no-underline text-inherit"
            >
              Bistro Bliss
            </Typography>
            <Box className="flex-grow sm:flex md:hidden">
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenDrawer}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
            </Box>

            <Typography
              variant="h5"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              className="flex text-xl main-font italic md:hidden mr-2 flex-grow  font-bold tracking-wide no-underline"
              color="inherit"
            >
              <AdbIcon
                className="sm:flex md:hidden me-2 text-xl"
                color="AD343E"
              />
              Bistro Bliss
            </Typography>
            <Box className="flex-grow hidden md:flex justify-center">
              {pages.map((page) => (
                <Button
                  key={page.name}
                  component={Link}
                  to={page.to}
                  className="block text-black capitalize rounded-full"
                  variant="text"
                  color="info"
                >
                  {page.name}
                </Button>
              ))}
            </Box>
            <Box>
              <Tooltip title="Open settings">
                <Button
                  className="capitalize border border-black border-solid rounded-full text-black px-5"
                  variant="text"
                >
                  book a table
                </Button>
              </Tooltip>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        anchor="left"
        open={drawer}
        onClose={handleCloseDrawer}
        onOpen={() => {}}
      >
        <Box sx={{ padding: "20px", textDecoration: "none" }}>
          <Typography
            variant="h6"
            noWrap
            className="hidden md:flex text-2xl main-font italic mr-3 font-bold no-underline text-inherit"
          >
            <AdbIcon
              className="hidden md:flex text-xl me-2 font-bold decoration-[none] text-inherit"
              color="AD343E"
            />
            Bistro Bliss
          </Typography>

          <List>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                margin: "20px 0",
              }}
            >
              {pages.map((page) => (
                <Button
                  onClick={handleCloseDrawer}
                  key={page.name}
                  component={Link}
                  to={page.to}
                  sx={{ display: "block", color: "black" }}
                  variant="text"
                >
                  {page.name}
                </Button>
              ))}
            </Box>
          </List>
        </Box>
      </SwipeableDrawer>
    </React.Fragment>
  );
}
export default ResponsiveAppBar;
