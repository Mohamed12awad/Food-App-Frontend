import Blogs from "../components/blogs";
import BrowseMenu from "../components/browseMenu";
import CustomerReview from "../components/customerReview";
import Testimonials from "../components/fastestDelivery";
import Footer from "../components/footer";
import Header from "../components/header";
import Provide from "../components/provide";
import WhatWeOffer from "../components/whatWeOffer";

const Main = () => {
  return (
    <>
      <Header />
      <BrowseMenu />
      <Provide />
      <WhatWeOffer />
      <Testimonials />
      <CustomerReview />
      <Blogs />
      <Footer />
      <div>{/* <p>2</p> */}</div>
    </>
  );
};

export default Main;
