import React from "react";

import "./CustomGallery.scss";
import { IImage } from "../../types/types";

interface IProps {
  images: IImage[];
}

export const CustomGallary = ({ images }: IProps): JSX.Element => {
  return (
    <div className="custom-gallery">
      {images.map((el) => (
        <img
          key={el.url}
          src={el.url}
          className={`custom-gallery-item ${el.isMain && "item-main"}`}
        />
      ))}
    </div>
  );
};

export default CustomGallary;
