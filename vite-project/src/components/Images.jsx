import React, { useContext } from "react";
import PixabayContext from "../context/PixabayContext";

const Images = () => {
  const { imageData } = useContext(PixabayContext);
  return (
    <div className="flex">
  {imageData.map((image) => (
    <div className="item" key={image.id}>
      <img className="item_img" src={image.webformatURL} alt={image.tags} />
    </div>
  ))}
</div>
  );
};

export default Images;
