import { css } from "@emotion/react";
import { flexGenerator } from "../../../styles/generator";
import type { Theme } from "@emotion/react";

export const modalContainer = (theme: Theme) => css`
  ${flexGenerator("column")}
  width: 29rem;
  border-radius: 4px;
  background-color: ${theme.colors.gray01};
`;

export const headerContainer = (theme: Theme) => css`
  ${flexGenerator()}
  flex-shrink: 0;
  position: relative;
  width: 100%;
  padding: 2.2rem 2.4rem 2rem 2.4rem;
  border-bottom: 1px solid ${theme.colors.new_gray01};
`;

export const headerH1Style = (theme: Theme) => css`
  ${theme.fonts.mb2_body02_14_m}
  color: ${theme.colors.black};
`;

export const deleteIconStyle = css`
  position: absolute;
  right: 24px;
  cursor: pointer;
`;

export const bodyContainer = css`
  ${flexGenerator("column")}
  width: 100%;
  gap: 4.4rem;
  padding: 2rem 2.3rem 2.2rem 2.3rem;
`;

export const buttonWrapper = css`
  ${flexGenerator()}
  width: 100%;
`;

// MessageCardWriteModal
export const inputWrapper = css`
  ${flexGenerator("column")}
  gap: 2rem;
  width: 100%;
`;

// RsvpModal
export const rsvpBodyContainer = css`
  ${flexGenerator("column")}
  width: 100%;
  gap: 4.4rem;
  padding: 2.2rem 2.1rem 2.2rem 2.1rem;
`;

export const rsvpFormWrapper = css`
  ${flexGenerator("column")}
  width: 100%;
  gap: 2rem;
`;

export const radioWrapper = css`
  ${flexGenerator("column", "flex-start", "flex-start")}
  gap: 1.4rem;
  width: 100%;
`;

export const radioSpanStyle = (theme: Theme) => css`
  ${theme.fonts.mc1_caption01_12_m}
  color: ${theme.colors.new_gray02};
`;

export const personalInfoWrapper = (theme: Theme) => css`
  ${flexGenerator("column", "flex-start", "flex-start")}
  width: 100%;
  padding: 1.8rem 1.9rem;
  border: 1px solid ${theme.colors.new_gray01};
  border-radius: 4px;
`;

export const strongSpanStyle = (theme: Theme) => css`
  ${theme.fonts.mc1_caption01_12_m}
  color: ${theme.colors.black};
`;

export const pStyle = (theme: Theme) => css`
  ${theme.fonts.mc2_caption02_12_re}
  color: ${theme.colors.new_gray02};
  margin-top: 1rem;
  margin-bottom: 1.6rem;
`;

export const agreeTextStyle = (theme: Theme) => css`
  ${flexGenerator()}
  gap: 0.6rem;
  ${theme.fonts.mc1_caption01_12_m}
  color: ${theme.colors.new_gray02};
  cursor: pointer;
`;
