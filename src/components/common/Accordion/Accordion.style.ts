import { css } from "@emotion/react";
import { flexGenerator } from "../../../styles/generator";
import type { Theme } from "@emotion/react";

export const accordionWrapper = css`
    ${flexGenerator("column")}
    width: 100%;
`;

export const accordionBox = (isOpen: boolean) => css`
    ${flexGenerator("row", "space-between")}
    width: 100%;
    padding: 1.5rem 2.7rem 1.5rem 2rem;
    cursor: pointer;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    border-bottom-left-radius: ${isOpen ? "0" : "4px"};
    border-bottom-right-radius: ${isOpen ? "0" : "4px"};
`;

export const titleStyle = (theme: Theme) => css`
    color: ${theme.colors.black};
`;

export const iconStyle = (isOpen: boolean) => css`
    ${flexGenerator()}
    width: 1.4rem;
    height: 0.7rem;
    transition: transform 0.3s ease;
    transform: rotate(${isOpen ? "180deg" : "0deg"});
`;


export const accordionContentWrapper = (theme: Theme) => css`
    ${flexGenerator("column", "flex-start", "flex-start")}
    width: 100%;
    min-height: 6.4rem;
    padding: 0 2.5rem;
    border-top: 1px solid ${theme.colors.new_gray01};
`;

export const accordionChildrenWrapper = css`
    ${flexGenerator("column", "flex-start", "flex-start")}
    padding: 1.3rem;
`;