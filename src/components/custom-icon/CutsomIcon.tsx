import React from "react";

import { ReactComponent as Stars } from "../../assets/icons/Stars.svg";
import { ReactComponent as Bed } from "../../assets/icons/Bed.svg";
import { ReactComponent as PlanList } from "../../assets/icons/PlanList.svg";
import { ReactComponent as Person } from "../../assets/icons/Person.svg";
import { ReactComponent as Plane } from "../../assets/icons/Plane.svg";
import { ReactComponent as Calendar } from "../../assets/icons/Calendar.svg";
import { ReactComponent as Bookmark } from "../../assets/icons/Bookmark.svg";
import { ReactComponent as Share } from "../../assets/icons/Share.svg";
import { ReactComponent as Plus } from "../../assets/icons/Plus.svg";
import { ReactComponent as Highlights } from "../../assets/icons/PlanList.svg";
import { ReactComponent as Dots } from "../../assets/icons/Dots.svg";
import { ReactComponent as BookmarkSmall } from "../../assets/icons/BookmarkSmall.svg";

export const CutsomIcon = ({
  name,
  additionalStyles,
}: {
  name: string;
  additionalStyles?: string;
}) => {
  switch (name) {
    case "Stars":
      return <Stars className={additionalStyles} />;
    case "Bed":
      return <Bed className={additionalStyles} />;

    case "PlanList":
      return <PlanList className={additionalStyles} />;
    case "Person":
      return <Person className={additionalStyles} />;
    case "Plane":
      return <Plane className={additionalStyles} />;
    case "Calendar":
      return <Calendar className={additionalStyles} />;
    case "Bookmark":
      return <Bookmark className={additionalStyles} />;
    case "Share":
      return <Share className={additionalStyles} />;
    case "Plus":
      return <Plus className={additionalStyles} />;
    case "Highlights":
      return <Highlights className={additionalStyles} />;
    case "Dots":
      return <Dots className={additionalStyles} />;
    case "BookmarkSmall":
      return <BookmarkSmall className={additionalStyles} />;

    default:
      return <span className={additionalStyles}>{name}</span>;
  }
};
