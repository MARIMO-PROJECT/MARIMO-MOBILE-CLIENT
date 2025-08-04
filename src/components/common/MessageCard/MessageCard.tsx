import { IcDeleteGray0412 } from "../../../assets/svgs"
import { cardHeaderStyle, cardTextStyle, cardWrapperStyle, nicknameStyle } from "./MessageCard.style"

const MessageCard = () => {
  return (
    <div css={cardWrapperStyle}>
        <div css={cardHeaderStyle}>
            <div css={nicknameStyle}>화랑버지</div>
            <IcDeleteGray0412 width={12} height={12}/>
        </div>
        <div css={cardTextStyle}>민형아 결혼 정말 축하해!</div>
    </div>
  )
}

export default MessageCard