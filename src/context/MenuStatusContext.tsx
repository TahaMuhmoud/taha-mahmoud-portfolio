import { createContext, Dispatch, useState } from "react";

export const MenuStatusContext = createContext<{
  isMenuOpened: boolean;
  setIsOpen: Dispatch<React.SetStateAction<boolean>>;
}>({
  isMenuOpened: false,
  setIsOpen: () => {},
});

const MenuStatusProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, setState] = useState<boolean>(false);
  return (
    <MenuStatusContext.Provider
      value={{
        isMenuOpened: state,
        setIsOpen: setState,
      }}
    >
      {children}
    </MenuStatusContext.Provider>
  );
};

export default MenuStatusProvider;
