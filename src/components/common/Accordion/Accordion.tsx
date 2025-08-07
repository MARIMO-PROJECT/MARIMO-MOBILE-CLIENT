import React, { useState } from "react";
import { IcArrowGray0716 } from "../../../assets/svgs";
import { accordionBox, accordionChildrenWrapper, accordionContentWrapper, accordionWrapper, iconStyle, titleStyle } from "./Accordion.style";

interface AccordionProps {
    title: string;
    children: React.ReactNode;
}

const Accordion = ({title, children}: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen(prev => !prev);

  return (
    <div css={accordionWrapper}>
      <div css={accordionBox(isOpen)} onClick={handleToggle}>
        <span css={titleStyle}>{title}</span>
        <IcArrowGray0716 width={16} height={16} css={iconStyle(isOpen)} />
      </div>
      {isOpen && (
        <div css={accordionContentWrapper}>
          <div css={accordionChildrenWrapper}>{children}</div>
        </div>
      )}
    </div>
  );
}

export default Accordion