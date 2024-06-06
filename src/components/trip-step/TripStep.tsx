import React, { Fragment, useState } from "react";

import "./TripStep.scss";
import { ECardTypes, IPlaceCard, TCardType } from "../../types/types";
import { TripCard } from "../trip-card/TripCard";
import { CustomButton } from "../custom-button/CustomButton";

import { ReactComponent as Direction } from "../../assets/icons/Direction.svg";
import { ReactComponent as Ellipsis } from "../../assets/icons/Ellipsis.svg";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { CustomSlider } from "../custom-slider/CustomSlider";
import { CutsomIcon } from "../custom-icon/CutsomIcon";

interface IProps {
  header: {
    title: string;
    description?: string[];
  };
  body: {
    description?: string;
    cards?: IPlaceCard[];
  };
  icon: string;
  type: TCardType;
  days: string | null;
}

export const TripStep = ({ body, header, icon, type, days }: IProps) => {
  const [isShowPlan, setIsShowPlan] = useState(false);

  return (
    <div className={`trip-step ${type}`}>
      <div className="trip-step-line">
        <CutsomIcon
          name={
            type !== ECardTypes.HIGH ? icon : isShowPlan ? "PlanList" : icon
          }
          additionalStyles={`trip-step-line-icon ${type}`}
        />
      </div>
      <div className="trip-step-content">
        <div
          className={`trip-step-header ${
            !header?.description ? "indented" : ""
          }`}
        >
          <div className="trip-step-header-title">
            <h4>{isShowPlan ? `${days} days plan` : header.title}</h4>
            {type === ECardTypes.HIGH && (
              <CustomButton
                design="white"
                borderRadius="half"
                label={isShowPlan ? "Show highlights" : "Show daily plan"}
                icon={isShowPlan ? "Stars" : "Highlights"}
                type="button"
                handleClick={() => setIsShowPlan(!isShowPlan)}
              />
            )}
          </div>
          {header?.description && (
            <div className="trip-step-header-places">
              {header.description.map((place) => (
                <div className="trip-step-header-place text-light" key={place}>
                  {place}
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="trip-step-body">
          {body.description ? (
            <p className="trip-step-body-description text-regular">
              {body.description}
            </p>
          ) : (
            body?.cards &&
            (!isShowPlan ? (
              <CustomSlider
                items={body.cards?.map((card) => (
                  <TripCard card={card} />
                ))}
              />
            ) : (
              <TripPlanDays cards={body.cards} days={days} />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

const TripPlanDays = ({
  cards,
  days,
}: {
  cards: IPlaceCard[];
  days: string | null;
}): JSX.Element => {
  // slicing array with trips by 2 trip per day
  const sliceTripsByDays = (
    trips: IPlaceCard[],
    tripsPerDay: number
  ): IPlaceCard[][] => {
    const slicedArray = [] as IPlaceCard[][];

    for (let index = 0; index < trips.length; index += tripsPerDay) {
      slicedArray.push(trips.slice(index, index + tripsPerDay));
    }

    return slicedArray;
  };

  if (!days) return <></>;
  console.log(+days, "days to chill");
  const slicedTrips = sliceTripsByDays(cards, 2);

  return (
    <div className="trip-step-body-plan">
      {slicedTrips.map((trips, index) => (
        <div className="trip-step-day" key={trips[0].title}>
          <div className="trip-step-body-plan-header">
            <h4 className="text-title">Day {index + 1}</h4>
            <div className="trip-step-body-plan-settings">
              <Direction />
              <span className="text-ultralight">
                {index === 0 ? "40m" : "1h 40m"}
              </span>
              <button className="icon-button">
                <Ellipsis className="trip-step-body-settings-icon" />
              </button>
            </div>
          </div>
          {trips.map((trip) => (
            <TripCard card={trip} isPlan key={trip.img} />
          ))}
        </div>
      ))}
    </div>
  );
};
