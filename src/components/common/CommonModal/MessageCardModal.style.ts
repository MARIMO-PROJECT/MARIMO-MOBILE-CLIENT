import { css } from "@emotion/react";
import { flexGenerator } from "../../../styles/generator";
import type { Theme } from "@emotion/react";

export const modalContainer = (theme: Theme) => css`
    ${flexGenerator('column')}
    width: 29rem;
    border-radius: 4px;
    background-color: ${theme.colors.gray01};
`;

export const headerContainer = (theme: Theme) => css`
    ${flexGenerator()}
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

export const inputWrapper = css`
    ${flexGenerator('column')}
    gap: 2rem;
    width: 100%;
`;

export const buttonWrapper = css`
    ${flexGenerator()}
    width: 100%;
`;