import React, { useState } from "react";

import "./styles.scss";

interface TitleProps {
  images: Array<{
    url: string;
    alt?: string;
    id: string | number;
  }>;
}

const CarroselImages: React.FC<TitleProps> = ({ images }) => {
  const [imageRender, setImageRender] = useState(images[0]);

  return (
    <div className="carousel-images">
      <img src={imageRender.url} alt={imageRender.alt} />

      <div className="images">
        {images.map((image, index) => {
          return (
            <button
              key={index.toString()}
              className={`${image.id === imageRender.id ? "active" : null}`}
              type="button"
              onClick={() => setImageRender(image)}
            >
              <img src={image.url} alt={image.alt} />
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default CarroselImages;
