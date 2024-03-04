import { Box, Container, Typography, Button } from "@mui/material";
import { CgMail } from "react-icons/cg";
import { MdOutlineLocationOn, MdOutlineLocalPhone } from "react-icons/md";

function Provide() {
  return (
    <section className="relative bg-[#F9F9F7] py-12">
      <Container className="grid grid-flow-row grid-cols-1 md:grid-cols-2 min-h-[500px]">
        <Box className="relative">
          <div className="w-[75%] mb-5 sm:mb-0">
            <img src="./imgs/image1.png" alt="" className="w-full rounded-xl" />
          </div>
          <div className="absolute right-0 bottom-0 bg-[#474747] w-48 h-48 rounded-xl sm:p-8 p-4 text-white">
            <Typography variant="h6" className="mb-3">
              Come and visit us
            </Typography>
            <div className="flex gap-x-3">
              <Box className="flex gap-5 flex-col">
                <MdOutlineLocalPhone />
                <CgMail />
                <MdOutlineLocationOn />
              </Box>
              <Box className="flex gap-3 flex-col">
                <a
                  className="text-sm no-underline text-white"
                  href="tel:(414) 857 - 0107"
                >
                  (414) 857 - 0107
                </a>
                <a
                  href="mailto:yummy@bistrobliss.com"
                  className="text-sm no-underline text-white"
                >
                  yummy@bistrobliss
                </a>
                <address className="text-sm">
                  837 W. Marshall Lane Marshalltown, IA 50158, Los Angeles
                </address>
              </Box>
            </div>
          </div>
        </Box>
        {/* ------------------------------------------- */}
        <Box className="px-12 mt-8 md:mt-0 my-auto">
          <Typography variant="h4" className="main-font font-medium">
            We provide healthy food for your family.
          </Typography>
          <Typography variant="body1" className="my-3">
            Our story began with a vision to create a unique dining experience
            that merges fine dining, exceptional service, and a vibrant
            ambiance. Rooted in city's rich culinary culture, we aim to honor
            our local roots while infusing a global palate.
          </Typography>
          <Typography variant="body2" className="text-gray-500">
            At place, we believe that dining is not just about food, but also
            about the overall experience. Our staff, renowned for their warmth
            and dedication, strives to make every visit an unforgettable event.
          </Typography>
          <Button
            className="capitalize border mt-5 border-black border-solid rounded-full text-black px-5"
            variant="text"
          >
            more about US
          </Button>
        </Box>
      </Container>
    </section>
  );
}

export default Provide;
