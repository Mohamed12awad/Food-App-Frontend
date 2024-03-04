import { useEffect } from "react";
import Blogs from "../components/blogs";
import BrowseMenu from "../components/browseMenu";
import CustomerReview from "../components/customerReview";
import Testimonials from "../components/fastestDelivery";
import Header from "../components/header";
import Provide from "../components/provide";
import WhatWeOffer from "../components/whatWeOffer";

const Main = () => {
  useEffect(() => {
    /* Editing MetaData title */
    document.title = "Food: Welcome";
  });
  return (
    <>
      <Header />
      <BrowseMenu />
      <Provide />
      <WhatWeOffer />
      <Testimonials />
      <CustomerReview />
      <Blogs />
    </>
  );
};

export default Main;
