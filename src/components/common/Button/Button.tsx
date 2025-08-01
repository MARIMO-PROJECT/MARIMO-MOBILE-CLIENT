import type { ButtonHTMLAttributes } from "react"
import { buttonStyle, conceptStyle } from "./Button.style";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    concept: 'movie' | 'playlist' | 'magazine';
}


const Button = ({concept, children, onClick}: ButtonProps) => {
  return (
    <button css={[buttonStyle, conceptStyle[concept]]} onClick={onClick}>{children}</button>
  )
}

export default Button