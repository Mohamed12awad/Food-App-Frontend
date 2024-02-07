import { Box, Container, Divider, Typography, Avatar } from "@mui/material";

interface Review {
  title: string;
  content: string;
  imgSrc: string;
  reviewer: string;
  location: string;
}

const reviewData: Review[] = [
  {
    title: "The best restaurant",
    content:
      "Last night, we dined at place and were simply blown away. From the moment we stepped in, we were enveloped in an inviting atmosphere and greeted with warm smiles.",
    imgSrc: "./imgs/whatWeOffer/sara.jpg",
    reviewer: "Sophire Robson",
    location: "Los Angeles, CA",
  },
  {
    title: "Simply delicious",
    content:
      "Last night, we dined at place and were simply blown away. From the moment we stepped in, we were enveloped in an inviting atmosphere and greeted with warm smiles.",
    imgSrc: "./imgs/whatWeOffer/sara.jpg",
    reviewer: "Sophire Robson",
    location: "Los Angeles, CA",
  },
  {
    title: "One of a kind restaurant",
    content:
      "Last night, we dined at place and were simply blown away. From the moment we stepped in, we were enveloped in an inviting atmosphere and greeted with warm smiles.",
    imgSrc: "./imgs/whatWeOffer/sara.jpg",
    reviewer: "Sophire Robson",
    location: "Los Angeles, CA",
  },
];

const SingleReview: React.FC<Review> = ({
  title,
  content,
  imgSrc,
  reviewer,
  location,
}) => {
  return (
    <Box className="bg-[#F9F9F7] p-5 rounded-lg">
      <Typography
        variant="h6"
        className="text-[#AD343E] font-bold capitalize py-4"
      >
        “{title}”
      </Typography>
      <Typography variant="body2">{content}</Typography>
      <Divider className="my-5 " />
      <div className="flex gap-x-5 my-3">
        <Avatar alt="Remy Sharp" src={imgSrc} />

        <div>
          <Typography variant="body2" className="font-bold">
            {reviewer}
          </Typography>
          <Typography variant="body2">{location}</Typography>
        </div>
      </div>
    </Box>
  );
};

function CustomerReview() {
  return (
    <section>
      <Container>
        <Typography className="main-font text-center" variant="h3">
          What Our Customers Say
        </Typography>
        <Box className="grid grid-cols-1 md:grid-cols-3 gap-5 my-12">
          {reviewData &&
            reviewData.map((i) => (
              <SingleReview
                title={i.title}
                content={i.content}
                imgSrc={i.imgSrc}
                reviewer={i.reviewer}
                location={i.location}
              />
            ))}
        </Box>
      </Container>
    </section>
  );
}

export default CustomerReview;
