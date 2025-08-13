import { css } from "@emotion/react";
import { flexGenerator } from "../../../styles/generator";
import type { Theme } from "@emotion/react";

export const radioContainer = css`
  ${flexGenerator()}
  width: 100%;
  gap: 0.8rem;
`;

export const labelStyle = css`
  ${flexGenerator()}
  width: 100%;
`;

export const hiddenRadio = css`
  position: absolute;
  opacity: 0;
  pointer-events: none;
`;

export const customRadio = (checked: boolean) => (theme: Theme) =>
  css`
    ${theme.fonts.mb2_body02_14_m}
    display: inline-block;
    padding: 1.5rem 0;
    width: 100%;
    border: 1px solid
      ${checked ? theme.colors.new_gray02 : theme.colors.new_gray01};
    border-radius: 4px;
    background-color: ${checked ? theme.colors.new_gray02 : theme.colors.white};
    text-align: center;
    color: ${checked ? theme.colors.white : theme.colors.new_gray01};
    cursor: pointer;
  `;
