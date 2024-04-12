import {
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

interface Blog {
  date: string;
  title: string;
  content?: string;
  src: string;
  index?: number;
  link?: string;
  firstImageBig: boolean;
  id?: string;
}

const SingleBlog: React.FC<Blog> = ({
  index,
  date,
  title,
  content,
  src,
  firstImageBig,
  id,
}) => {
  return (
    <Card
      className={`${
        firstImageBig &&
        "first:col-end-3 first:col-start-1 first:row-start-1 first:row-end-3"
      } shadow-lg`}
    >
      <CardActionArea>
        <Link to={"/blogs/" + id} className="no-underline text-black">
          <CardMedia
            component="img"
            alt="green iguana"
            image={src}
            className="object-cover h-1/2"
          />
          <CardContent className="py-3 my-auto">
            <Typography
              gutterBottom
              variant="body2"
              className="text-xs font-medium pb-2 m-0 text-gray-500"
              component="div"
            >
              {date}
            </Typography>
            <Typography
              gutterBottom
              variant="h6"
              className="m-0 text-base"
              component="div"
            >
              {title}
            </Typography>
            {(index === 0 || !firstImageBig) && ( // Render the third Typography only for the first child
              <Typography
                gutterBottom
                variant="body2"
                component="div"
                className="text-gray-500 text-sm line-clamp-3"
              >
                {content}
              </Typography>
            )}
          </CardContent>
        </Link>
      </CardActionArea>
    </Card>
  );
};

export default SingleBlog;
