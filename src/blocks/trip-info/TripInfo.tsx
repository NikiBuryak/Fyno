import React from "react";
import "./TripInfo.scss";
import { ITripShortInfo } from "../../types/types";

interface IProps {
  data: ITripShortInfo;
  scrollEl: React.RefObject<HTMLDivElement>;
}

export const TripInfo = ({ data, scrollEl }: IProps): JSX.Element => {
  const { duration, exploration, flight } = data;

  const handleScrollClick = () => {
    if (!scrollEl) return;
    scrollEl.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
  return (
    <div className="trip-info">
      <div className="trip-info-items">
        <div className="trip-info-item">
          <span className="text-light">Trip duration</span>
          <span className="text-regular">{duration}</span>
        </div>
        <div className="trip-info-item">
          <span className="text-light">Exploration</span>
          <span className="text-regular">{exploration}</span>
        </div>
        <div className="trip-info-item">
          <span className="text-light">Flight</span>
          <span className="text-regular">{flight}</span>
        </div>
        <div className="trip-info-item">
          <button
            onClick={handleScrollClick}
            className="trip-info-flight text-button"
          >
            View itinerary
          </button>
        </div>
      </div>
    </div>
  );
};
