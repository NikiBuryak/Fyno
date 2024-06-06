import { FunctionComponent, SVGProps } from "react";

export interface ITripShortInfo {
  duration: string;
  exploration: string;
  flight: string;
}

export interface IImage {
  url: string;
  isMain: boolean;
}

export interface ICommentPerson {
  avatar: string;
  title: string;
  subtitle: string;
}

export enum ECardTypes {
  DESCR = "description",
  HIGH = "highlights",
  STAY = "stay",
}

export type TCardType = ECardTypes.DESCR | ECardTypes.HIGH | ECardTypes.STAY;

export type TBadges = "Curator’s pick" | "Other for test";

export interface IPlaceCard {
  img: string;
  title: string;
  description: string;
  badges?: TBadges[];
  rating?: number;
}

export type TIcon = FunctionComponent<
  SVGProps<SVGSVGElement> & { title?: string | undefined }
>;

export interface ITripStep {
  title: string;
  icon: string;
  places?: string[];
  description?: string;
  cards?: IPlaceCard[];
  last?: boolean;
  type: TCardType;
}
