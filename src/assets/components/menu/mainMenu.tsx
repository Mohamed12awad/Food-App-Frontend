import { Box, Container, Typography, Button, Skeleton } from "@mui/material";
import { useState } from "react";
import { gql, useQuery } from "@apollo/client";
import MainMenuCard from "./mainMenuCard";

interface dataItem {
  price: number;
  description: string;
  name: string;
  categories: string[];
  isAvailable: boolean;
  _id: string;
}
function MainMenu() {
  const [searchCategory, setSearchCategory] = useState("");
  const [searchLimit, setSearchLimit] = useState(8);
  //   const [searchOffset, setSearchOffset] = useState(0);
  const searchOffset = 0;

  const GET_MENU_ITEMS = gql`
    query GetAllMenuItems(
      $searchLimit: Int!
      $searchOffset: Int!
      $category: String!
    ) {
      getAllMenuItems(
        limit: $searchLimit
        offset: $searchOffset
        category: $category
      ) {
        name
        _id
        price
        description
        isAvailable
        categories
      }
    }
  `;

  const { loading, error, data, refetch } = useQuery(GET_MENU_ITEMS, {
    variables: {
      searchLimit,
      searchOffset,
      category: searchCategory,
    },
  });
  const handleSeeMore = () => {
    setSearchLimit(searchLimit + 8);

    refetch({ searchLimit, searchOffset, category: searchCategory });
  };
  // useEffect(() => {
  //   if (data) {
  //     //   console.log(data.getAllMenuItems);
  //   }
  // }, [data]);

  const dataFilters = [
    { title: "All", category: "" },
    { title: "Breakfast", category: "Breakfast" },
    { title: "Main Dishes", category: "Pizza" },
    { title: "Drinks", category: "Drinks" },
    { title: "Desserts", category: "Appetizers" },
  ];
  return (
    <Box>
      <Container className={`${loading && "h-[2500px]"}`}>
        <Box className="text-center my-12">
          <Typography variant="h3" className="main-font text-[#2C2F24]">
            Our Menu
          </Typography>
          <Typography variant="body1" className="text-[#495460]">
            We consider all the drivers of change gives you the components
            <br /> you need to change to create a truly happens.
          </Typography>
          <Box className="flex gap-x-5 flex-wrap justify-center my-5">
            {dataFilters &&
              dataFilters.map((i, x) => (
                <Button
                  key={x}
                  className={`capitalize text-black rounded-full px-5 shadow-none active:bg-[#AD343E] focus:bg-[#AD343E] focus:text-white`}
                  onClick={() => setSearchCategory(i.category)}
                  variant="text"
                >
                  {i.title}
                </Button>
              ))}
          </Box>
        </Box>
        <Box className="grid my-5 grid-cols-2 md:grid-cols-4 gap-5 justify-between">
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
            data.getAllMenuItems.map((i: dataItem, x: number) => (
              <MainMenuCard
                key={x}
                price={i.price}
                description={i.description}
                name={i.name}
                id={i._id}
              />
            ))}
          <div className="col-span-4 flex justify-center">
            {data && (
              <Button
                className="bg-black text-white px-5 rounded-full"
                onClick={handleSeeMore}
              >
                See more
              </Button>
            )}
          </div>
        </Box>
      </Container>
    </Box>
  );
}

export default MainMenu;
