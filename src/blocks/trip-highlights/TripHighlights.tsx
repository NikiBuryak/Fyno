import React from "react";
import { ICommentPerson } from "../../types/types";
import { CustomButton } from "../../components/custom-button/CustomButton";

import "./TripHighlights.scss";

interface IProps {
  data: {
    title: string;
    person: ICommentPerson;
    description: string;
  };
}

export const TripHighlights = ({ data }: IProps) => {
  const { description, person, title } = data;
  return (
    <div className="trip-highlights">
      <div className="trip-highlights-header">
        <h1 className="trip-highlights-header-title">{title}</h1>
        <div className="trip-highlights-header-actions">
          <CustomButton
            borderRadius="half"
            design="white"
            handleClick={() => console.log("added to wishlist")}
            type="button"
            label="Add to wishlist"
            icon="BookmarkSmall"
          />
          <CustomButton
            borderRadius="half"
            design="white"
            handleClick={() => console.log("added to wishlist")}
            type="button"
            label="Share"
            icon="Share"
          />
        </div>
      </div>
      <div className="trip-highlights-body">
        <div className="trip-highlights-body-expert">
          <img
            src={person.avatar}
            alt="Expert avatar"
            className="trip-highlights-body-expert-avatar"
          />
          <div className="trip-highlights-body-expert-info">
            <span className="text-regular">{person.title}</span>
            <span className="text-light">{person.subtitle}</span>
          </div>
        </div>
        <p className="trip-highlights-body-text text-regular">{description}</p>
      </div>
    </div>
  );
};
