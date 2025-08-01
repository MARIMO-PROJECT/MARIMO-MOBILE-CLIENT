import type { SVGProps } from "react";
const SvgCopy = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 14 14"
    {...props}
  >
    <path
      stroke="#0A0A0A"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeOpacity={0.6}
      d="M1.2 5v6.933c0 .374 0 .56.073.703a.67.67 0 0 0 .291.291c.143.073.33.073.702.073H9.2M3.867 8.2V3.133c0-.746 0-1.12.145-1.405.128-.251.332-.455.583-.583C4.88 1 5.254 1 6 1h5.067c.747 0 1.12 0 1.405.145.25.128.455.332.583.583.145.285.145.658.145 1.405V8.2c0 .747 0 1.12-.145 1.405-.128.251-.332.455-.583.583-.285.145-.658.145-1.403.145H6c-.746 0-1.12 0-1.404-.145a1.33 1.33 0 0 1-.583-.583c-.145-.285-.145-.658-.145-1.405"
    />
  </svg>
);
export default SvgCopy;
