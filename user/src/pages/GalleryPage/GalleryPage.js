import { useState } from "react";
import { Gallery } from "react-grid-gallery";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import { GalleryImage } from "../../data/GalleryImageData";

const GalleryPage = () => {
  
  const [index, setIndex] = useState(-1);

  const currentImage = GalleryImage[index];
  const nextIndex = (index + 1) % GalleryImage.length;
  const nextImage = GalleryImage[nextIndex] || currentImage;
  const prevIndex = (index + GalleryImage.length - 1) % GalleryImage.length;
  const prevImage = GalleryImage[prevIndex] || currentImage;

  const handleClick = (number) => setIndex(number);
  const handleClose = () => setIndex(-1);
  const handleMovePrev = () => setIndex(prevIndex);
  const handleMoveNext = () => setIndex(nextIndex);

  return (
    <div className="min-h-screen dark:bg-gray-800 dark:text-white">
      <Gallery images={GalleryImage} onClick={handleClick} enableImageSelection={false} />
      {!!currentImage && (
        <Lightbox
          mainSrc={currentImage.src}
          imageTitle={currentImage.caption}
          mainSrcThumbnail={currentImage.src}
          nextSrc={nextImage.src}
          nextSrcThumbnail={nextImage.src}
          prevSrc={prevImage.src}
          prevSrcThumbnail={prevImage.src}
          onCloseRequest={handleClose}
          onMovePrevRequest={handleMovePrev}
          onMoveNextRequest={handleMoveNext}
        />
      )}
    </div>
  );
};

export default GalleryPage;
