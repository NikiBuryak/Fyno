import React from "react";
import CustomGallary from "../../components/custom-gallary/CustomGallary";
import { IImage } from "../../types/types";
import { CustomButton } from "../../components/custom-button/CustomButton";

import "./TripGallery.scss";

interface IProps {
  images: IImage[];
}

export const TripGallery = ({ images }: IProps) => {
  return (
    <div className="trip-gallery">
      <CustomGallary images={images} />
      <CustomButton
        borderRadius="full"
        design="transparent"
        handleClick={() => console.log("click gallery btn")}
        label="All photos"
        type="button"
        additionalStyles="trip-gallery-btn"
        icon="Dots"
      />
    </div>
  );
};
