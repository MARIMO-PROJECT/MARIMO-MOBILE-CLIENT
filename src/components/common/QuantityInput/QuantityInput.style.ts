import { css } from "@emotion/react";
import { flexGenerator } from "../../../styles/generator";
import type { Theme } from "@emotion/react";

export const inputContainer = css`
  ${flexGenerator("column", "flex-start", "flex-start")}
  gap: 1.4rem;
  width: 100%;
`;

export const labelTextStyle = (theme: Theme) => css`
  ${theme.fonts.mc1_caption01_12_m}
  color: ${theme.colors.new_gray02};
`;

export const inputAndButtonWrapper = css`
  position: relative;
  width: 100%;
`;

export const inputStyle = (theme: Theme) => css`
  width: 100%;
  padding: 1.2rem 1.5rem;
  border: 1px solid ${theme.colors.new_gray01};
  border-radius: 4px;
  color: ${theme.colors.black};

  &:focus {
    outline: none;
    border-color: ${theme.colors.new_gray02};
  }
`;

export const buttonWrapper = (theme: Theme) => css`
  position: absolute;
  right: 1.5rem;
  top: 50%;
  transform: translateY(-50%);
  ${flexGenerator()}
  width: 8rem;
  height: 2.5rem;
  border-radius: 2px;
  border: 1px solid ${theme.colors.gray02};
  background-color: ${theme.colors.white};
`;

export const buttonStyle = css`
  ${flexGenerator()}
  width: 2.3rem;
  height: 2.3rem;
  cursor: pointer;
`;

export const buttonDividerStyle = (theme: Theme) => css`
  width: 1px;
  height: 2.3rem;
  background-color: ${theme.colors.gray02};
`;

export const quantityTextStyle = (theme: Theme) => css`
  ${flexGenerator()}
  width: 3rem;
  ${theme.fonts.mb1_body01_14_sb}
  color: ${theme.colors.black};
`;
