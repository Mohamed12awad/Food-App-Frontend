import { Box, Container, Typography } from "@mui/material";
import { useEffect } from "react";
import ContactUsForm from "../components/contactUS/contactUsForm";

function ContactUs() {
  useEffect(() => {
    document.title = "Contact-US";
  });
  return (
    <Box className="bg-[#F9F9F7]">
      <Container className="pb-16">
        <Box className="text-center py-12">
          <Typography variant="h3" className="main-font">
            Contact Us
          </Typography>
          <Typography variant="body2" className="text-[#495460] mt-3">
            We consider all the drivers of change gives you the components you
            need to change to create a truly happens.
          </Typography>
        </Box>
        <ContactUsForm />
        <div className="mt-12 mx-auto text-center">
          <img src="/info.svg" className="w-3/4 md:w-1/2" />
        </div>
      </Container>
    </Box>
  );
}

export default ContactUs;
