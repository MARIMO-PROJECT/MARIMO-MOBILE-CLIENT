import { css } from "@emotion/react";
import { flexGenerator } from "../../styles/generator";
import type { Theme } from "@emotion/react";

export const pageContainer = (theme: Theme) => css`
  background-color: ${theme.colors.gray01};
`;

export const thumbnailContainer = css`
  position: relative;
  width: 100%;
  display: inline-block;
`;

export const soundIconStyle = css`
  position: absolute;
  top: 2.6rem;
  right: 1.8rem;
  cursor: pointer;
`;

export const filmImageAndInvitationSection = (theme: Theme) => css`
  ${flexGenerator("column")}
  width: 100%;
  padding: 0 1.8rem;
  background-color: ${theme.colors.gray01};
`;

export const section2firstDiv = css`
  ${flexGenerator("column")}
  gap: 1.4rem;
  padding: 4.9rem 9rem;
`;

export const nameTextStyle = (theme: Theme) => css`
  color: ${theme.colors.black};
`;

export const filmImageStyle = css`
  width: 17.7rem;
  height: 10rem;
`;

export const dividerStyle = css`
  width: 100%;
  height: 1px;
  border-radius: 3px;
  background-color: rgba(103, 103, 103, 0.5);
`;

export const section2InvitationDiv = css`
  ${flexGenerator("column")}
  width: 100%;
  padding: 5.6rem 5.8rem;
`;

export const h1TextStyle = (theme: Theme) => css`
  ${theme.fonts.mh1_head01_20}
  color: ${theme.colors.black};
`;

export const pStyle = css`
  ${flexGenerator("column")}
  gap: 2.7rem;
  margin: 4.4rem 0 6rem 0;
  text-align: center;
`;

export const groomAndBrideNameContainer = css`
  ${flexGenerator()}
  gap: 1.8rem;
`;

export const groomAndBrideNameWrapper = css`
  ${flexGenerator()}
  gap: 0.6rem;
`;

export const nameLabelStyle = (theme: Theme) => css`
  ${theme.fonts.mc3_caption03_12_light}
  color: ${theme.colors.black};
`;

export const nameStyle = (theme: Theme) => css`
  ${theme.fonts.mc1_caption01_12_m}
  color: ${theme.colors.black};
`;

export const dateAndWeddingVenueStyle = (theme: Theme) => css`
  ${flexGenerator()}
  gap: 1rem;
  margin-top: 2rem;
  ${theme.fonts.mc3_caption03_12_light}
  color: ${theme.colors.black};
`;

export const section3Container = css`
  ${flexGenerator("column")}
  gap: 0;
`;

export const section4Container = css`
  ${flexGenerator("column")}
  padding: 5.6rem 4.25rem 5.6rem 4.25rem;
`;

export const section4KrDateStyle = (theme: Theme) => css`
  ${theme.fonts.mb3_body03_14_re_narrow}
  color: ${theme.colors.black};
  margin-top: 2.4rem;
  margin-bottom: 1rem;
`;

export const section4EnDateStyle = (theme: Theme) => css`
  ${theme.fonts.mc3_caption03_12_light}
  color: rgba(10, 10, 10, 0.6);
  margin-bottom: 2.4rem;
`;

export const section4Image = css`
  width: 100%;
`;

export const section4dDayStyle = (theme: Theme) => css`
  ${theme.fonts.mb4_body04_14_re_default}
  color: ${theme.colors.black};
  margin-top: 2.4rem;
`;

export const section4dDayOrange = (theme: Theme) => css`
  ${theme.fonts.mb1_body01_14_sb}
  color: ${theme.colors.orange};
`;

export const sectionDivider = css`
  width: 90%;
  height: 1px;
  margin: 0 auto;
  border-radius: 3px;
  background-color: rgba(103, 103, 103, 0.5);
`;

export const section5Container = css`
  ${flexGenerator("column")}
  padding: 5.6rem 4.25rem 6.4rem 4.25rem;
`;

export const mapBox = (theme: Theme) => css`
  width: 100%;
  height: 20rem;
  border-radius: 4px;
  border: 1px solid ${theme.colors.gray03};
  margin: 2.4rem 0;
`;

export const accordionWrapper = css`
  ${flexGenerator("column")}
  width: 100%;
  gap: 0.8rem;
`;

export const section6Container = css`
  width: 100%;
`;

export const section7Container = css`
  ${flexGenerator("column")}
  padding: 6.4rem 4.25rem;
`;

export const section7DivWrapper = css`
  ${flexGenerator("column", "flex-start", "flex-start")}
  gap: 1rem;
  width: 100%;
`;

export const section7ContactContainer = css`
  ${flexGenerator("column")}
  gap: 2.4rem;
  width: 100%;
`;

export const section7ContactBody = css`
  ${flexGenerator("column", "flex-start", "flex-start")}
  gap: 1rem;
  width: 100%;
`;

export const section7H1Style = (theme: Theme) => css`
  ${theme.fonts.mh3_head03_18}
  color: ${theme.colors.orange};
`;

export const section7SubStyle = (theme: Theme) => css`
  ${theme.fonts.mb2_body02_14_m}
  color: ${theme.colors.gray07};
`;

export const section7SubWrapper = css`
  ${flexGenerator("row", "space-between")}
  width: 100%;
`;

export const messageCardList = css`
  ${flexGenerator("column")}
  width: 100%;
  gap: 0.8rem;
  position: relative;
`;

export const gradationStyle = css`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 333px;
  background: linear-gradient(
    180deg,
    rgba(248, 248, 248, 0) 17.77%,
    #f8f8f8 91.99%
  );
`;

export const buttonWrapper = css`
  ${flexGenerator()}
  margin: 0 auto;
`;

export const accountAndTelContainer = css`
  ${flexGenerator("column", "flex-start", "flex-start")}
  width: 100%;
  gap: 2.4rem;
  margin-top: 6.4rem;
`;

export const accountAndTelAccordionWrapper = css`
  ${flexGenerator("column", "flex-start", "flex-start")}
  width: 100%;
  gap: 1rem;
`;

export const section8Container = css`
  ${flexGenerator("column")}
  gap: 2.4rem;
  padding: 5.6rem 0 6.4rem 0;
`;

export const section8SubStyle = (theme: Theme) => css`
  ${theme.fonts.mb3_body03_14_re_narrow}
  color: ${theme.colors.black};
`;

export const galleryWrapper = css`
  position: relative;
  display: grid;
  width: 100%;
  padding: 0 1.75rem;
  grid-template-columns: repeat(3, auto);
  gap: 1.1rem;
`;

export const galleryImageBox = css`
  ${flexGenerator()}
  width: 10.6rem;
  height: 10.6rem;
`;

export const section9Container = css`
  ${flexGenerator("column")}
  gap: 6.4rem;
  padding-bottom: 12.7rem;
`;
