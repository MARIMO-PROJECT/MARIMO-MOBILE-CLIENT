import { css } from "@emotion/react";
import { flexGenerator } from "../../../styles/generator";
import type { Theme } from "@emotion/react";

export const buttonStyle = (theme: Theme) => css`
  ${flexGenerator()}
  ${theme.fonts.mb2_body02_14_m}
  width: 100%;
  height: "3.4rem";
  padding: 1rem 0;
  gap: 0.9rem;
  border: 1px solid ${theme.colors.new_gray01};
  border-radius: 4px;
  outline: none;
  background-color: transparent;
  cursor: pointer;
`;

export const conceptStyle = {
  playlist: (theme: Theme) => css`
    color: ${theme.colors.white};
    width: 13.2rem;
  `,
  magazine: (theme: Theme) => css`
    color: ${theme.colors.new_gray02};
    width: 13.2rem;
  `,
  movie: (theme: Theme) => css`
    color: ${theme.colors.new_gray02};
    width: 13.2rem;
  `,
  modal: (theme: Theme) => css`
    background-color: ${theme.colors.new_gray02};
    color: ${theme.colors.white};
    padding: 1.5rem 0;
    width: 16.8rem;
  `,
};

export const iconStyle = css`
  width: 1.6rem;
  height: 1.6rem;
`;

export const disabledStyle = (theme: Theme) => css`
  background-color: ${theme.colors.new_gray01};
  color: ${theme.colors.white};
  padding: 1.5rem 0;
  width: 16.8rem;
`;