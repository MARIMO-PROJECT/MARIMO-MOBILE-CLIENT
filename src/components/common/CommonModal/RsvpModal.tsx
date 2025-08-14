import { useState } from "react";
import {
  IcCheckAfter,
  IcCheckBefore,
  IcDeleteGray0428,
} from "../../../assets/svgs";
import Button from "../Button/Button";
import Input from "../Input/Input";
import Radio from "../Radio/Radio";
import {
  agreeTextStyle,
  buttonWrapper,
  deleteIconStyle,
  headerContainer,
  headerH1Style,
  modalContainer,
  modalWrapper,
  personalInfoWrapper,
  pStyle,
  radioSpanStyle,
  radioWrapper,
  rsvpBodyContainer,
  rsvpFormWrapper,
  strongSpanStyle,
} from "./CommonModal.style";
import QuantityInput from "../QuantityInput/QuantityInput";

interface RsvpModalProps {
  onClose: () => void;
}

const RsvpModal = ({ onClose }: RsvpModalProps) => {
  const [side, setSide] = useState<string>("");
  const [attendance, setAttendance] = useState<string>("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [companion, setCompanion] = useState(0);
  const [meal, setMeal] = useState<string>("");
  const [isAgreeChecked, setIsAgreeChecked] = useState(false);

  const isDisabled =
    !side || !attendance || !name.trim() || !phone.trim() || !isAgreeChecked;
  return (
    <div css={modalContainer}>
      <div css={modalWrapper}>
        <div css={headerContainer}>
          <h1 css={headerH1Style}>참석의사 전달</h1>
          <IcDeleteGray0428
            width={14}
            height={14}
            css={deleteIconStyle}
            onClick={onClose}
          />
        </div>
        <div css={rsvpBodyContainer}>
          <div css={rsvpFormWrapper}>
            <div css={radioWrapper}>
              <span css={radioSpanStyle}>어느 분의 하객이신가요?</span>
              <Radio
                name="side"
                options={["신랑측 하객", "신부측 하객"]}
                value={side}
                onChange={(val) => setSide(val)}
              />
            </div>
            <div css={radioWrapper}>
              <span css={radioSpanStyle}>참석여부</span>
              <Radio
                name="attendance"
                options={["네", "아니오"]}
                value={attendance}
                onChange={(val) => setAttendance(val)}
              />
            </div>
            <Input
              label="성함"
              placeholder="홍길동"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Input
              label="연락처"
              placeholder="010-1234-5678"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <QuantityInput
              label="동행인"
              value={companion}
              onChange={(newValue) => setCompanion(newValue)}
            />
            <div css={radioWrapper}>
              <span css={radioSpanStyle}>식사여부</span>
              <Radio
                name="meal"
                options={["네", "아니오"]}
                value={meal}
                onChange={(val) => setMeal(val)}
              />
            </div>
          </div>
          <div css={personalInfoWrapper}>
            <span css={strongSpanStyle}>개인정보 수집 및 이용 동의 (필수)</span>
            <p css={pStyle}>
              참석여부 전달을 위한 개인정보 수집 및 이용에 동의해주세요. 성함 및
              연락처는 청첩장 이용 종료시까지 활용됩니다.
            </p>
            <span
              css={agreeTextStyle}
              onClick={() => setIsAgreeChecked((prev) => !prev)}
            >
              {isAgreeChecked ? (
                <IcCheckAfter width={18} height={18} />
              ) : (
                <IcCheckBefore width={18} height={18} />
              )}
              동의합니다
            </span>
          </div>
          <div css={buttonWrapper}>
            <Button concept="modal" disabled={isDisabled}>
              확인
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RsvpModal;
