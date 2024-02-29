import { Box, Container, Typography } from "@mui/material";

function MainMenuInfo() {
  return (
    <Box>
      <Container className="grid grid-cols-3 my-12 gap-y-8">
        <div className="col-span-3 md:col-span-1 flex flex-col justify-center items-center gap-y-8">
          <Typography variant="h3" className="main-font font-medium">
            You can order through apps
          </Typography>
          <Typography variant="body2">
            Lorem ipsum dolor sit amet consectetur adipiscing elit enim bibendum
            sed et aliquet aliquet risus tempor semper.
          </Typography>
        </div>
        <Box className="col-span-3 md:col-span-2 ">
          <img src="/imgs/logo.png" className="w-full " />
        </Box>
      </Container>
    </Box>
  );
}

export default MainMenuInfo;
