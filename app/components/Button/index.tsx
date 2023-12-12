import { forwardRef, type ComponentPropsWithRef, type FC } from "react";
import * as s from "./button.css";

export type ButtonProps = ComponentPropsWithRef<"button">;

export const Button: FC<ButtonProps> = forwardRef(
  ({ children, ...props }, ref) => {
    return (
      <button className={s.button} {...props} ref={ref}>
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
