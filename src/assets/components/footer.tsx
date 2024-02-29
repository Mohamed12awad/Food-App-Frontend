import { Box, Container, List, ListItem, Typography } from "@mui/material";
import { CgMail } from "react-icons/cg";
import {
  MdOutlineLocalPhone,
  MdOutlineLocationOff,
  MdOutlineLocationOn,
} from "react-icons/md";
import { SiProbot } from "react-icons/si";

const pages = ["Home", "about", "Pricing", "blogs", "Contact", "Delivery"];
const UtilityPages = [
  "Start Here",
  "Styleguide",
  "404 Not Found",
  "Changelog",
  "Licenses",
  "View More",
];
const instaImgs = [
  "/imgs/blogs/1.png",
  "/imgs/blogs/2.png",
  "/imgs/blogs/3.png",
  "/imgs/blogs/4.png",
];
function Footer() {
  return (
    <footer className="bg-[#474747]">
      <Container>
        <Box className="md:grid md:grid-cols-3 py-8 gap-5">
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
          <div className="flex text-white justify-around my-5 md:my-0">
            <List>
              <Typography variant="h6" className="">
                Pages
              </Typography>
              {pages &&
                pages.map((i, x) => (
                  <a href="#" key={x} className="no-underline text-gray-300">
                    <ListItem>{i}</ListItem>
                  </a>
                ))}
            </List>
            {/* ---------------------------------------------- */}

            <List>
              <Typography variant="h6" className="">
                Utility Pages
              </Typography>
              {UtilityPages &&
                UtilityPages.map((i, x) => (
                  <a href="#" key={x} className="no-underline text-gray-300">
                    <ListItem>{i}</ListItem>
                  </a>
                ))}
            </List>
          </div>
          <div className="text-white col-start-1 md:col-start-3 col-end-3 md:col-end-4">
            <Typography variant="h6">Follow Us On Instagram</Typography>
            <Box className="my-5 grid grid-cols-2 gap-5">
              {instaImgs &&
                instaImgs.map((i, x) => (
                  <a href="#" key={x}>
                    <img src={i} className="rounded-lg w-full" alt="" />
                  </a>
                ))}
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
