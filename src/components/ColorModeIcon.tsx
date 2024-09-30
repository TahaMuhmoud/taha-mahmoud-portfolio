import { FaMoon } from "react-icons/fa";
import { ModeEnum } from "../types/types";
import CursorHover from "./CursorHover";
import useColorMode from "../context/useColorMode";

const ColorModeIcon = () => {
  const { mode, setMode } = useColorMode();

  return (
    <CursorHover>
      <div
        className="bg-secondary/20 p-1 md:p-2 2xl:p-3 rounded-full"
        onClick={() => {
          if (mode == ModeEnum.DARK) setMode(ModeEnum.LIGHT);
          else setMode(ModeEnum.DARK);
        }}
      >
        <FaMoon size={22} />
      </div>
    </CursorHover>
  );
};

export default ColorModeIcon;
