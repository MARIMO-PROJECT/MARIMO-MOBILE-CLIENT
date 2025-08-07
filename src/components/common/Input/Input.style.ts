import { css } from "@emotion/react";
import { flexGenerator } from "../../../styles/generator";
import type { Theme } from "@emotion/react";

export const inputContainer = css`
    ${flexGenerator('column', 'flex-start', 'flex-start')}
    gap: 1.4rem;
    width: 100%;
`;

export const labelWrapper = css`
    ${flexGenerator('row', 'flex-start', 'center')}
    gap: 0.4rem;
    width: 100%;
`;

export const labelTextStyle = (theme: Theme) => css`
    ${theme.fonts.mc1_caption01_12_m}
    color: ${theme.colors.new_gray02};
`;

export const essentialTextStyle = (theme: Theme) => css`
    /* ${theme.fonts.mc} */
    color: ${theme.colors.gray04};
`;

export const inputStyle = (theme: Theme) => css`
    width: 100%;
    padding: 1.7rem 1.5rem;
    border: 1px solid ${theme.colors.new_gray01};
    border-radius: 4px;
    ${theme.fonts.mb2_body02_14_m}
    color: ${theme.colors.black};

    &::placeholder {
        ${theme.fonts.mb2_body02_14_m}
        color: ${theme.colors.new_gray01};
    }

    &:focus {
        outline: none;
        border-color: ${theme.colors.new_gray02};
    }
`;

export const textareaStyle = (theme: Theme) => css`
    width: 100%;
    padding: 1.6rem 1.2rem;
    border: 1px solid ${theme.colors.new_gray01};
    border-radius: 4px;
    resize: none;
    ${theme.fonts.mb3_body03_14_re_narrow}
    color: ${theme.colors.black};

    &::placeholder {
        ${theme.fonts.mb3_body03_14_re_narrow}
        color: ${theme.colors.new_gray01};
    }

    &:focus {
        outline: none;
        border-color: ${theme.colors.new_gray02};
    }
`;