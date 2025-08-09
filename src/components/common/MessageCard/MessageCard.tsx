import { useState } from "react";
import { IcDeleteGray0412 } from "../../../assets/svgs";
import {
  cardHeaderStyle,
  cardTextStyle,
  cardWrapperStyle,
  deleteIconStyle,
  nicknameStyle,
} from "./MessageCard.style";
import Modal from "../Modal/Modal";
import MessageCardDeleteModal from "../CommonModal/MessageCardDeleteModal";

interface MessageCardProps {
  name: string;
  message: string;
}

const MessageCard = ({ name, message }: MessageCardProps) => {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const openModal = () => setIsDeleteModalOpen(true);
  const closeModal = () => setIsDeleteModalOpen(false);
  return (
    <>
      <div css={cardWrapperStyle}>
        <div css={cardHeaderStyle}>
          <div css={nicknameStyle}>{name}</div>
          <IcDeleteGray0412
            width={12}
            height={12}
            css={deleteIconStyle}
            onClick={openModal}
          />
        </div>
        <div css={cardTextStyle}>{message}</div>
      </div>
      {isDeleteModalOpen && (
        <Modal onClose={closeModal}>
          <MessageCardDeleteModal onClose={closeModal} />
        </Modal>
      )}
    </>
  );
};

export default MessageCard;
