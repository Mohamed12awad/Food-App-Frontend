import { useEffect } from "react";
import AboutContent from "../components/about/aboutContent";
import AboutInfo from "../components/about/aboutInfo";
import AboutVideo from "../components/about/aboutVideo";
import CustomerReview from "../components/customerReview";
import Provide from "../components/provide";

const About = () => {
  useEffect(() => {
    /* Editing MetaData title */
    document.title = "Food: About US";
  });
  return (
    <>
      <Provide />
      <AboutVideo />
      <AboutContent />
      <AboutInfo />
      <CustomerReview />
    </>
  );
};

export default About;
