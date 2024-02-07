import { Box, Container, Typography } from "@mui/material";
import { CgMail } from "react-icons/cg";
import { MdOutlineLocationOn } from "react-icons/md";
import { MdOutlineLocalPhone } from "react-icons/md";

function Testimonials() {
  return (
    <section className="relative my-12 py-12 bg-[#F9F9F7]">
      <Container className="md:grid grid-cols-1 md:grid-cols-2 min-h-[500px]">
        <Box className="grid grid-cols-10  gap-x-3">
          <div className="col-start-1 col-end-7">
            <img
              src="./imgs/testmonials/chef.png"
              className="w-full rounded-lg h-[90%] object-cover"
            />
          </div>
          <div className="col-start-7 col-end-11 flex flex-col gap-y-3 justify-end">
            <img
              src="./imgs/testmonials/sour.png"
              className="w-full rounded-lg h-[55%] object-cover"
            />
            <img
              src="./imgs/testmonials/sadj.png"
              className="w-full rounded-lg h-[35%] object-cover"
            />
          </div>
        </Box>
        {/* ------------------------------------------- */}
        <Box className="px-12 my-12 md:my-auto ">
          <Typography variant="h4" className="main-font font-medium">
            Fastest Food Delivery in City
          </Typography>
          <Typography variant="body2" className="my-3">
            Our visual designer lets you quickly and of drag a down your way to
            customapps for both keep desktop.
          </Typography>

          <Box className="flex gap-3 flex-col">
            <div className="flex gap-x-4">
              <MdOutlineLocalPhone className="p-1 rounded-full bg-[#AD343E] text-white" />
              <Typography variant="body2" className="font-medium">
                Delivery within 30 minutes
              </Typography>
            </div>
            <div className="flex gap-x-4">
              <CgMail className="p-1 rounded-full bg-[#AD343E] text-white" />
              <Typography variant="body2" className="font-medium">
                Best Offer & Prices
              </Typography>
            </div>
            <div className="flex gap-x-4">
              <MdOutlineLocationOn className="p-1 rounded-full bg-[#AD343E] text-white" />
              <Typography variant="body2" className="font-medium">
                Online Services Available
              </Typography>
            </div>
          </Box>
        </Box>
      </Container>
    </section>
  );
}

export default Testimonials;
