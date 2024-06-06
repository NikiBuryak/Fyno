import Joshua from "../assets/images/joshua.png";
import GullfossWaterfall from "../assets/images/GullfossWaterfall.png";
import ReykjadalurValley from "../assets/images/ReykjadalurValley.png";
import MagmaHotel from "../assets/images/MagmaHotel.png";
import KatlaIceCave from "../assets/images/KatlaIceCave.png";
import GeysirThermalField from "../assets/images/GeysirThermalField.png";
import Thingvellir from "../assets/images/Thingvellir.png";
import FrostFire from "../assets/images/FrostFire.png";
import TheGreenhouse from "../assets/images/TheGreenhouse.png";
import INNI from "../assets/images/INNI.png";
import SkogafossWaterfall from "../assets/images/SkogafossWaterfall.png";
import HotelVikMyrdal from "../assets/images/HotelVikMyrdal.png";
import HotelKria from "../assets/images/HotelKria.png";

import Avatar from "../assets/images/Ava.png";

import { ECardTypes, ITripStep } from "../types/types";

export const tripImages = [
  { url: Joshua, isMain: true },
  { url: GullfossWaterfall, isMain: false },
  { url: ReykjadalurValley, isMain: false },
  { url: MagmaHotel, isMain: false },
  { url: KatlaIceCave, isMain: false },
];

export const tripInfo = {
  duration: "7 days",
  exploration: "4 regions",
  flight: "7h 20m from SFO",
};

export const selectOptions = [5, 6, 7, 8, 9, 10].map((el) => ({
  value: el.toString(),
  label: el.toString() + " days",
}));
export type SelectDayValue = (typeof selectOptions)[0];

export const tripHighlights = {
  title: "Iceland’s Highlights",
  person: {
    avatar: Avatar,
    title: "Curated by Sandra",
    subtitle: "Fyno expert",
  },
  description:
    "Welcome to Iceland, a land of breathtaking landscapes and unspoiled natural beauty. From its majestic waterfalls and geothermal wonders to the vibrant culture and rich history, Iceland promises an unforgettable adventure for every traveler.",
};

export const tripStep1: ITripStep[] = [
  {
    type: ECardTypes.DESCR,
    title: "Golden Circle Region",
    icon: "A",
    places: ["Geysers", "Waterfalls", "Crater lakes"],
    description:
      "The Golden Circle in Iceland is a renowned tourist route that encompasses an array of stunning natural landmarks within a relatively short distance from Reykjavík. This scenic loop includes three primary attractions: Þingvellir National Park, where you can explore the rift valley created by the diverging North American and Eurasian tectonic plates and witness the site of Iceland's ancient parliament.",
  },
  {
    type: ECardTypes.HIGH,
    title: "Region highlights",
    icon: "Stars",
    cards: [
      {
        title: "Gullfoss Waterfall",
        badges: ["Curator’s pick"],
        img: GullfossWaterfall,
        description: "1h · Waterfall",
      },
      {
        title: "Reykjadalur Valley",
        badges: ["Curator’s pick"],
        img: ReykjadalurValley,
        description: "1h · Iconic hike, hot springs",
      },
      {
        title: "Geysir Thermal Field",
        img: GeysirThermalField,
        description: "1h · Iconic hike · Light traffic ",
      },
      {
        title: "Thingvellir",
        img: Thingvellir,
        description: "1h · Iconic hike · Light traffic ",
      },
    ],
  },
  {
    type: ECardTypes.STAY,
    icon: "Bed",
    title: "Where to stay",
    cards: [
      {
        title: "Frost and Fire Hotel",
        badges: ["Curator’s pick"],
        description: "$180+ · Boutique hotel",
        img: FrostFire,
        rating: 9.1,
      },
      {
        title: "The Greenhouse Hotel",
        badges: ["Curator’s pick"],
        description: "$230+ · Luxury hotel",
        img: TheGreenhouse,
        rating: 9.1,
      },
      {
        title: "INNI",
        description: "$130+ · Apart hotel",
        img: INNI,
        rating: 9.1,
      },
    ],
  },
];

export const tripStep2: ITripStep[] = [
  {
    type: ECardTypes.DESCR,
    title: "South & Highlands",
    icon: "B",
    places: ["Geysers", "Waterfalls", "Crater lakes"],
    description:
      "The South & Highlands of Iceland offer a breathtaking landscape of diverse natural wonders, from expansive glaciers and active volcanoes to serene waterfalls and black sand beaches. This region is also a haven for adventurers, featuring numerous hiking trails, hidden hot springs, and vast lava fields waiting to be explored. Visitors will be captivated by the blend of tranquility and raw, untamed beauty that defines this unique part of Iceland.",
  },
  {
    type: ECardTypes.HIGH,
    title: "Region highlights",
    icon: "Stars",
    cards: [
      {
        title: "Skógafoss Waterfall",
        badges: ["Curator’s pick"],
        img: SkogafossWaterfall,
        description: "1h · Iconic waterfall",
      },
      {
        title: "Katla Ice Cave",
        badges: ["Curator’s pick"],
        img: KatlaIceCave,
        description: "1h · Katla Ice Cave",
      },
      {
        title: "Fjaðrárgljúfur ",
        img: GeysirThermalField,
        description: "1h · Geysers ",
      },
      {
        title: "Thingvellir",
        img: Thingvellir,
        description: "1h · Iconic hike · Light traffic ",
      },
    ],
  },
  {
    type: ECardTypes.STAY,
    icon: "Bed",
    title: "Where to stay",
    cards: [
      {
        title: "Magma Hotel",
        badges: ["Curator’s pick"],
        description: "$250+ · Boutique hotel",
        img: MagmaHotel,
        rating: 9.1,
      },
      {
        title: "Hotel Vík í Mýrdal",
        badges: ["Curator’s pick"],
        description: "$150+ · Luxury hotel",
        img: HotelVikMyrdal,
        rating: 9.1,
      },
      {
        title: "Hótel Kría",
        description: "$130+ · Luxury hotel",
        img: HotelKria,
        rating: 9.1,
      },
      {
        title: "The Greenhouse Hotel",
        badges: ["Curator’s pick"],
        description: "$230+ · Luxury hotel",
        img: TheGreenhouse,
        rating: 9.1,
      },
    ],
  },
];
