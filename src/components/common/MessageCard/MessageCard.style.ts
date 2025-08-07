import type { Theme } from "@emotion/react";
import { css } from "@emotion/react";
import { flexGenerator } from "../../../styles/generator";

export const cardWrapperStyle = (theme: Theme) => css`
  ${flexGenerator("column", "flex-start", "flex-start")}
  width: 100%;
  gap: 1.4rem;
  border-radius: 4px;
  background-color: ${theme.colors.white};
  padding: 1.6rem 1.7rem;
  box-shadow: 0 2px 5px 1px rgba(0, 0, 0, 0.05);
`;

export const cardHeaderStyle = css`
    ${flexGenerator("row", "space-between")}
    width: 100%;
`;

export const nicknameStyle = (theme: Theme) => css`
    ${theme.fonts.mb2_body02_14_m}
    color: ${theme.colors.black};
`;

export const cardTextStyle = (theme: Theme) => css`
    ${theme.fonts.mc2_caption02_12_re}
    color: ${theme.colors.gray05};
`;