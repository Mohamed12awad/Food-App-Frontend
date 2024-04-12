import { Button, Container, Typography, Box } from "@mui/material";
import { Link } from "react-router-dom";
import SingleBlog from "./BlogCard";

interface Blog {
  date: string;
  title: string;
  content?: string;
  src: string;
  index?: number;
  link?: string;
}
const blogsData: Blog[] = [
  {
    date: "January 3, 2023",
    title:
      "The secret tips & tricks to prepare a perfect burger & pizza for our customers",
    content:
      "Lorem ipsum dolor sit amet consectetur of a adipiscing elitilmim semper adipiscing massa gravida nisi cras enim quis nibholm varius amet gravida ut facilisis neque egestas.",
    src: "./imgs/blogs/andra.png",
  },
  {
    date: "January 3, 2023",
    title: "How to prepare the perfect french fries in an air fryer",
    src: "./imgs/blogs/1.png",
  },
  {
    date: "January 3, 2023",
    title: "How to prepare delicious chicken tenders",
    src: "./imgs/blogs/2.png",
  },
  {
    date: "January 3, 2023",
    title: "7 delicious cheesecake recipes you can prepare",
    src: "./imgs/blogs/3.png",
  },
  {
    date: "January 3, 2023",
    title: "5 great pizza restaurants you should visit this city",
    src: "./imgs/blogs/4.png",
  },
];

function Blogs() {
  return (
    <section className="my-12">
      <Container>
        <div className="blog-head flex flex-col md:flex-row  justify-between">
          <Typography variant="h3" className="main-font text-4xl md:text-5xl">
            Our Blog & Articles
          </Typography>
          <Button
            component={Link}
            to="/blogs"
            className="bg-[#AD343E] rounded-full capitalize text-center ms-48 md:ms-auto px-5 py-3 my-3"
            variant="contained"
            size="small"
          >
            Read All Articles
          </Button>
        </div>
        <Box className="my-5 grid grid-cols-2 md:grid-cols-4 grid-rows-2 gap-5 min-h-[500px]">
          {blogsData &&
            blogsData.map((_, index) => (
              <SingleBlog
                key={index}
                index={index}
                content={_.content}
                date={_.date}
                title={_.title}
                src={_.src}
                firstImageBig={true}
              />
            ))}
        </Box>
      </Container>
    </section>
  );
}

export default Blogs;
