'use client';

import { Swiper, SwiperSlide } from './../core/index';
import Image from 'next/image';

type HeroSlide = {
    image: string;
    title: string;
    subtitle?: string;
};
export default function HeroSlider({ slides }: { slides: HeroSlide[] }) {
    return (
        <div className="px-3 lg:container group w-full mt-4 lg:mt-10">
            <div dir="rtl" className="swiper header-slider h-52 md:h-96 cursor-pointer">
                <div className="swiper-wrapper">
                    <Swiper
                        spaceBetween={0}
                        slidesPerView={1}
                        autoplay={{ delay: 5000 }}
                        //   effect="creative"
                        creativeEffect={{
                            prev: { shadow: true, translate: [0, 0, -400] },
                            next: { translate: ['100%', 0, 0] },
                        }}
                        className="hero-swiper"
                    >
                        {slides.map((slide, i) => (
                            <SwiperSlide key={i}>
                                <div className="relative w-full h-full">
                                    <Image
                                        src={slide.image}
                                        alt={slide.title}                                        
                                        width={1000}
                                        height={100}
                                        className="object-fill h-full! w-full!"
                                        priority={i === 0}
                                    />

                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                </div>
                {/* <div className="swiper-pagination-wrapper">
                    <div className="swiper-pagination"></div>
                </div> */}

                {/* <div
                    className="absolute z-10 bottom-5 opacity-0 invisible group-hover:opacity-100 transition-all duration-300 group-hover:visible right-6 hidden lg:flex items-center gap-x-2 child:flex-center child:w-9 child:h-9 child:cursor-pointer child:bg-white child:dark:bg-gray-800 child:text-gray-700 child:dark:text-gray-200 child:rounded-full child:shadow child-hover:text-blue-600 child-hover:dark:text-blue-500">
                    <button className="button-prev">
                        <svg className="size-5 -rotate-90">
                            <use href="#chevron" />
                        </svg>
                    </button>
                    <button className="button-next">
                        <svg className="size-5 rotate-90">
                            <use href="#chevron" />
                        </svg>
                    </button>
                </div> */}
            </div>
        </div>

    );
}