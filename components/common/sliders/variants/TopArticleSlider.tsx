'use client'
import React from 'react'
import { Swiper, SwiperSlide } from './../core/index';
export default function TopArticleSlider() {
    return (
        <>
            <section className="mx-4 lg:container mt-10 lg:mt-20">
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
                                <span className="text-blue-600 dark:text-blue-500">مقالات</span>
                            </h3>
                            <p className="text-sm text-gray-500 dark:text-gray-300">جدیدترین و بروزترین مقالات</p>
                        </div>
                    </div>
                    <div className="w-full xs:w-auto flex justify-between xs:justify-end  items-center gap-x-2">
                        <div className="flex items-center gap-x-2">
                            <button className="slider-navigate_btn articleSlider-prev-slide">
                                <svg className="size-6 -rotate-90">
                                    <use href="#chevron" />
                                </svg>
                            </button>
                            <button className="slider-navigate_btn articleSlider-next-slide">
                                <svg className="size-6 rotate-90">
                                    <use href="#chevron" />
                                </svg>
                            </button>
                        </div>
                        <a href="articles.html"
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

                <div className="swiper articleSlider w-full mt-5">
                    <div className="swiper-wrapper w-full py-5">
                        <Swiper
                            spaceBetween={30}
                            slidesPerView={4.5}
                            loop={false}
                            autoplay={{ delay: 5000 }}
                            creativeEffect={{
                                prev: { shadow: true, translate: [0, 0, -400] },
                                next: { translate: ['100%', 0, 0] },
                            }}
                            navigation={{
                                nextEl: '.articleSlider-next-slide',
                                prevEl: '.articleSlider-prev-slide',


                            }}
                            pagination={false}
                            className="swiper AmazingSlider w-full rounded-xl"
                        >

                            {/* ITEM  */}
                            <SwiperSlide className="swiper-slide group article-box">
                                <div className="relative overflow-hidden rounded-lg">
                                    <img src="images/articles/1.webp" className="article-box_img" alt="" />
                                    <div
                                        className="absolute opacity-0 left-0 top-0 bottom-0 right-0 bg-black/60 flex items-center justify-center group-hover:opacity-100 duration-300 transition-all rounded-bl-3xl rounded-tr-3xl">
                                        <a href="article-details.html"
                                            className="flex items-center px-2 py-1 gap-x-1 font-DanaMedium rounded-lg border-2 border-white text-white">
                                            <p>ادامه مطالب</p>
                                            <svg className="w-4 h-4 rotate-90">
                                                <use href="#chevron"></use>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-y-1 py-5 px-1">
                                    <h2 className="font-DanaDemiBold">بهترین لپ تاپ های بازار ایران [دی ۱۴۰۳] </h2>
                                </div>
                                <span className="flex w-full h-1 py-1 border-t border-gray-100 dark:border-white/10"></span>
                                <div className="flex items-center justify-between text-sm px-1">
                                    <span className="flex items-center gap-x-1 text-blue-500 dark:text-sky-400">
                                        <svg className="w-4 h-4">
                                            <use href="#calendar"></use>
                                        </svg>
                                        <p className="mt-1">1403/5/1</p>
                                    </span>
                                    <span className="flex items-start gap-x-1 text-gray-300">
                                        <p className="font-DanaDemiBold">120</p>
                                        <svg className="w-4 h-4">
                                            <use href="#eye"></use>
                                        </svg>
                                    </span>
                                </div>
                            </SwiperSlide>
                            {/* ITEM  */}
                            <SwiperSlide className="swiper-slide group article-box">
                                <div className="relative overflow-hidden rounded-lg">
                                    <img src="images/articles/2.webp" className="article-box_img" alt="" />
                                    <div
                                        className="absolute opacity-0 left-0 top-0 bottom-0 right-0 bg-black/60 flex items-center justify-center group-hover:opacity-100 duration-300 transition-all rounded-bl-3xl rounded-tr-3xl">
                                        <a href="article-details.html"
                                            className="flex items-center px-2 py-1 gap-x-1 font-DanaMedium rounded-lg border-2 border-white text-white">
                                            <p>ادامه مطالب</p>
                                            <svg className="w-4 h-4 rotate-90">
                                                <use href="#chevron"></use>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-y-1 py-5 px-1">
                                    <h2 className="font-DanaDemiBold">بهترین گوشی های بازار ایران [دی ۱۴۰۳] </h2>
                                </div>
                                <span className="flex w-full h-1 py-1 border-t border-gray-100 dark:border-white/10"></span>
                                <div className="flex items-center justify-between text-sm px-1">
                                    <span className="flex items-center gap-x-1 text-blue-500 dark:text-sky-400">
                                        <svg className="w-4 h-4">
                                            <use href="#calendar"></use>
                                        </svg>
                                        <p className="mt-1">1403/5/1</p>
                                    </span>
                                    <span className="flex items-start gap-x-1 text-gray-300">
                                        <p className="font-DanaDemiBold">120</p>
                                        <svg className="w-4 h-4">
                                            <use href="#eye"></use>
                                        </svg>
                                    </span>
                                </div>
                            </SwiperSlide>
                            {/* ITEM  */}
                            <SwiperSlide className="swiper-slide group article-box">
                                <div className="relative overflow-hidden rounded-lg">
                                    <img src="images/articles/3.webp" className="article-box_img" alt="" />
                                    <div
                                        className="absolute opacity-0 left-0 top-0 bottom-0 right-0 bg-black/60 flex items-center justify-center group-hover:opacity-100 duration-300 transition-all rounded-bl-3xl rounded-tr-3xl">
                                        <a href="article-details.html"
                                            className="flex items-center px-2 py-1 gap-x-1 font-DanaMedium rounded-lg border-2 border-white text-white">
                                            <p>ادامه مطالب</p>
                                            <svg className="w-4 h-4 rotate-90">
                                                <use href="#chevron"></use>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-y-1 py-5 px-1">
                                    <h2 className="font-DanaDemiBold">بهترین هدیه های دیجیتال [دی ۱۴۰۳] </h2>
                                </div>
                                <span className="flex w-full h-1 py-1 border-t border-gray-100 dark:border-white/10"></span>
                                <div className="flex items-center justify-between text-sm px-1">
                                    <span className="flex items-center gap-x-1 text-blue-500 dark:text-sky-400">
                                        <svg className="w-4 h-4">
                                            <use href="#calendar"></use>
                                        </svg>
                                        <p className="mt-1">1403/5/1</p>
                                    </span>
                                    <span className="flex items-start gap-x-1 text-gray-300">
                                        <p className="font-DanaDemiBold">120</p>
                                        <svg className="w-4 h-4">
                                            <use href="#eye"></use>
                                        </svg>
                                    </span>
                                </div>
                            </SwiperSlide>
                            {/* ITEM  */}
                            <SwiperSlide className="swiper-slide group article-box">
                                <div className="relative overflow-hidden rounded-lg">
                                    <img src="images/articles/4.webp" className="article-box_img" alt="" />
                                    <div
                                        className="absolute opacity-0 left-0 top-0 bottom-0 right-0 bg-black/60 flex items-center justify-center group-hover:opacity-100 duration-300 transition-all rounded-bl-3xl rounded-tr-3xl">
                                        <a href="article-details.html"
                                            className="flex items-center px-2 py-1 gap-x-1 font-DanaMedium rounded-lg border-2 border-white text-white">
                                            <p>ادامه مطالب</p>
                                            <svg className="w-4 h-4 rotate-90">
                                                <use href="#chevron"></use>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-y-1 py-5 px-1">
                                    <h2 className="font-DanaDemiBold">بهترین هارد های بازار ایران [دی ۱۴۰۳] </h2>
                                </div>
                                <span className="flex w-full h-1 py-1 border-t border-gray-100 dark:border-white/10"></span>
                                <div className="flex items-center justify-between text-sm px-1">
                                    <span className="flex items-center gap-x-1 text-blue-500 dark:text-sky-400">
                                        <svg className="w-4 h-4">
                                            <use href="#calendar"></use>
                                        </svg>
                                        <p className="mt-1">1403/5/1</p>
                                    </span>
                                    <span className="flex items-start gap-x-1 text-gray-300">
                                        <p className="font-DanaDemiBold">120</p>
                                        <svg className="w-4 h-4">
                                            <use href="#eye"></use>
                                        </svg>
                                    </span>
                                </div>
                            </SwiperSlide>
                            {/* ITEM  */}
                            <SwiperSlide className="swiper-slide group article-box">
                                <div className="relative overflow-hidden rounded-lg">
                                    <img src="images/articles/1.webp" className="article-box_img" alt="" />
                                    <div
                                        className="absolute opacity-0 left-0 top-0 bottom-0 right-0 bg-black/60 flex items-center justify-center group-hover:opacity-100 duration-300 transition-all rounded-bl-3xl rounded-tr-3xl">
                                        <a href="article-details.html"
                                            className="flex items-center px-2 py-1 gap-x-1 font-DanaMedium rounded-lg border-2 border-white text-white">
                                            <p>ادامه مطالب</p>
                                            <svg className="w-4 h-4 rotate-90">
                                                <use href="#chevron"></use>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-y-1 py-5 px-1">
                                    <h2 className="font-DanaDemiBold">بهترین هارد های بازار ایران [دی ۱۴۰۳] </h2>
                                </div>
                                <span className="flex w-full h-1 py-1 border-t border-gray-100 dark:border-white/10"></span>
                                <div className="flex items-center justify-between text-sm px-1">
                                    <span className="flex items-center gap-x-1 text-blue-500 dark:text-sky-400">
                                        <svg className="w-4 h-4">
                                            <use href="#calendar"></use>
                                        </svg>
                                        <p className="mt-1">1403/5/1</p>
                                    </span>
                                    <span className="flex items-start gap-x-1 text-gray-300">
                                        <p className="font-DanaDemiBold">120</p>
                                        <svg className="w-4 h-4">
                                            <use href="#eye"></use>
                                        </svg>
                                    </span>
                                </div>
                            </SwiperSlide>
                        </Swiper>

                    </div>

                </div>

                <div
                    className="container w-full mt-10 lg:mt-20 flex flex-wrap items-center justify-between gap-6 child:text-sm child:gap-y-1 child:cursor-pointer">
                    {/* item  */}
                    <span className="flex-col items-center justify-center hidden md:flex">
                        <img className="w-14 h-14" src="images/svg/1.svg" alt="" />
                        <p className="text-gray-500 dark:text-gray-300">امکان تحویل اکسپرس</p>
                    </span>
                    <span className="flex flex-col items-center justify-center">
                        <img className="w-14 h-14" src="images/svg/2.svg" alt="" />
                        <p className="text-gray-500 dark:text-gray-300">ضمانت اصل بودن کالا</p>
                    </span>
                    <span className="flex flex-col items-center justify-center">
                        <img className="w-14 h-14" src="images/svg/3.svg" alt="" />
                        <p className="text-gray-500 dark:text-gray-300">ضمانت بازگشت کالا</p>
                    </span>
                    <span className="flex flex-col items-center justify-center">
                        <img className="w-14 h-14" src="images/svg/4.svg" alt="" />
                        <p className="text-gray-500 dark:text-gray-300">پشتیبانی 24 ساعته</p>
                    </span>
                    <span className="flex flex-col items-center justify-center">
                        <img className="w-14 h-14" src="images/svg/5.svg" alt="" />
                        <p className="text-gray-500 dark:text-gray-300">امکان پرداخت در محل</p>
                    </span>
                </div>

            </section>
        </>
    )
}
