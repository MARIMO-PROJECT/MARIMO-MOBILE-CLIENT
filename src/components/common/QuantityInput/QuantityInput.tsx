import type React from "react";
import { IcMinus, IcPlus } from "../../../assets/svgs";
import {
  buttonDividerStyle,
  buttonStyle,
  buttonWrapper,
  inputAndButtonWrapper,
  inputContainer,
  inputStyle,
  labelTextStyle,
  quantityTextStyle,
} from "./QuantityInput.style";

interface QuantityInputProps {
  label?: string;
  value: string;
  onChange: (newValue: number) => void;
}

const QuantityInput = ({ label, value, onChange }: QuantityInputProps) => {
  const handleDecrease = () => {
    if (value > 0) onChange(value - 1);
  };
  const handleIncrease = () => {
    onChange(value + 1);
  };
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(e.target.value);
    if (!isNaN(newValue) && newValue >= 0) {
      onChange(newValue);
    }
  };
  return (
    <div css={inputContainer}>
      {label && <label css={labelTextStyle}>{label}</label>}
      <div css={inputAndButtonWrapper}>
        <input
          type="text"
          value={value}
          onChange={handleInputChange}
          css={inputStyle}
        />
        <div css={buttonWrapper}>
          <button onClick={handleDecrease} css={buttonStyle}>
            <IcMinus width={12} height={12} />
          </button>
          <div css={buttonDividerStyle} />
          <div css={quantityTextStyle}>{value}</div>
          <div css={buttonDividerStyle} />
          <button onClick={handleIncrease} css={buttonStyle}>
            <IcPlus width={12} height={12} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuantityInput;
