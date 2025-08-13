import { useState, type ChangeEvent } from "react"
import { IcDeleteGray0428 } from "../../../assets/svgs";
import Input from "../Input/Input";
import Button from "../Button/Button";
import {
  bodyContainer,
  buttonWrapper,
  deleteIconStyle,
  headerContainer,
  headerH1Style,
  modalContainer,
} from "./CommonModal.style";

interface MessageCardDeleteModalProps {
    onClose: () => void;
}

const MessageCardDeleteModal = ({onClose}: MessageCardDeleteModalProps) => {
    const [password, setPassword] = useState("");

    const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value)
    }

    const isDisabled = !password.trim();
  return (
    <div css={modalContainer}>
        <div css={headerContainer}>
            <h1 css={headerH1Style}>방명록 삭제</h1>
            <IcDeleteGray0428 width={14} height={14} css={deleteIconStyle} onClick={onClose}/>
        </div>
        <div css={bodyContainer}>
            <Input label="비밀번호" essential={true} placeholder="비밀번호 4자리" value={password} onChange={handlePasswordChange}/>
            <div css={buttonWrapper}>
                <Button concept="modal" disabled={isDisabled}>확인</Button>
            </div>
        </div>
    </div>
  )
}

export default MessageCardDeleteModal