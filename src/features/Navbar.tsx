import MenuIcon from "../components/MenuIcon";
import ColorModeIcon from "../components/ColorModeIcon";

const Navbar = () => {
  return (
    <div className="w-full h-full flex items-center justify-between overflow-hidden">
      <div className="logo bg-primary pl-3 h-full flex items-center">
        <div className="font-name text-3xl sm:text-4xl font-black">{`<TAHA />`}</div>
      </div>

      <div className="flex items-center gap-5 sm:gap-7 bg-primary h-full px-7">
        <ColorModeIcon />
        <MenuIcon />
      </div>
    </div>
  );
};

export default Navbar;
