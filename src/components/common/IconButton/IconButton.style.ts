import type { Theme } from "@emotion/react";
import { css } from "@emotion/react";
import { flexGenerator } from "../../../styles/generator";

export const buttonStyle = css`
    ${flexGenerator()}
    width: 100%;
    border: none;
    outline: none;
    background-color: transparent;
    cursor: pointer;
`;

export const variantStyle = {
    write: (theme: Theme) => css`
        ${theme.fonts.mc1_caption01_12_m};
        gap: 0.4rem;
    `,
    copy: (theme: Theme) => css`
        ${theme.fonts.mc3_caption03_12_light};
        gap: 0.5rem;
        color: rgba(10, 10, 10, 0.6);
    `,
}

export const iconStyle = (size: number) => css`
    width: ${size}px;
    height: ${size}px;
`;