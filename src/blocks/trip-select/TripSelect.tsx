import React, { useState } from "react";
import Select, { SingleValue } from "react-select";
import { CustomButton } from "../../components/custom-button/CustomButton";

import "./TripSelect.scss";
import { SelectDayValue } from "../../utils/data";

interface IProps {
  selected: string | null;
  setSelected: (val: string) => void;
  selectOptions: {
    value: string;
    label: string;
  }[];
}

export const TripSelect = ({
  selected,
  setSelected,
  selectOptions,
}: IProps) => {
  const handleChangeSelect = (e: SingleValue<SelectDayValue>) => {
    e?.value && setSelected(e.value);
  };
  return (
    <div className="trip-select">
      <div className="trip-select-config">
        <span className="trip-select-config-item">Trips</span>
        <span className="trip-select-config-item">Iceland</span>
        <Select
          className="trip-select-config-item"
          options={selectOptions}
          value={selectOptions.filter((el) => el.value === selected)}
          onChange={handleChangeSelect}
          isSearchable={false}
          components={{
            IndicatorSeparator: () => null,
          }}
          styles={{
            control: (styles) => ({
              ...styles,
              border: 0,
              boxShadow: "none",
            }),
            valueContainer: (styles) => ({ ...styles, border: 0, padding: 0 }),
            dropdownIndicator: (styles) => ({ ...styles, padding: "0 4px" }),
          }}
        />
      </div>
      <CustomButton
        label="Create"
        design="white"
        handleClick={() => console.log("add")}
        type="button"
        borderRadius="full"
        icon="Plus"
      />
    </div>
  );
};
