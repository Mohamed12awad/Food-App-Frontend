import { Typography, Card, CardMedia, CardContent } from "@mui/material";
import { Link } from "react-router-dom";

interface menuItemProps {
  price: number;
  description: string;
  name: string;
  id: string;
}

const MainMenuCard: React.FC<menuItemProps> = ({
  price,
  description,
  name,
  id,
}) => {
  const xx = parseFloat((Math.random() * 10).toFixed(1));
  return (
    <Card component={Link} to={`/menu/${id}`} className="shadow no-underline">
      <CardMedia
        className="h-40"
        image={`https://picsum.photos/1080/920?random=${xx}`}
        title="food"
      />
      <CardContent className="justify-center flex flex-col items-center">
        <Typography
          gutterBottom
          variant="h6"
          component="div"
          className="main-font text-[#AD343E] font-bold"
        >
          $ {price}
        </Typography>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          className="main-font font-medium line-clamp-2"
          title={name}
        >
          {name}
        </Typography>
        <Typography
          gutterBottom
          variant="body2"
          component="div"
          className="text-[#495460] text-center line-clamp-2"
        >
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default MainMenuCard;
