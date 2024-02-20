import { Box, Container, Typography } from "@mui/material";
import { IoNewspaperOutline } from "react-icons/io5";
import { BsWindowDock } from "react-icons/bs";
import { BiTimer } from "react-icons/bi";

interface AboutContentItemProps {
  title: string;
  desc: string;
  icon: React.ElementType;
}
const AboutContentItem: React.FC<AboutContentItemProps> = ({
  title,
  desc,
  icon,
}) => {
  const renderIcon = (iconName: React.ElementType) => {
    const Icon = iconName;
    return <Icon className="text-rose-500 text-5xl" />;
  };

  return (
    <div className="flex gap-x-3">
      {renderIcon(icon)}

      <div>
        <Typography variant="h6">{title}</Typography>
        <Typography variant="body2" className="mt-2">
          {desc}
        </Typography>
      </div>
    </div>
  );
};

function AboutContent() {
  return (
    <Box component="section" className="my-12">
      <Container>
        <div className="grid md:grid-cols-3 gap-y-5 gap-x-5">
          <AboutContentItem
            icon={IoNewspaperOutline}
            title="Multi Cuisine"
            desc="In the new era of technology we look in the future with certainty life."
          />
          <AboutContentItem
            icon={BsWindowDock}
            title="Easy To Order"
            desc="In the new era of technology we look in the future with certainty life."
          />
          <AboutContentItem
            icon={BiTimer}
            title="Fast Delivery"
            desc="In the new era of technology we look in the future with certainty life."
          />
        </div>
      </Container>
    </Box>
  );
}

export default AboutContent;
