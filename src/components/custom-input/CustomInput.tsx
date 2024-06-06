import React, { ChangeEventHandler, FunctionComponent, SVGProps } from "react";

import "./CustomInput.scss";

interface IProps {
  label?: string;
  placeholder?: string;
  handleChange: ChangeEventHandler<HTMLInputElement> | undefined;
  value: string | number;
  additionalStyles?: string;
  name: string;
  id?: string;
  type: "text" | "number";
  icon?: FunctionComponent<
    SVGProps<SVGSVGElement> & { title?: string | undefined }
  >;
  required?: boolean;
  max?: number;
  min?: number;
}

export const CustomInput = ({
  handleChange,
  label,
  placeholder,
  value,
  additionalStyles,
  name,
  id,
  type,
  icon: Icon,
  required,
  max,
  min,
}: IProps) => {
  return (
    <div className={`custom-input ${additionalStyles}`}>
      {label && (
        <label className="custom-input-label text-regular" htmlFor={name}>
          {label}
        </label>
      )}

      {Icon && <Icon />}

      <input
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
        className="custom-input-field text-light"
        id={id}
        type={type}
        name={name}
        required={required}
        max={max}
        min={min}
      />
    </div>
  );
};
