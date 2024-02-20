import { Box, Container, Typography } from "@mui/material";

const AboutInfoItemData = [
  { title: "3", sub: "locations" },
  { title: "1995", sub: "Founded" },
  { title: "65+", sub: "Staff Members" },
  { title: "100%", sub: "Satisfied Customers" },
];

interface AboutInfoItemProps {
  title: string;
  sub: string;
}
const AboutInfoItem: React.FC<AboutInfoItemProps> = ({ title, sub }) => (
  <div className="p-5 feed text-center bg-white rounded border border-solid border-[#DBDFD0]">
    <Typography variant="h4" className="main-font">
      {title}
    </Typography>
    <Typography variant="body2" className="mt-3">
      {sub}
    </Typography>
  </div>
);

function AboutInfo() {
  return (
    <Box component="section" className="mb-8 bg-[#F9F9F7]">
      <Container className="grid gap-x-12 items-center md:grid-cols-2">
        <div className="right md:px-5">
          <Typography variant="h4" className="main-font text-3xl lg:text-4xl">
            A little information for our valuable guest
          </Typography>
          <Typography variant="body2" className="mt-5 text-sm lg:text-base">
            At place, we believe that dining is not just about food, but also
            about the overall experience. Our staff, renowned for their warmth
            and dedication, strives to make every visit an unforgettable event.
          </Typography>
          <div className="feeds grid gap-5 grid-cols-2 my-8">
            {AboutInfoItemData &&
              AboutInfoItemData.map((i) => (
                <AboutInfoItem title={i.title} sub={i.sub} />
              ))}
          </div>
        </div>
        <div className="left lg:px-12 h-[80%] flex justify-center ">
          <img
            src="./imgs/healthy.png"
            className="w-full rounded-xl  object-cover"
            alt=""
          />
        </div>
      </Container>
    </Box>
  );
}

export default AboutInfo;
