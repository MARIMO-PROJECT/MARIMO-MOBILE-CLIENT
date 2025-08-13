import { useState } from "react";
import { Copy, IcShare, IcSound, IcWrite } from "../../assets/svgs";
import Accordion from "../../components/common/Accordion/Accordion";
import Button from "../../components/common/Button/Button";
import IconButton from "../../components/common/IconButton/IconButton";
import Image from "../../components/common/Image/Image";
import MessageCard from "../../components/common/MessageCard/MessageCard";
import {
  accordionWrapper,
  accountAndTelAccordionWrapper,
  accountAndTelContainer,
  buttonWrapper,
  dateAndWeddingVenueStyle,
  dividerStyle,
  filmImageAndInvitationSection,
  filmImageStyle,
  galleryWrapper,
  gradationStyle,
  groomAndBrideNameContainer,
  groomAndBrideNameWrapper,
  h1TextStyle,
  mapBox,
  messageCardList,
  nameLabelStyle,
  nameStyle,
  nameTextStyle,
  pageContainer,
  pStyle,
  section2firstDiv,
  section2InvitationDiv,
  section3Container,
  section4Container,
  section4dDayOrange,
  section4dDayStyle,
  section4EnDateStyle,
  section4Image,
  section4KrDateStyle,
  section5Container,
  section6Container,
  section7ContactBody,
  section7ContactContainer,
  section7Container,
  section7H1Style,
  section7SubStyle,
  section7SubWrapper,
  section8Container,
  section8SubStyle,
  section9Container,
  sectionDivider,
  soundIconStyle,
  thumbnailContainer,
} from "./MagazineConcept.style";
import Modal from "../../components/common/Modal/Modal";
import MessageCardWriteModal from "../../components/common/CommonModal/MessageCardWriteModal";
import RsvpModal from "../../components/common/CommonModal/RsvpModal";

const thumbnailImage = "/images/magazine_thumbnail.png";
const filmImage = "/images/magazine_film.png";
const section3Images = [
  "/images/img_magazine_1.png",
  "/images/img_magazine_2.png",
  "/images/img_magazine_3.png",
];
const calendarImage = "/images/img_callender.png";
const section6Image = "/images/img_magazine_section6.png";
const guestbook = [
  {
    name: "김창균",
    message: "화랑아 결혼 정말 축하해!",
  },
  {
    name: "손지유",
    message:
      "채연 언니 결혼 정말 축하해! 항상 웃음 가득한 하루하루 보내길 바랄게!",
  },
  {
    name: "장세희",
    message:
      "채연 언니 결혼 정말 축하해! 항상 웃음 가득한 하루하루 보내길 바랄게! 두 사람의 손길 가득한 청첩장 너무 예쁘다. 그 다음은 잘 안 보여서 패스",
  },
  {
    name: "권재희",
    message: "망고 맛있노",
  },
];

const galleryImages = [
  "/images/gallery_1.png",
  "/images/gallery_2.png",
  "/images/gallery_3.png",
  "/images/gallery_4.png",
  "/images/gallery_5.png",
  "/images/gallery_6.png",
  "/images/gallery_7.png",
  "/images/gallery_8.png",
  "/images/gallery_9.png",
  "/images/gallery_1.png",
  "/images/gallery_2.png",
  "/images/gallery_3.png",
  "/images/gallery_4.png",
];

const endImage = "/images/img_magazine_end.png";

const MagazineConcept = () => {
  const [isMessageExpanded, setIsMessageExpanded] = useState(false);
  const [isGalleryExpanded, setIsGalleryExpanded] = useState(false);
  const [isWriteModalOpen, setIsWriteModalOpen] = useState(false);
  const [isRsvpModalOpen, setIsRsvpModalOpen] = useState(false);

  const openWriteModal = () => setIsWriteModalOpen(true);
  const closeWriteModal = () => setIsWriteModalOpen(false);

  const openRsvpModal = () => setIsRsvpModalOpen(true);
  const closeRsvpModal = () => setIsRsvpModalOpen(false);

  const visibleMessageCards = isMessageExpanded
    ? guestbook
    : guestbook.slice(0, 3);
  const toggleMessageText = isMessageExpanded ? "닫기" : "더보기";

  const visibleGallery = isGalleryExpanded
    ? galleryImages
    : galleryImages.slice(0, 9);
  const toggleGalleryText = isGalleryExpanded ? "닫기" : "더보기";

  return (
    <div css={pageContainer}>
      <section css={thumbnailContainer}>
        <Image src={thumbnailImage} alt="thumbnail-image" />
        <IcSound width={24} height={24} css={soundIconStyle} />
      </section>
      <section css={filmImageAndInvitationSection}>
        <div css={section2firstDiv}>
          <span css={nameTextStyle}>Doyoung and Minyoung</span>
          <Image src={filmImage} alt="film-image" css={filmImageStyle} />
        </div>
        <div css={dividerStyle} />
        <div css={section2InvitationDiv}>
          <h1 css={h1TextStyle}>INVITATION</h1>
          <p css={pStyle}>
            <span>
              '사랑이란 별다른 것이 아니라
              <br />그 사람과 함께 늙어가고 싶은 것이다'
            </span>
            <span>
              평생을 함께 하고 싶은 사람을 만났습니다
              <br />
              이제 그 사람과 사랑의 결실을 맺고자 합니다
            </span>
            <span>부디 오셔서 저희의 영원한 증인이 되어 주십시오</span>
          </p>
          <div css={groomAndBrideNameContainer}>
            <div css={groomAndBrideNameWrapper}>
              <span css={nameLabelStyle}>신랑</span>
              <span css={nameStyle}>정도영</span>
            </div>
            <div css={groomAndBrideNameWrapper}>
              <span css={nameLabelStyle}>신부</span>
              <span css={nameStyle}>허민형</span>
            </div>
          </div>
          <div css={dateAndWeddingVenueStyle}>
            <span>2025.07.01 TUE 02:00 PM</span>
            <span>드메르 웨딩홀</span>
          </div>
        </div>
      </section>
      <section css={section3Container}>
        {section3Images.map((img, i) => (
          <Image key={i} src={img} alt={`${img}-${i}`} />
        ))}
      </section>
      <section css={section4Container}>
        <h1 css={h1TextStyle}>WEDDING DAY</h1>
        <span css={section4KrDateStyle}>2025년 7월 1일 화요일 | 오후 2시</span>
        <span css={section4EnDateStyle}>Tuesday July 01 2025 | PM 12:00</span>
        <Image src={calendarImage} alt="calendar-image" css={section4Image} />
        <span css={section4dDayStyle}>
          도영과 나현의 결혼식이 <span css={section4dDayOrange}>58</span>일
          남았습니다
        </span>
      </section>
      <div css={sectionDivider} />
      <section css={section5Container}>
        <h1 css={h1TextStyle}>LOCATION</h1>
        <span css={section4KrDateStyle}>드메르 웨딩홀</span>
        <IconButton
          variant="copy"
          text="광주 광산구 임방울대로 549"
          icon={<Copy />}
          size={12}
        />
        <div css={mapBox}>지도 넣을 곳</div>
        <div css={accordionWrapper}>
          <Accordion title="전세 버스"></Accordion>
          <Accordion title="피로연"></Accordion>
        </div>
      </section>
      <section css={section6Container}>
        <Image src={section6Image} alt="section6-image" />
      </section>
      <section css={section7Container}>
        <div css={section7ContactContainer}>
          <h1 css={h1TextStyle}>CONTACT</h1>
          <div css={section7ContactBody}>
            <h4 css={section7H1Style}>Message</h4>
            <div css={section7SubWrapper}>
              <span css={section7SubStyle}>
                저희 둘에게 따뜻한 방명록을 남겨주세요
              </span>
              <IconButton
                variant="write"
                text="작성"
                icon={<IcWrite />}
                size={14}
                onClick={openWriteModal}
              />
            </div>
          </div>
          {isWriteModalOpen && (
            <Modal onClose={closeWriteModal}>
              <MessageCardWriteModal onClose={closeWriteModal} />
            </Modal>
          )}
          <div css={messageCardList}>
            {visibleMessageCards.map((card, i) => (
              <MessageCard name={card.name} message={card.message} key={i} />
            ))}
            {!isMessageExpanded && <div css={gradationStyle} />}
          </div>

          <div css={buttonWrapper}>
            <Button
              concept="magazine"
              onClick={() => setIsMessageExpanded((prev) => !prev)}
            >
              {toggleMessageText}
            </Button>
          </div>
        </div>
        <div css={accountAndTelContainer}>
          <div css={section7ContactBody}>
            <h4 css={section7H1Style}>Account</h4>
            <span css={section7SubStyle}>
              참석이 어려운 분들을 위한 마음 전하실 곳입니다
            </span>
          </div>
          <div css={accountAndTelAccordionWrapper}>
            <Accordion title="신랑측 계좌번호"></Accordion>
            <Accordion title="신부측 계좌번호"></Accordion>
          </div>
        </div>
        <div css={accountAndTelContainer}>
          <div css={section7ContactBody}>
            <h4 css={section7H1Style}>TEL & RSVP</h4>
            <span css={section7SubStyle}>
              참석이 어려운 분들을 위한 마음 전하실 곳입니다
            </span>
          </div>
          <div css={accountAndTelAccordionWrapper}>
            <Accordion title="신랑측 연락처"></Accordion>
            <Accordion title="신부측 연락처"></Accordion>
          </div>
          <div css={buttonWrapper}>
            <Button concept="magazine" onClick={openRsvpModal}>
              참석의사 전달하기
            </Button>
          </div>
          {isRsvpModalOpen && (
            <Modal onClose={closeRsvpModal}>
              <RsvpModal onClose={closeRsvpModal} />
            </Modal>
          )}
        </div>
      </section>
      <div css={sectionDivider} />
      <section css={section8Container}>
        <h1 css={h1TextStyle}>Gallery</h1>
        <span css={section8SubStyle}>
          사진을 클릭하시면 전체 화면 보기가 가능합니다
        </span>
        <div css={galleryWrapper}>
          {visibleGallery.map((img, i) => (
            <Image src={img} alt={`${img}-${i}`} key={i} />
          ))}
          {!isGalleryExpanded && <div css={gradationStyle} />}
        </div>
        <div css={buttonWrapper}>
          <Button
            concept="magazine"
            onClick={() => setIsGalleryExpanded((prev) => !prev)}
          >
            {toggleGalleryText}
          </Button>
        </div>
      </section>
      <section css={section9Container}>
        <Image src={endImage} alt="magazine-end-image" />
        <div css={buttonWrapper}>
          <Button concept="magazine" icon={<IcShare width={16} height={16} />}>
            공유하기
          </Button>
        </div>
      </section>
    </div>
  );
};

export default MagazineConcept;
