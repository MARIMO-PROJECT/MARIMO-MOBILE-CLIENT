import type React from "react";
import type { InputHTMLAttributes } from "react"
import { essentialTextStyle, inputContainer, inputStyle, labelTextStyle, labelWrapper, textareaStyle } from "./Input.style";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  essential?: boolean;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({label, essential, placeholder, value, onChange}: InputProps) => {
  const isMessageField = label === "메세지";
  return (
    <div css={inputContainer}>
      {label && (
        <div css={labelWrapper}>
          <label css={labelTextStyle}>{label}</label>
          {essential && <span css={essentialTextStyle}>필수</span>}
        </div>
      )}
      {isMessageField ? (
        <textarea
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          css={textareaStyle}
          maxLength={150}
        />
      ) : (
        <input
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          css={inputStyle}
        />
      )}
    </div>
  );
}

export default Input