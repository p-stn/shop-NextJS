'use client';

import { Swiper as SwiperCore, SwiperProps } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectCreative } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Swiper({ children, ...props }: SwiperProps) {
  return (
    <SwiperCore
      modules={[Navigation, Pagination, Autoplay, EffectCreative]}
      loop
      navigation
      pagination={{ clickable: true }}
      {...props}
    >
      {children}
    </SwiperCore>
  );
}