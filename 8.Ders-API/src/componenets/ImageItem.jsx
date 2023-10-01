import React from "react";

const ImageItem = ({ images }) => {
  return (
    <div>
      <img
        className="imgeListImg"
        src={images.urls.small}
        alt={images.alt_description}
      />
    </div>
  );
};

export default ImageItem;
