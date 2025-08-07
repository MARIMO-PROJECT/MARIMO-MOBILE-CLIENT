import type { ButtonHTMLAttributes } from "react"
import { buttonStyle, conceptStyle, iconStyle } from "./Button.style";
import type React from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    concept: 'movie' | 'playlist' | 'magazine';
    icon?: React.ReactNode;
}


const Button = ({concept, icon, children, onClick}: ButtonProps) => {
  return (
    <button css={[buttonStyle, conceptStyle[concept]]} onClick={onClick}>
      {icon && <span css={iconStyle}>{icon}</span>}
      {children}
    </button>
  );
}

export default Button