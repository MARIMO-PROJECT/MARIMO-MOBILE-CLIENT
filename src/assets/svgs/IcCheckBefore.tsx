import type { SVGProps } from "react";
const SvgIcCheckBefore = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 18 18"
    {...props}
  >
    <circle cx={9} cy={9} r={9} fill="#D5D5D5" />
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m5 8.5 3.5 4 5-6.5"
    />
  </svg>
);
export default SvgIcCheckBefore;
