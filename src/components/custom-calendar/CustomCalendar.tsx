import React from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import "./CustomCalendar.scss";
import { CutsomIcon } from "../custom-icon/CutsomIcon";

interface IDatePicker {
  startDate?: Date | null;
  endDate?: Date | null;
  changeValue: (newValue?: [Date | null, Date | null]) => void;
  label?: string;
  inputName?: string;
  minValue?: Date;
  icon?: string;
  additionalStyles?: string;
}

export const CustomCalendar = ({
  startDate,
  endDate,
  changeValue,
  inputName,
  minValue,
  icon,
  additionalStyles,
}: IDatePicker): React.ReactElement => {
  const CustomInput = (
    props: React.HTMLProps<HTMLInputElement>,
    ref: React.Ref<HTMLInputElement>
  ) => (
    <input {...props} ref={ref} className="text-light custom-calendar-input" />
  );

  const handleChange = (newValue: [Date | null, Date | null]) => {
    if (newValue) {
      const hours = new Date().getHours() + 1;
      newValue.forEach((el) => el && el.setHours(hours));
      changeValue(newValue);
    }
  };

  return (
    <div className={`custom-calendar ${additionalStyles}`}>
      {icon && <CutsomIcon name={icon} />}
      <DatePicker
        dateFormat="MMMM dd"
        startDate={startDate}
        endDate={endDate}
        onChange={(date: [Date | null, Date | null]) => handleChange(date)}
        placeholderText="MM/DD"
        customInput={React.createElement(React.forwardRef(CustomInput))}
        name={inputName}
        minDate={minValue}
        selectsRange
      />
    </div>
  );
};
