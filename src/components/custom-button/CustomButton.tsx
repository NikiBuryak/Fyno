import React, { FunctionComponent, SVGProps } from "react";

import "./CustomButton.scss";
import { CutsomIcon } from "../custom-icon/CutsomIcon";

interface IProps {
  label: string;
  handleClick: (evt: React.MouseEvent) => void;
  design: "white" | "transparent";
  additionalStyles?: string;
  borderRadius: "half" | "full";
  type: "button" | "submit";
  icon?: string;
}

export const CustomButton = ({
  label,
  handleClick,
  design,
  additionalStyles = "",
  borderRadius,
  type,
  icon,
}: IProps) => {
  const classes = [
    "custom-button",
    "text-button",
    `custom-button-${design}`,
    `radius-${borderRadius}`,
  ];
  return (
    <button
      onClick={handleClick}
      className={`${classes.join(" ")} ${additionalStyles}`}
      type={type}
    >
      {icon && <CutsomIcon name={icon} />}
      {label}
    </button>
  );
};
