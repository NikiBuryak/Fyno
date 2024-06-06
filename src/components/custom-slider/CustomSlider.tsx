import React, { LegacyRef, useEffect, useRef } from "react";

import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import { ReactComponent as ArrowRight } from "../../assets/icons/ArrowRight.svg";

import "./CustomSlider.scss";

interface IProps {
  items: JSX.Element[];
}

export const CustomSlider = ({ items }: IProps) => {
  const navigationNextRef = useRef<HTMLElement | null>(null);
  const navigationPrevRef = useRef<HTMLElement | null>(null);
  const swiperRef = useRef<null | SwiperClass>(null);

  return (
    <Swiper
      spaceBetween={15}
      slidesPerView={3}
      modules={[Navigation]}
      navigation={{
        prevEl: navigationPrevRef.current,
        nextEl: navigationNextRef.current,
      }}
      onBeforeInit={(swiper: SwiperClass) => {
        if (!navigationPrevRef.current || !navigationNextRef.current) return;
        swiper.navigation.prevEl = navigationPrevRef.current;
        swiper.navigation.nextEl = navigationNextRef.current;
        swiperRef.current = swiper;
      }}
    >
      {items?.map((item, index) => (
        <SwiperSlide key={index}>{item}</SwiperSlide>
      ))}
      <button
        ref={(el) => (navigationPrevRef.current = el)}
        onClick={() => swiperRef.current?.slidePrev()}
        className="swiper-prev-arrow"
      >
        <ArrowRight />
      </button>
      <button
        ref={(el) => (navigationNextRef.current = el)}
        onClick={() => swiperRef.current?.slideNext()}
        className="swiper-next-arrow"
      >
        <ArrowRight />
      </button>
    </Swiper>
  );
};
