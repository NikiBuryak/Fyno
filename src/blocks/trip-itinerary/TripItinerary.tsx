import React, { useState } from "react";
import { CustomInput } from "../../components/custom-input/CustomInput";

import { SingleValue, components } from "react-select";
import Select from "react-select";

import "./TripItinerary.scss";
import { CustomCalendar } from "../../components/custom-calendar/CustomCalendar";
import { CutsomIcon } from "../../components/custom-icon/CutsomIcon";

interface IProps {
  title: string;
}

const selectOptions = [1, 2, 3, 4].map((el) => ({
  value: el.toString(),
  label: el.toString(),
}));

type SelectPersonsValue = (typeof selectOptions)[0];

export const TripItinerary = ({ title }: IProps) => {
  const [tripFrom, setTripFrom] = useState("");
  const [tripTo, setTripTo] = useState("");
  const [persons, setPersons] = useState<string | null>(selectOptions[0].value);
  const [startDate, setStartDate] = useState<Date | null>();
  const [endDate, setEndDate] = useState<Date | null>();

  const handleChangeSelect = (e: SingleValue<SelectPersonsValue>) => {
    e?.value && setPersons(e.value);
  };

  const changeDateValue = (val?: [Date | null, Date | null]) => {
    if (!val) return;
    setStartDate(val[0]);
    setEndDate(val[1]);
  };

  return (
    <div className="trip-itinerary">
      <h3 className="trip-itinerary-title">{title}</h3>

      <div className="trip-itinerary-configurator">
        <div className="trip-itinerary-configurator-flight">
          <CustomInput
            name="tripFrom"
            handleChange={(ev) => setTripFrom(ev.target.value)}
            value={tripFrom}
            type="text"
            placeholder="Reykjavík, KEF"
          />
          <CutsomIcon name="Plane" />
          <CustomInput
            name="tripTo"
            value={tripTo}
            type="text"
            handleChange={(ev) => setTripTo(ev.target.value)}
            placeholder="San Francisco, SFO"
          />
        </div>
        <CustomCalendar
          inputName="calendar"
          changeValue={changeDateValue}
          startDate={startDate}
          endDate={endDate}
          icon="Calendar"
          additionalStyles="trip-itinerary-calendar"
        />
        <Select
          className="trip-itinerary-configurator-persons"
          options={selectOptions}
          value={selectOptions.filter((el) => el.value === persons)}
          onChange={handleChangeSelect}
          isSearchable={false}
          components={{
            IndicatorSeparator: () => null,
            IndicatorsContainer: () => null,
            DropdownIndicator: () => null,
            Control: ({ children, ...props }: any) => (
              <components.Control {...props} className="text-light">
                <CutsomIcon name="Person" />
                {children}
              </components.Control>
            ),
          }}
          styles={{
            control: (styles) => ({
              ...styles,
              boxShadow: "none",
              flexWrap: "nowrap",
              minHeight: "unset",
              minWidth: "70px",
              padding: "4px 16px 4px 4px",
              border: "1px solid #9797974D",
              borderRadius: "8px",
            }),
            valueContainer: (styles) => ({
              ...styles,
              padding: 0,
            }),
            dropdownIndicator: (styles) => ({ ...styles, padding: "0 4px" }),
            singleValue: (styles) => ({
              ...styles,
              margin: 0,
            }),
            menuList: (styles) => ({
              ...styles,
              textAlign: "center",
            }),
          }}
        />
      </div>
    </div>
  );
};
