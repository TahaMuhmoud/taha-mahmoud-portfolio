import CursorHover from "../components/CursorHover";
import HorizontalSocials from "../components/HorizontalSocials";
import MenuIcon from "../components/MenuIcon";
import useMenu from "../context/useMenu";
const SECTIONS: { id: string; label: string }[] = [
  { id: "#home", label: "Home" },
  { id: "#about", label: "About Me" },
  { id: "#skills", label: "Skills" },
  { id: "#projects", label: "Projects" },
  { id: "#contact", label: "Contact" },
];

const Menu = () => {
  const { isMenuOpened, setIsOpen } = useMenu();

  return (
    <div
      className={`menu h-screen fixed top-0 left-0 bg-primary z-[500] flex flex-col justify-center gap-20 overflow-hidden transition-all duration-700 ${
        isMenuOpened ? "w-screen" : "w-0"
      }`}
    >
      <div className="absolute top-10 right-10">
        <MenuIcon />
      </div>
      <ul className="w-full grid gap-5 items-center justify-center text-center text-5xl sm:text-7xl font-name font-black">
        {SECTIONS.map((sec, i) => (
          <CursorHover key={i} className="hover:text-secondary/50">
            <li
              onClick={() => {
                setIsOpen(false);
                window.location.href = sec.id;
              }}
            >
              {sec.label}
            </li>
          </CursorHover>
        ))}
      </ul>
      <HorizontalSocials />
    </div>
  );
};

export default Menu;
