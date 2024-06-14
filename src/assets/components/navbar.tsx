import * as React from "react";
import { CiMenuFries as MenuIcon } from "react-icons/ci";
import { SiProbot as AdbIcon } from "react-icons/si";
import { Link } from "react-router-dom";
import { useAuth } from "../context/auth";
import { FaUserAstronaut } from "react-icons/fa";
import {
  ListItemIcon,
  Menu,
  MenuItem,
  Box,
  Toolbar,
  AppBar,
  IconButton,
  Typography,
  Container,
  Button,
  Tooltip,
  SwipeableDrawer,
  List,
} from "@mui/material";
import { BiLogOutCircle } from "react-icons/bi";
import { FcSettings } from "react-icons/fc";

const pages = [
  { name: "Home", to: "/" },
  { name: "about", to: "/about" },
  { name: "menu", to: "/menu" },
  { name: "blogs", to: "/blogs" },
  { name: "contact", to: "/contact-us" },
];
// const settings = ["Profile", "Account", "Dashboard", "Logout"];

function ResponsiveAppBar() {
  const { isAuthenticated, signOut } = useAuth();
  const userState = isAuthenticated();

  const [drawer, setDrawer] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

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
              component={Link}
              to="/"
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
              <Tooltip title={userState ? "Book A Table" : "Sign UP"}>
                <Button
                  component={Link}
                  to={userState ? "/book-table" : "/signup"}
                  className="capitalize hidden md:inline-flex border border-black border-solid rounded-full text-black px-5"
                  variant="text"
                >
                  {userState ? "book a table" : "Sign Up"}
                </Button>
              </Tooltip>
              {userState && (
                <Tooltip title={"Dashboard"}>
                  <IconButton
                    onClick={handleClick}
                    aria-controls={open ? "account-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                    className="capitalize ms-3 border border-black border-solid rounded-full text-black"
                  >
                    <FaUserAstronaut />
                  </IconButton>
                </Tooltip>
              )}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem onClick={handleClose} component={Link} to="/dashboard">
          <ListItemIcon>
            <FcSettings />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem onClick={signOut} component={Link} to="/dashboard">
          <ListItemIcon>
            <BiLogOutCircle />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>

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
            component={Link}
            to="/"
            sx={{ textDecoration: "none", color: "#000" }}
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
