import { IcSound } from "../../assets/svgs"
import Image from "../../components/common/Image/Image"

const thumbnailImage = "/images/magazine_thumbnail.png"

const MagazineConcept = () => {
  return (
    <div>
        <section>
            <Image src={thumbnailImage} alt="thumbnail-image"/>
            <IcSound width={24} height={24}/>
        </section>
    </div>
  )
}

export default MagazineConcept