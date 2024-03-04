import { useEffect } from "react";
import MainMenu from "../components/menu/mainMenu";
import MainMenuInfo from "../components/menu/mainMenuInfo";

const Menu = () => {
  useEffect(() => {
    /* Editing MetaData title */
    document.title = "Food: Expoler Our Menu";
  });
  return (
    <>
      <MainMenu />
      <MainMenuInfo />
    </>
  );
};

export default Menu;
