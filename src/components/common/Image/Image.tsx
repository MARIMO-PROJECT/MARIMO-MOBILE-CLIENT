import { imageStyle } from "./Image.style";

interface ImageProps {
    src: string;
    alt: string;
}

const Image = ({src, alt}: ImageProps) => {
  return (
    <img src={src} alt={alt} css={imageStyle}/>
  )
}

export default Image