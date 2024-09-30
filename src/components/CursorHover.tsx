import { useContext } from "react";
import { DotMouseContext } from "../context/DotMouseContext";

const CursorHover = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const { setIsFull } = useContext(DotMouseContext);
  return (
    <div
      className={className}
      onMouseEnter={() => setIsFull(true)}
      onMouseLeave={() => setIsFull(false)}
    >
      {children}
    </div>
  );
};

export default CursorHover;
