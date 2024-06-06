import React from "react";

import { ReactComponent as Bookmark } from "../../assets/icons/Bookmark.svg";
import { ReactComponent as Rating } from "../../assets/icons/ArrowRate.svg";
import { ReactComponent as Drag } from "../../assets/icons/DragDrop.svg";
import { ReactComponent as Ellipsis } from "../../assets/icons/Ellipsis.svg";

import "./TripCard.scss";
import { IPlaceCard } from "../../types/types";

interface IProps {
  card: IPlaceCard;
  isPlan?: boolean;
}

export const TripCard = ({ card, isPlan }: IProps) => {
  return (
    <div className={`trip-card ${isPlan && "plan"}`}>
      <div className="trip-card-header">
        <div className="trip-card-header-image">
          <img src={card.img} alt={card.title} />
        </div>
        {card.badges && !isPlan && <CardBadges badges={card.badges} />}
        {!isPlan && (
          <button
            className="trip-card-bookmark icon-button"
            onClick={() => console.log("added to favorite")}
            type="button"
          >
            <Bookmark />
          </button>
        )}
      </div>
      <div className="trip-card-body">
        <h5 className="trip-card-body-title">{card.title}</h5>
        {card.rating && (
          <div className="trip-card-body-rating">
            <Rating />
            <span>{card.rating}/10</span>
          </div>
        )}
        {card.badges && isPlan && (
          <CardBadges badges={card.badges} isPlan={isPlan} />
        )}
        <span className="trip-card-body-description text-light">
          {card.description}
        </span>
      </div>

      {isPlan && (
        <div className="trip-card-settings">
          <button className="icon-button">
            <Drag />
          </button>
          <button className="icon-button">
            <Ellipsis />
          </button>
        </div>
      )}
    </div>
  );
};

const CardBadges = ({
  badges,
  isPlan,
}: {
  badges: string[];
  isPlan?: boolean;
}) => (
  <div className={`trip-card-badges ${isPlan && "plan"}`}>
    {badges.map((badge) => (
      <span className="trip-card-badge" key={badge}>
        {badge}
      </span>
    ))}
  </div>
);
