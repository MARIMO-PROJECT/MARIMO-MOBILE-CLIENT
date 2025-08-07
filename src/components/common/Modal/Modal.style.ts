import { Theme, css } from '@emotion/react';
import { flexGenerator } from '../../../styles/generator';


export const backdropStyle = css`
  position: fixed;
  left: 0;
  top: 0;

  width: 100%;
  height: 100%;

  z-index: 3;

  background: rgba(10, 10, 10, 0.6);
  /* backdrop-filter: blur(5px); */
`;

export const modalContentStyle = (theme: Theme) => css`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 4;
  ${flexGenerator()}

  border-radius: 4px;
  background-color: ${theme.colors.gray01};
`;
