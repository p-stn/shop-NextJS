'use clinet'

import React from 'react'
import { Swiper, SwiperSlide } from './../core/index';
export default function CategoryCartSlider() {
    return (
        <>
            <section className="mx-4 lg:container mt-10 lg:mt-20">
                {/* SECTION TITLE  */}
                <div
                    className="flex flex-col gap-y-4 xs:flex-row items-center justify-between w-full text-center xs:text-start">
                    <div className="flex items-center gap-x-2 sm:gap-x-4">
                        <span className="size-12 hidden xs:flex rounded-lg bg-white shadow-lg dark:bg-gray-800 flex-center">
                            <svg className="size-7 text-gray-700 dark:text-gray-100">
                                <use href="#check-badge"></use>
                            </svg>
                        </span>
                        <div className="space-y-1 md:space-y-1">
                            <h3 className="text-xl md:text-2xl font-MorabbaMedium text-gray-800 dark:text-gray-50">محبوب‌ترین
                                <span className="text-blue-600 dark:text-blue-500">برندها</span>
                            </h3>
                            <p className="text-sm text-gray-500 dark:text-gray-300">جدیدترین و بروزترین برندها</p>
                        </div>
                    </div>
                    <div className="w-full xs:w-auto flex justify-between xs:justify-end  items-center gap-x-2">
                        <div className="flex items-center gap-x-2">
                            <button className="slider-navigate_btn brand-prev-slide">
                                <svg className="size-6 -rotate-90">
                                    <use href="#chevron" />
                                </svg>
                            </button>
                            <button className="slider-navigate_btn brand-next-slide">
                                <svg className="size-6 rotate-90">
                                    <use href="#chevron" />
                                </svg>
                            </button>
                        </div>
                        <a href="shop.html"
                            className="group shadow-xl text-sm md:text-base flex gap-x-1.5 items-center px-2 h-10 md:px-3 text-white bg-blue-600 rounded-xl">
                            <p>مشاهده همه</p>
                            <span
                                className="w-7 h-7 rounded-full bg-blue-500 flex-center md:group-hover:-translate-x-1 transition-transform duration-300">
                                <svg className="size-5">
                                    <use href="#arrow" />
                                </svg>
                            </span>
                        </a>
                    </div>
                </div>
                {/* BRAND Slider  */}

                <div className="swiper BrandSlider mt-5 w-full">
                    <div className="swiper-wrapper py-5 w-full">
                        {/* PRODUCT ITEM  */}
                        <Swiper
                            spaceBetween={30}
                            slidesPerView={5}
                            loop={false}
                            autoplay={{ delay: 5000 }}
                            creativeEffect={{
                                prev: { shadow: true, translate: [0, 0, -400] },
                                next: { translate: ['100%', 0, 0] },
                            }}
                            navigation={{
                                nextEl: '.brand-next-slide',
                                prevEl: '.brand-prev-slide',

                            }}
                            pagination={false}
                            className="swiper AmazingSlider w-full rounded-xl"
                        >
                            <SwiperSlide className="swiper-slide brand-card group">
                                <img src="images/brand/1.png" alt="" />
                            </SwiperSlide>
                            <SwiperSlide className="swiper-slide brand-card group">
                                <img src="images/brand/6.webp" alt="" />
                            </SwiperSlide>
                            <SwiperSlide className="swiper-slide brand-card group">
                                <img src="images/brand/5.webp" alt="" />
                            </SwiperSlide>
                            <SwiperSlide className="swiper-slide brand-card group">
                                <img src="images/brand/4.webp" alt="" />
                            </SwiperSlide>
                            <SwiperSlide className="swiper-slide brand-card group">
                                <img src="images/brand/3.webp" alt="" />
                            </SwiperSlide>
                            <SwiperSlide className="swiper-slide brand-card group">
                                <img src="images/brand/2.png" alt="" />
                            </SwiperSlide>
                            <SwiperSlide className="swiper-slide brand-card group">
                                <img src="images/brand/7.png" alt="" />
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </section>
        </>
    )
}

