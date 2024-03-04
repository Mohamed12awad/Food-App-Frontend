import { useEffect } from "react";
import MenuItemInfo from "../components/menuItem/menuItem";

const MenuItem = () => {
  useEffect(() => {
    /* Editing MetaData title */
    document.title = "Food: Expoler Our Menu";
  });
  return (
    <>
      <MenuItemInfo />
    </>
  );
};

export default MenuItem;
