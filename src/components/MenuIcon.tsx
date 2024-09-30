import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import useMenu from "../context/useMenu";
const MenuIcon = () => {
  const { isMenuOpened, setIsOpen } = useMenu();
  gsap.registerPlugin(useGSAP);

  const { contextSafe } = useGSAP();
  useGSAP(() => {
    gsap.to(".bar-1", {
      marginBottom: !isMenuOpened ? "8px" : 0,
      rotate: isMenuOpened ? "45deg" : 0,
    });
    gsap.to(".bar-2", {
      marginBottom: isMenuOpened ? "8px" : 0,
      rotate: isMenuOpened ? "-45deg" : 0,
    });
  }, [isMenuOpened]);
  const handleMenuIconClick = contextSafe(() => {
    gsap.to(".bar-1", {
      marginBottom: isMenuOpened ? "8px" : 0,
      rotate: !isMenuOpened ? "45deg" : 0,
    });
    gsap.to(".bar-2", {
      marginBottom: !isMenuOpened ? "8px" : 0,
      rotate: !isMenuOpened ? "-45deg" : 0,
    });
    setIsOpen((is) => !is);
  });
  return (
    <div
      className="menu-icon w-8 md:w-10 aspect-square flex relative flex-col justify-center gap-1"
      onClick={handleMenuIconClick}
    >
      <div className="bar-1 w-full h-[2px] bg-secondary absolute mb-2"></div>
      <div className="bar-2 w-full h-[2px] bg-secondary absolute mt-2"></div>
    </div>
  );
};

export default MenuIcon;
