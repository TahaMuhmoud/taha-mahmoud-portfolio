import { useContext } from "react";
import { ColorModeContext } from "./ColorModeContext";

const useColorMode = () => {
  const { mode, setMode } = useContext(ColorModeContext);
  return { mode, setMode };
};

export default useColorMode;
