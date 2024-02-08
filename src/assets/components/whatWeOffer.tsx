import { Box, Container, Typography } from "@mui/material";
import { Link } from "react-router-dom";

interface SingleCardProps {
  src: string;
  title: string;
  content: string;
}

const offersData: SingleCardProps[] = [
  {
    src: "./imgs/whatWeOffer/kebab.png",
    title: "Caterings",
    content:
      "In the new era of technology we look in the future with certainty for life.",
  },
  {
    src: "./imgs/whatWeOffer/sara.jpg",
    title: "Birthdays",
    content:
      "In the new era of technology we look in the future with certainty for life.",
  },
  {
    src: "./imgs/whatWeOffer/happy.png",
    title: "Weddings",
    content:
      "In the new era of technology we look in the future with certainty for life.",
  },
  {
    src: "./imgs/whatWeOffer/friends.png",
    title: "Birthdays",
    content:
      "In the new era of technology we look in the future with certainty for life.",
  },
];

const SingleCard: React.FC<SingleCardProps> = ({ src, title, content }) => {
  return (
    <Box>
      <Link to="/" className="no-underline text-black">
        <div>
          <img
            src={src}
            alt=""
            className="w-full h-64 rounded-lg object-cover"
          />
        </div>
        <Typography variant="h5" className="my-5 font-medium">
          {title}
        </Typography>
        <Typography variant="body2">{content}</Typography>
      </Link>
    </Box>
  );
};

function WhatWeOffer() {
  return (
    <Box>
      <Container>
        <Typography variant="h4" className="main-font text-left my-12 ">
          We also offer unique
          <br /> services for your events
        </Typography>

        <Box className="grid grid-cols-2 md:grid-cols-4 justify-around gap-5">
          {offersData &&
            offersData.map((item, index) => (
              <SingleCard
                src={item.src}
                title={item.title}
                content={item.content}
                key={index}
              />
            ))}
        </Box>
      </Container>
    </Box>
  );
}

export default WhatWeOffer;
