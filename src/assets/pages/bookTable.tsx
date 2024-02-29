import { Box, Typography } from "@mui/material";
import BookForm from "../components/bookTable/bookForm";
import BookMap from "../components/bookTable/bookMap";
function BookTable() {
  return (
    <div className="bg-[#F9F9F7]">
      <Box className="text-center py-12">
        <Typography variant="h3" className="main-font">
          Book A Table
        </Typography>
        <Typography variant="body2" className="text-[#495460]">
          We consider all the drivers of change gives you the components you
          need to change to create a truly happens.
        </Typography>
      </Box>
      <BookForm />
      <BookMap />
    </div>
  );
}

export default BookTable;
