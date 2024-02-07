import { Box, Container, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { MdOutlineEmojiFoodBeverage } from "react-icons/md";
import { PiBowlFood } from "react-icons/pi";
import { LuGlassWater, LuCakeSlice } from "react-icons/lu";

const browseData = [
  {
    title: "Breakfast",
    desc: "In the new era of technology we look in the future with certainty and pride for our life.",
    icon: MdOutlineEmojiFoodBeverage,
  },
  {
    title: "Main Dishes",
    desc: "In the new era of technology we look in the future with certainty and pride for our life.",
    icon: PiBowlFood,
  },
  {
    title: "Drinks",
    desc: "In the new era of technology we look in the future with certainty and pride for our life.",
    icon: LuGlassWater,
  },
  {
    title: "Desserts",
    desc: "In the new era of technology we look in the future with certainty and pride for our life.",
    icon: LuCakeSlice,
  },
];
function BrowseMenu() {
  return (
    <Box className="my-5 relative">
      <Container>
        <Typography variant="h3" className="main-font text-center pt-5">
          Browse Our Menu
        </Typography>
        <Typography variant="body1" className=" text-center pt-3">
          We consider all the drivers of change gives you the components you
          need to change to create a truly happens.
        </Typography>
        <Box className="flex gap-x-3 flex-wrap md:flex-nowrap justify-center">
          {browseData &&
            browseData.map((i, x) => (
              <BrowseMenuItem
                title={i.title}
                desc={i.desc}
                icon={i.icon}
                key={x}
              />
            ))}
        </Box>
      </Container>
    </Box>
  );
}

const BrowseMenuItem = ({ title, desc, icon }) => {
  const renderIcon = (iconName) => {
    const Icon = iconName;
    return (
      <Icon className="text-3xl mx-auto my-3 p-3 rounded-full bg-[#DBDFD0] text-[#474747]" />
    );
  };
  return (
    <Box className="flex p-8 flex-col w-1/4 my-5 rounded-xl justify-center align-middle border-solid border border-[#DBDFD0]">
      {renderIcon(icon)}
      <Typography variant="h6" className="text-center font-bold">
        {title}
      </Typography>
      <Typography variant="body2" className="text-center my-3">
        {desc}
      </Typography>
      <Typography
        variant="body2"
        component={Link}
        to="/"
        className="text-center no-underline font-bold text-[#AD343E] my-3"
      >
        Explore Menu
      </Typography>
    </Box>
  );
};
export default BrowseMenu;
