import { useState, type ChangeEvent } from "react"
import { IcDeleteGray0428 } from "../../../assets/svgs"
import Input from "../Input/Input"
import Button from "../Button/Button"
import {
  bodyContainer,
  buttonWrapper,
  deleteIconStyle,
  headerContainer,
  headerH1Style,
  inputWrapper,
  modalContainer,
} from "./CommonModal.style";

interface MessageCardWriteModalProps {
  onClose: () => void;
}

const MessageCardWriteModal = ({onClose}: MessageCardWriteModalProps) => {
  const [nameInput, setNameInput] = useState("")
  const [messageInput, setMessageInput] = useState("")

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNameInput(e.target.value);
  };
  const handleMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setMessageInput(e.target.value);
  };

  const isDisabled = !nameInput.trim() || !messageInput.trim()
  return (
    <div css={modalContainer}>
        <div css={headerContainer}>
            <h1 css={headerH1Style}>방명록 작성</h1>
            <IcDeleteGray0428 width={14} height={14} css={deleteIconStyle} onClick={onClose}/>
        </div>
        <div css={bodyContainer}>
          <div css={inputWrapper}>
              <Input label="성함" essential={true} placeholder="홍길동" value={nameInput} onChange={handleNameChange}/>
              <Input label="메세지" essential={true} placeholder="최대 150자까지 입력할 수 있습니다" value={messageInput} onChange={handleMessageChange}/>
          </div>
          <div css={buttonWrapper}>
              <Button concept="modal" disabled={isDisabled}>확인</Button>
          </div>
        </div>
    </div>
  )
}

export default MessageCardWriteModal