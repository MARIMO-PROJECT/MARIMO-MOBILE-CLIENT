import { PropsWithChildren, useEffect } from "react";
import { createPortal } from "react-dom";

import { backdropStyle, modalContentStyle } from "./Modal.style";

interface ModalProps {
  onClose: () => void;
}

const potalElement = document.getElementById("modal") as HTMLElement;

const Modal = ({ onClose, children }: PropsWithChildren<ModalProps>) => {
  useEffect(() => {
    const scrollY = window.scrollY;
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.left = "0";
    document.body.style.right = "0";
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.overflow = "";
      window.scrollTo(0, scrollY);
    };
  }, []);
  return createPortal(
    <>
      <div css={backdropStyle} onClick={onClose} />
      <div css={modalContentStyle} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </>,
    potalElement
  );
};

export default Modal;
