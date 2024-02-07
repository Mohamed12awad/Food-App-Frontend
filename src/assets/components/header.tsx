import { Box, Container, Typography, Tooltip, Button } from "@mui/material";
// import bgImage from "./../imgs/head.svg";

function Header() {
  return (
    <Box className="bg-[url('./imgs/head.svg')] h-[80vh] bg-cover bg-center">
      <Container className="flex flex-col justify-center align-middle h-full">
        <Typography
          variant="h2"
          className="tracking-wide text-center main-font"
        >
          Best food for
          <br /> your taste
        </Typography>
        <Typography variant="body1" className="text-center my-5">
          Discover delectable cuisine and unforgettable moments
          <br /> in our welcoming, culinary haven.
        </Typography>
        <Box className="gap-x-3 flex justify-center">
          <Tooltip title="Open settings">
            <Button
              className="capitalize bg-[#AD343E] rounded-full px-5"
              variant="contained"
            >
              book a table
            </Button>
          </Tooltip>
          <Tooltip title="Open settings">
            <Button
              className="capitalize border border-black border-solid rounded-full text-black px-5"
              variant="text"
            >
              expolre menu
            </Button>
          </Tooltip>
        </Box>
      </Container>
    </Box>
  );
}

export default Header;
