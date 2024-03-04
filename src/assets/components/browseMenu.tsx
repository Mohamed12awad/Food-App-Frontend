import { Box, Container, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { MdOutlineEmojiFoodBeverage } from "react-icons/md";
import { PiBowlFood } from "react-icons/pi";
import { LuGlassWater, LuCakeSlice } from "react-icons/lu";

interface BrowseMenuItemProps {
  title: string;
  desc: string;
  icon: React.ElementType;
}

const browseData: BrowseMenuItemProps[] = [
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
        <Box className="grid lg:grid-cols-4 sm:grid-cols-2 gap-x-3 justify-center">
          {browseData &&
            browseData.map((item, index) => (
              <BrowseMenuItem
                title={item.title}
                desc={item.desc}
                icon={item.icon}
                key={index}
              />
            ))}
        </Box>
      </Container>
    </Box>
  );
}

const BrowseMenuItem: React.FC<BrowseMenuItemProps> = ({
  title,
  desc,
  icon,
}) => {
  const renderIcon = (iconName: React.ElementType) => {
    const Icon = iconName;
    return (
      <Icon className="text-3xl mx-auto my-3 p-3 rounded-full bg-[#DBDFD0] text-[#474747]" />
    );
  };
  return (
    <Box className="flex p-8 flex-col  my-5 rounded-xl justify-center align-middle border-solid border border-[#DBDFD0]">
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
        to="/menu"
        className="text-center no-underline font-bold text-[#AD343E] my-3"
      >
        Explore Menu
      </Typography>
    </Box>
  );
};
export default BrowseMenu;
