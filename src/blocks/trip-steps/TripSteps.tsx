import React, { forwardRef } from "react";

import "./TripSteps.scss";
import { TripStep } from "../../components/trip-step/TripStep";
import { ITripStep } from "../../types/types";

interface IProps {
  data: ITripStep[];
  days: string | null;
}

export const TripSteps = forwardRef<null | HTMLDivElement, IProps>(
  ({ data, days }, ref) => {
    const steps = data.map((step) => {
      const header = {
        title: step.title,
        description: step?.places,
      };

      const body = {
        cards: step?.cards,
        description: step.description,
      };
      const type = step.type;
      const icon = step.icon;

      return {
        header,
        body,
        type,
        icon,
      };
    });

    return (
      <div className="trip-steps" ref={ref}>
        {steps.map(({ body, header, icon, type }) => (
          <TripStep
            key={header.title}
            body={body}
            header={header}
            icon={icon}
            type={type}
            days={days}
          />
        ))}
      </div>
    );
  }
);
