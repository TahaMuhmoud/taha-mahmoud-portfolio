import React, { createContext, Dispatch, useState } from "react";

export const DotMouseContext = createContext<{
  isFull: boolean;
  setIsFull: Dispatch<React.SetStateAction<boolean>>;
}>({ isFull: false, setIsFull: () => {} });

const DotMouseContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isFull, setIsFull] = useState<boolean>(false);
  return (
    <DotMouseContext.Provider value={{ isFull, setIsFull }}>
      {children}
    </DotMouseContext.Provider>
  );
};

export default DotMouseContextProvider;
