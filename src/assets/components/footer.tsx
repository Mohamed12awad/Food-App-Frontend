import { Box, Container, List, ListItem, Typography } from "@mui/material";
import { CgMail } from "react-icons/cg";
import {
  MdOutlineLocalPhone,
  MdOutlineLocationOff,
  MdOutlineLocationOn,
} from "react-icons/md";
import { SiProbot } from "react-icons/si";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-[#474747]">
      <Container>
        <Box className="grid grid-cols-2 md:grid-cols-3 py-8 gap-5">
          <div className="flex flex-col gap-y-5">
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              className="text-2xl main-font italic mr-3 font-bold no-underline text-inherit text-white"
            >
              <SiProbot
                className="text-xl mr-2 font-bold decoration-[none] text-inherit"
                color="AD343E"
              />
              Bistro Bliss
            </Typography>
            <Typography variant="body2" color="white">
              In the new era of technology we look a in the future with
              certainty and pride to for our company and.
            </Typography>
            <Box className="flex gap-3 ">
              <MdOutlineLocalPhone className="p-1 rounded-full bg-[#AD343E] text-white" />
              <CgMail className="p-1 rounded-full bg-[#AD343E] text-white" />
              <MdOutlineLocationOn className="p-1 rounded-full bg-[#AD343E] text-white" />
              <MdOutlineLocationOff className="p-1 rounded-full bg-[#AD343E] text-white" />
            </Box>
          </div>
          <div className="flex text-white justify-around">
            <List>
              <Typography variant="h6" className="">
                Pages
              </Typography>
              <Link to="/" className="no-underline text-gray-300">
                <ListItem>Home</ListItem>
              </Link>

              <Link to="/" className="no-underline text-gray-300">
                <ListItem>About</ListItem>
              </Link>

              <Link to="/" className="no-underline text-gray-300">
                <ListItem>Pricing</ListItem>
              </Link>

              <Link to="/" className="no-underline text-gray-300">
                <ListItem>Blog</ListItem>
              </Link>

              <Link to="/" className="no-underline text-gray-300">
                <ListItem>Contact</ListItem>
              </Link>

              <Link to="/" className="no-underline text-gray-300">
                <ListItem>Delivery</ListItem>
              </Link>
            </List>
            {/* ---------------------------------------------- */}

            <List>
              <Typography variant="h6" className="">
                Utility Pages
              </Typography>
              <Link to="/" className="no-underline text-gray-300">
                <ListItem>Start Here</ListItem>
              </Link>

              <Link to="/" className="no-underline text-gray-300">
                <ListItem>Styleguide</ListItem>
              </Link>

              <Link to="/" className="no-underline text-gray-300">
                <ListItem>404 Not Found</ListItem>
              </Link>

              <Link to="/" className="no-underline text-gray-300">
                <ListItem>Licenses</ListItem>
              </Link>

              <Link to="/" className="no-underline text-gray-300">
                <ListItem>Changelog</ListItem>
              </Link>

              <Link to="/" className="no-underline text-gray-300">
                <ListItem>View More</ListItem>
              </Link>
            </List>
          </div>
          <div className="text-white col-start-1 md:col-start-3 col-end-3 md:col-end-4">
            <Typography variant="h6">Follow Us On Instagram</Typography>
            <Box className="my-5 grid grid-cols-2 gap-5">
              <div>
                <img
                  src="./imgs/blogs/2.png"
                  className="rounded-lg w-full"
                  alt=""
                />
              </div>
              <div>
                <img
                  src="./imgs/blogs/1.png"
                  className="rounded-lg w-full"
                  alt=""
                />
              </div>
              <div>
                <img
                  src="./imgs/blogs/3.png"
                  className="rounded-lg w-full"
                  alt=""
                />
              </div>
              <div>
                <img
                  src="./imgs/blogs/4.png"
                  className="rounded-lg w-full"
                  alt=""
                />
              </div>
            </Box>
          </div>
        </Box>
        <Typography variant="body1" className="text-white text-center pb-8">
          Copyright © 2024 M-Awad. All Rights Reserved
        </Typography>
      </Container>
    </footer>
  );
}

export default Footer;
