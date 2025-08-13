import {
  customRadio,
  hiddenRadio,
  labelStyle,
  radioContainer,
} from "./Radio.style";

interface RadioProps {
  name: string;
  options: [string, string];
  value: string;
  onChange: (value: string) => void;
}

const Radio = ({ name, options, value, onChange }: RadioProps) => {
  return (
    <div css={radioContainer}>
      {options.map((option) => (
        <label css={labelStyle}>
          <input
            type="radio"
            name={name}
            value={option}
            checked={value === option}
            onChange={() => onChange(option)}
            css={hiddenRadio}
          />
          <span css={customRadio(value === option)}>{option}</span>
        </label>
      ))}
    </div>
  );
};

export default Radio;
