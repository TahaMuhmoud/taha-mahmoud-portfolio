import { cn } from "../utils/helpers";
import CursorHover from "./CursorHover";
interface Button {
  children: React.ReactNode;
  className?: string;
  props?: React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >;
}
const Button = ({ props, className, children }: Button) => {
  return (
    <CursorHover>
      <button
        className={cn(
          "px-4 py-2 border-4 border-secondary outline outline-secondary/50 text-xl font-name",
          className
        )}
        {...props}
      >
        {children}
      </button>
    </CursorHover>
  );
};

export default Button;
