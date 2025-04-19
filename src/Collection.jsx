import { useState } from "react";

function Collection({ name, images }) {
  const [currentImage, setCurrentImage] = useState(0);

  return (
    <div className="collection">
      <img className="collection__big" src={images[currentImage]} alt="Item" />
      <div className="collection__bottom">
        {images.map((img, index) => (
          <img
            key={index}
            onClick={() => setCurrentImage(index)}
            className="collection__mini"
            src={img}
            alt="Item"
          />
        ))}
      </div>
      <h4>{name}</h4>
    </div>
  );
}

export default Collection;
