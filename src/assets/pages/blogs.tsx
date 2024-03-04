import { useEffect } from "react";
import { Box, Typography } from "@mui/material";

function BlogsPage() {
  useEffect(() => {
    /* Editing MetaData title */
    document.title = "Food: Blogs";
  });
  return (
    <Box>
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
    </Box>
  );
}

export default BlogsPage;
