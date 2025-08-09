import type { ButtonHTMLAttributes } from "react"
import {
  buttonStyle,
  conceptStyle,
  disabledStyle,
  iconStyle,
} from "./Button.style";
import type React from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  concept: "movie" | "playlist" | "magazine" | "modal";
  icon?: React.ReactNode;
}

const Button = ({
  concept,
  icon,
  children,
  onClick,
  disabled,
}: ButtonProps) => {
  return (
    <button
      css={[buttonStyle, conceptStyle[concept], disabled && disabledStyle]}
      onClick={onClick}
      disabled={disabled}
    >
      {icon && <span css={iconStyle}>{icon}</span>}
      {children}
    </button>
  );
};

export default Button