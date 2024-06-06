import React, { useRef, useState } from "react";
import { TripSelect } from "./blocks/trip-select/TripSelect";

import "./App.scss";
import "./styles/index.scss";
import { TripInfo } from "./blocks/trip-info/TripInfo";
import {
  tripImages as images,
  selectOptions,
  tripHighlights,
  tripInfo,
  tripStep1,
  tripStep2,
} from "./utils/data";
import { TripHighlights } from "./blocks/trip-highlights/TripHighlights";
import { TripItinerary } from "./blocks/trip-itinerary/TripItinerary";
import { TripSteps } from "./blocks/trip-steps/TripSteps";
import { TripGallery } from "./blocks/trip-gallery/TripGallery";

const firstStep = tripStep1;
const secondStep = tripStep2;

const daysOption = selectOptions;

export default function App() {
  const [selectedDays, setSelectedDays] = useState<string | null>(
    selectOptions[0].value
  );
  const firstTripRef = useRef<HTMLDivElement>(null);

  return (
    <div className="container">
      <h1>поправить ховер у кнопок</h1>
      <TripSelect
        selectOptions={daysOption}
        selected={selectedDays}
        setSelected={setSelectedDays}
      />
      <TripGallery images={images} />
      <TripInfo data={tripInfo} scrollEl={firstTripRef} />
      <TripHighlights data={tripHighlights} />
      <TripItinerary title="Iceland itinerary" />
      <TripSteps data={firstStep} days={selectedDays} ref={firstTripRef} />
      <TripSteps data={secondStep} days={selectedDays} />
    </div>
  );
}
