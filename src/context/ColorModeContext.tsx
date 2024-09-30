import { createContext, Dispatch, SetStateAction, useState } from "react";
import { ChildrenType, ModeEnum } from "../types/types";

export const ColorModeContext = createContext<{
  mode: ModeEnum;
  setMode: Dispatch<SetStateAction<ModeEnum>>;
}>({
  mode: ModeEnum.DARK,
  setMode: () => {},
});
const ColorModeContextProvider = ({ children }: { children: ChildrenType }) => {
  const [mode, setMode] = useState<ModeEnum>(ModeEnum.DARK);
  let { onchange } = window.matchMedia("(prefers-color-scheme: light)");
  onchange = () => {
    if (window.matchMedia("(prefers-color-scheme: light)").matches) {
      setMode(ModeEnum.LIGHT);
    } else {
      setMode(ModeEnum.DARK);
    }
  };
  window
    .matchMedia("(prefers-color-scheme: light)")
    .addEventListener("change", onchange);
  document.documentElement.className = "";
  document.documentElement.classList.add(mode);

  return (
    <ColorModeContext.Provider value={{ mode, setMode }}>
      {children}
    </ColorModeContext.Provider>
  );
};

export default ColorModeContextProvider;
