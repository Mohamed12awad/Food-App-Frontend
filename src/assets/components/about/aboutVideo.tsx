import { Container, IconButton, Typography } from "@mui/material";
import { IoIosPlay } from "react-icons/io";

function AboutVideo() {
  return (
    <section>
      <div className="relative">
        <video className="w-full h-96" controls muted>
          <source src="cat.mp4" />
        </video>
        <Container>
          <div className="about-video-view absolute content-none top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2  h-full w-full flex flex-col justify-center align-middle">
            <IconButton aria-label="play" className="mx-auto">
              <IoIosPlay className="bg-white text-4xl rounded-full p-2 text-rose-500" />
            </IconButton>
            <Typography
              variant="h3"
              className="main-font text-center"
              color="white"
            >
              Feel the authentic & <br /> original taste from us
            </Typography>
          </div>
        </Container>
      </div>
    </section>
  );
}

export default AboutVideo;
