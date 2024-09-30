import { useContext } from "react";
import { MenuStatusContext } from "./MenuStatusContext";

const useMenu = () => {
  const { isMenuOpened, setIsOpen } = useContext(MenuStatusContext);
  return { isMenuOpened, setIsOpen };
};

export default useMenu;
