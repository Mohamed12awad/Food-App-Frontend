import { useEffect } from "react";
import { Box, Container, Typography, Skeleton } from "@mui/material";
import SingleBlog from "../components/BlogCard";
import { gql, useQuery } from "@apollo/client";

interface dataItem {
  _id: string;
  content: string;
  title: string;
  createdAt: string;
  src?: string;
}

function BlogsPage() {
  const GET_BLOG_ITEMS = gql`
    query {
      getAllBlogs {
        _id
        title
        content
        createdAt
      }
    }
  `;
  const { loading, error, data } = useQuery(GET_BLOG_ITEMS);
  // console.log(new Date(parseInt(data.getAllBlogs[0].createdAt)).toDateString());

  useEffect(() => {
    /* Editing MetaData title */
    document.title = "Food: Blogs";
  });
  return (
    <Box className="bg-[#F9F9F7]">
      <Container>
        <Box className="text-center py-12">
          <Typography variant="h3" className="main-font">
            Our Blog & Articles
          </Typography>
          <Typography variant="body2" className="text-[#495460] my-5">
            We consider all the drivers of change gives you the components you
            need
            <br /> to change to create a truly happens.
          </Typography>
        </Box>
        <Box className="my-5 grid grid-cols-2 md:grid-cols-4 grid-rows-2 gap-5 min-h-[500px]">
          {loading &&
            Array.from({ length: 8 }).map((_, x) => (
              <div key={x} className="flex flex-col gap-5 my-5">
                <Skeleton variant="rounded" width={210} height={60} />
                <Skeleton variant="rectangular" width={210} height={45} />
              </div>
            ))}
          {error && !loading && (
            <Typography
              variant="h5"
              className="text-center capitalize font-bold mx-auto col-span-4"
            >
              Please refresh....
            </Typography>
          )}
          {data &&
            data.getAllBlogs.map((blogItem: dataItem, index: number) => (
              <SingleBlog
                key={index}
                index={index}
                content={blogItem.content}
                date={new Date(parseInt(blogItem.createdAt)).toDateString()}
                title={blogItem.title}
                id={blogItem._id}
                src={
                  blogItem.src ||
                  `https://picsum.photos/1080/920?random=${index}`
                }
                firstImageBig={false}
              />
            ))}
        </Box>
      </Container>
    </Box>
  );
}

export default BlogsPage;
