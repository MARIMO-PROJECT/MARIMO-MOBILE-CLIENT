import { css } from '@emotion/react';

const PretendardFont = css`
  font-family:
    'Pretendard Variable',
    Pretendard,
    -apple-system,
    BlinkMacSystemFont,
    system-ui,
    Roboto,
    'Helvetica Neue',
    'Segoe UI',
    'Apple SD Gothic Neo',
    'Noto Sans KR',
    'Malgun Gothic',
    'Apple Color Emoji',
    'Segoe UI Emoji',
    'Segoe UI Symbol',
    sans-serif;
`;

export const theme = {
  colors: {
    // Lime colors
    lime01: "#F5FFE6",
    lime02: "#FBFFE2",
    lime03: "#DDFFC9",
    lime04: "#DAFFA3",
    lime05: "#D3FF5D",
    lime06: "#BEFF5F",
    lime07: "#78B100",
    lime08: "#4A6A08",
    lime09: "#9CA989",

    // Alert colors
    alert01: "#FF5151",
    alert02: "#FF2E2E",
    alert03: "#D11C13",
    alert04: "#BA2017",
    alert05: "#9E1F19",

    // Grayscale
    black: "#0A0A0A",
    gray07: "#101114",
    gray06: "#1F2126",
    gray05: "#292F38",
    gray04: "#7B8598",
    gray03: "#D7E0EE",
    gray02: "#E7EDF8",
    gray01: "#FAFAFA",
    new_gray01: "#D5D5D5",
    new_gray02: "#585858",
    white: "#FFFFFF",

    // Beige, Yellow, Orange
    beige: "#FFF9F2",
    yellow01: "#FFBB00",
    orange: "#FF5100",
  },

  fonts: {
    mh1_head01_20: css`
      ${PretendardFont};
      font-weight: 500;
      font-size: 2rem;
      line-height: 24px;
      letter-spacing: 0px;
    `,
    mh2_head02_18_sb: css`
      ${PretendardFont};
      font-weight: 600;
      font-size: 1.8rem;
      line-height: 30px;
      letter-spacing: -0.72px;
    `,
    mh3_head03_18: css`
      ${PretendardFont};
      font-weight: 500;
      font-size: 1.8rem;
      line-height: 20px;
      letter-spacing: -0.72px;
    `,
    mb1_body01_14_sb: css`
      ${PretendardFont};
      font-weight: 600;
      font-size: 1.4rem;
      line-height: 20px;
      letter-spacing: -0.56px;
    `,
    mb2_body02_14_m: css`
      ${PretendardFont};
      font-weight: 500;
      font-size: 1.4rem;
      line-height: 14px;
      letter-spacing: -0.56px;
    `,
    mb3_body03_14_re_narrow: css`
      ${PretendardFont};
      font-weight: 400;
      font-size: 1.4rem;
      line-height: 24px;
      letter-spacing: -0.84px;
    `,
    mb4_body04_14_re_default: css`
      ${PretendardFont};
      font-weight: 400;
      font-size: 1.4rem;
      line-height: 20px;
      letter-spacing: -0.56px;
    `,
    mb5_body05_14_re: css`
      ${PretendardFont};
      font-weight: 400;
      font-size: 1.4rem;
      line-height: 24px;
      letter-spacing: -0.28px;
    `,
    mc1_caption01_12_m: css`
      ${PretendardFont};
      font-weight: 500;
      font-size: 1.2rem;
      line-height: 14px;
      letter-spacing: -0.96px;
    `,
    mc2_caption02_12_re: css`
      ${PretendardFont};
      font-weight: 400;
      font-size: 1.2rem;
      line-height: 22px;
      letter-spacing: -0.48px;
    `,
    mc3_caption03_12_light: css`
      ${PretendardFont};
      font-weight: 300;
      font-size: 1.2rem;
      line-height: 14px;
      letter-spacing: -0.96px;
    `,
    mc4_caption04_12_el: css`
      ${PretendardFont};
      font-weight: 200;
      font-size: 1.2rem;
      line-height: 14px;
      letter-spacing: -0.96px;
    `,
  },
};

export type ColorType = typeof theme.colors;
export type FontType = typeof theme.fonts;

export interface ThemeType {
  colors: ColorType;
  fonts: FontType;
}

export default theme;