'use client'
import React from 'react'
import { Swiper, SwiperSlide } from './../core/index';
export default function HottestProductsSlider() {
    return (
        <>
            <section className="mx-4 lg:container mt-10 lg:mt-20 ">
                <div className="bg-white dark:bg-gray-800 shadow rounded-xl h-[420px] p-5 flex flex-col gap-y-2 relative">
                    {/* Title  */}
                    <div className="flex-center gap-x-1">
                        <svg className="size-6 pb-1 text-orange-400">
                            <use href="#fire"></use>
                        </svg>
                        <h4 className="font-DanaMedium text-lg text-gray-800 dark:text-gray-200">داغ ترین چند ساعت گذشته </h4>
                    </div>
                    <div className="swiper HottestSlider w-full">
                        <div className="swiper-wrapper w-full">
                            {/* PRODUCT ITEM  */}
                            <Swiper
                                spaceBetween={50}
                                slidesPerView={4}
                                loop={false}
                                autoplay={{ delay: 5000 }}
                                creativeEffect={{
                                    prev: { shadow: true, translate: [0, 0, -400] },
                                    next: { translate: ['100%', 0, 0] },
                                }}
                                navigation={{
                                    nextEl: '.Hottest-next-slide',
                                    prevEl: '.Hottest-prev-slide',

                                }}
                                pagination={false}
                                className="swiper AmazingSlider w-full rounded-xl"
                            >
                                <SwiperSlide className="swiper-slide hottest-slide">
                                    <a href="product-details.html" className="hottest-slide_link ">
                                        <img className="hottest-slide_img " src="images/products/1.png" alt="" />
                                        <p className="hottest-slide_text ">
                                            مانیتور گیمینگ ایسوس مدل ROG Swift PG259QN
                                        </p>
                                    </a>
                                    <a href="product-details.html" className="hottest-slide_link ">
                                        <img className="hottest-slide_img " src="images/products/3.png" alt="" />
                                        <p className="hottest-slide_text ">
                                            کنسول بازی پلی استیشن 5 نسخه دیسک دار
                                        </p>
                                    </a>
                                    <a href="product-details.html" className="hottest-slide_link ">
                                        <img className="hottest-slide_img " src="images/products/7.webp" alt="" />
                                        <p className="hottest-slide_text ">
                                            ساعت هوشمند سامسونگ مدل Galaxy Watch 6
                                        </p>
                                    </a>
                                </SwiperSlide>
                                <SwiperSlide className="swiper-slide hottest-slide">
                                    <a href="product-details.html" className="hottest-slide_link ">
                                        <img className="hottest-slide_img " src="images/products/1.png" alt="" />
                                        <p className="hottest-slide_text ">
                                            لپ تاپ 14 اینچی لنوو مدل ThinkPad X1 Carbon
                                        </p>
                                    </a>
                                    <a href="product-details.html" className="hottest-slide_link ">
                                        <img className="hottest-slide_img " src="images/products/3.png" alt="" />
                                        <p className="hottest-slide_text ">
                                            گوشی موبایل سامسونگ مدل Galaxy S23 Ultra
                                        </p>
                                    </a>
                                    <a href="product-details.html" className="hottest-slide_link ">
                                        <img className="hottest-slide_img " src="images/products/7.webp" alt="" />
                                        <p className="hottest-slide_text ">
                                            هدفون بی‌سیم اپل مدل AirPods Pro 2
                                        </p>
                                    </a>
                                </SwiperSlide>
                                <SwiperSlide className="swiper-slide hottest-slide">
                                    <a href="product-details.html" className="hottest-slide_link ">
                                        <img className="hottest-slide_img " src="images/products/1.png" alt="" />
                                        <p className="hottest-slide_text ">
                                            مانیتور گیمینگ ایسوس مدل ROG Swift PG259QN
                                        </p>
                                    </a>
                                    <a href="product-details.html" className="hottest-slide_link ">
                                        <img className="hottest-slide_img " src="images/products/3.png" alt="" />
                                        <p className="hottest-slide_text ">
                                            کنسول بازی پلی استیشن 5 نسخه دیسک دار
                                        </p>
                                    </a>
                                    <a href="product-details.html" className="hottest-slide_link ">
                                        <img className="hottest-slide_img " src="images/products/7.webp" alt="" />
                                        <p className="hottest-slide_text ">
                                            ساعت هوشمند سامسونگ مدل Galaxy Watch 6
                                        </p>
                                    </a>
                                </SwiperSlide>
                                <SwiperSlide className="swiper-slide hottest-slide">
                                    <a href="product-details.html" className="hottest-slide_link ">
                                        <img className="hottest-slide_img " src="images/products/1.png" alt="" />
                                        <p className="hottest-slide_text ">
                                            لپ تاپ 14 اینچی لنوو مدل ThinkPad X1 Carbon
                                        </p>
                                    </a>
                                    <a href="product-details.html" className="hottest-slide_link ">
                                        <img className="hottest-slide_img " src="images/products/3.png" alt="" />
                                        <p className="hottest-slide_text ">
                                            گوشی موبایل سامسونگ مدل Galaxy S23 Ultra
                                        </p>
                                    </a>
                                    <a href="product-details.html" className="hottest-slide_link ">
                                        <img className="hottest-slide_img " src="images/products/7.webp" alt="" />
                                        <p className="hottest-slide_text ">
                                            هدفون بی‌سیم اپل مدل AirPods Pro 2
                                        </p>
                                    </a>
                                </SwiperSlide>
                                <SwiperSlide className="swiper-slide hottest-slide">
                                    <a href="product-details.html" className="hottest-slide_link ">
                                        <img className="hottest-slide_img " src="images/products/1.png" alt="" />
                                        <p className="hottest-slide_text ">
                                            مانیتور گیمینگ ایسوس مدل ROG Swift PG259QN
                                        </p>
                                    </a>
                                    <a href="product-details.html" className="hottest-slide_link ">
                                        <img className="hottest-slide_img " src="images/products/3.png" alt="" />
                                        <p className="hottest-slide_text ">
                                            کنسول بازی پلی استیشن 5 نسخه دیسک دار
                                        </p>
                                    </a>
                                    <a href="product-details.html" className="hottest-slide_link ">
                                        <img className="hottest-slide_img " src="images/products/7.webp" alt="" />
                                        <p className="hottest-slide_text ">
                                            ساعت هوشمند سامسونگ مدل Galaxy Watch 6
                                        </p>
                                    </a>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                    <button
                        className="slider-navigate_btn absolute right-1 top-[47%] border dark:border-gray-700 border-gray-200 Hottest-prev-slide z-10">
                        <svg className="size-6 -rotate-90">
                            <use href="#chevron" />
                        </svg>
                    </button>
                    <button
                        className="slider-navigate_btn absolute left-1 top-[47%] border dark:border-gray-700 border-gray-200 Hottest-next-slide z-10">
                        <svg className="size-6 rotate-90">
                            <use href="#chevron" />
                        </svg>
                    </button>
                </div>
            </section>
        </>
    )
}
