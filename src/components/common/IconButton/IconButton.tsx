import type React from "react";
import type { ButtonHTMLAttributes } from "react"
import { buttonStyle, iconStyle, variantStyle } from "./IconButton.style";

export interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant: 'write' | 'copy' | 'sound'
    text?: string;
    icon?: React.ReactNode;
    size: number;
}

const IconButton = ({variant, text, icon, size, onClick}: IconButtonProps) => {
  return (
    <button css={[buttonStyle, variantStyle[variant]]} onClick={onClick}>
        {text}
        <span css={iconStyle(size)}>{icon}</span>
    </button>
  )
}

export default IconButton