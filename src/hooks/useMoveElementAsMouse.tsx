import { useCallback, useEffect } from "react";

export const useMoveElementAsMouse: <T>(params: {
  element: React.MutableRefObject<T>;
  callback: (element: HTMLElement, e: MouseEvent) => void;
}) => void = ({ element, callback }) => {
  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      const htmlElement = element.current as HTMLElement;
      callback(htmlElement, e);
    },
    [callback, element]
  );

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [handleMouseMove]);
};
