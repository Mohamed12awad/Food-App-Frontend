import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";
import { Box, Container, Typography, Skeleton } from "@mui/material";

const SingleBlogPage = () => {
  const { id } = useParams();

  //   interface dataItem {
  //     _id: string;
  //     content: string;
  //     title: string;
  //     createdAt: string;
  //     src?: string;
  //   }

  const GET_BLOG_ITEM = gql`
    query getBlogById($id: ID!) {
      getBlogById(id: $id) {
        _id
        title
        content
        createdAt
        author {
          firstName
          lastName
        }
      }
    }
  `;
  const { loading, error, data } = useQuery(GET_BLOG_ITEM, {
    variables: {
      id: id,
    },
  });

  // data && console.log(data.getBlogById);

  useEffect(() => {
    /* Editing MetaData title */
    if (data) {
      document.title = data.getBlogById.title;
    }
  }, [data]);

  return (
    <Box>
      <Container>
        {loading && (
          <div className="flex flex-col gap-5 my-5">
            <Skeleton variant="rounded" height={120} />
            <Skeleton variant="rectangular" width={320} height={25} />
            <Skeleton variant="rectangular" width={210} height={25} />
            <Skeleton variant="rectangular" width={210} height={25} />
          </div>
        )}
        {error && !loading && (
          <Typography
            variant="h5"
            className="text-center capitalize font-bold mx-auto col-span-4"
          >
            Please refresh....
          </Typography>
        )}
        {data && (
          <div className="py-5">
            <Typography variant="body2" className="">
              {new Date(parseInt(data.getBlogById.createdAt)).toDateString()}
            </Typography>

            <Typography variant="h4" className="">
              {data.getBlogById.title}
            </Typography>
            <Typography variant="body1" className="mt-3">
              {data.getBlogById.content}
            </Typography>
          </div>
        )}
      </Container>
    </Box>
  );
};

export default SingleBlogPage;
