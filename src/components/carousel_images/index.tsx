import React, { useEffect, useState } from "react";

import "./styles.scss";

interface TitleProps {
  images: Array<{
    url: string;
    alt?: string;
    id: number | string;
  }>;
}

const CarroselImages: React.FC<TitleProps> = ({ images }) => {
  const [imageRender, setImageRender] = useState(images[0]);

  useEffect(() => {
    setImageRender(images[0]);
  }, [images]);

  const image404 =
    "https://www.unfe.org/wp-content/uploads/2019/04/SM-placeholder-1024x512.png";

  return (
    <div className="carousel-images">
      <img src={imageRender?.url ?? image404} alt={imageRender?.alt} />

      <div className="images">
        {images?.map((image, index) => {
          return (
            <button
              key={index.toString()}
              className={`${image?.id === imageRender?.id ? "active" : null}`}
              type="button"
              onClick={() => setImageRender(image)}
            >
              <img src={image?.url ?? image404} alt={image?.alt} />
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default CarroselImages;
