'use client'
import React from 'react'
import { Swiper, SwiperSlide } from './../core/index';

export default function AmazingSlider() {
    return (
        <>
            <section className="mx-4 lg:container mt-20">
                <div className="w-full h-80 rounded-xl bg-blue-500 dark:bg-blue-700 p-4 relative">                    
                    <Swiper
                        spaceBetween={10}
                        slidesPerView={6}
                        loop={false}
                        autoplay={{ delay: 5000 }}                        
                        creativeEffect={{
                            prev: { shadow: true, translate: [0, 0, -400] },
                            next: { translate: ['100%', 0, 0] },
                        }}
                        navigation={{
                            nextEl: '.AmazingSlider-prev-slide',
                            prevEl: '.AmazingSlider-next-slide',
                        }}
                        pagination={false}
                        className="swiper AmazingSlider w-full rounded-xl"
                    >

                        <SwiperSlide className="swiper-slide amazing-card">
                            <img className="w-28 h-28" src="images/slider/Amazings.svg" alt="" />
                            {/* TIMER  */}
                            <div className="flex items-center gap-x-2">
                                <span className="timer-box" id="seconds">00</span>
                                <p className="text-white">:</p>
                                <span className="timer-box" id="minutes">00</span>
                                <p className="text-white">:</p>
                                <span className="timer-box" id="hours">03</span>
                            </div>

                            <a href="shop.html" className="flex items-center gap-x-.5 text-gray-100 cursor-pointer">
                                <p>مشاهده همه</p>
                                <svg className="size-4 rotate-90">
                                    <use href="#chevron"></use>
                                </svg>
                            </a>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide small-card group">
                            {/* product header */}
                            <div className="w-full flex items-center justify-between">
                                <span className="flex items-center gap-x-0.5 text-blue-400">
                                    <svg className="size-4 mb-1">
                                        <use href="#rocket"></use>
                                    </svg>
                                    <p className="text-xs">ارسال امروز</p>
                                </span>
                                <span className="text-gray-400 flex items-center justify-end text-sm gap-x-0.5">
                                    <p> 5.0 </p>
                                    <svg className="size-4 mb-1">
                                        <use href="#star"></use>
                                    </svg>
                                </span>
                            </div>
                            {/* product img  */}
                            <a href="product-details.html">
                                <img className="small-card_img" src="images/products/3.png" alt="" />
                            </a>
                            {/* product footer  */}
                            <div className="space-y-2">
                                <a href="product-details.html" className="small-card_link">
                                    لپ تاپ 15.6 اینچی ایسوس مدل Vivobook15 X515MA-BR001-Celeron N4020-8GB DDR4
                                </a>
                                {/* Rate and Price  */}
                                <div className="product-card_price-wrapper">
                                    {/* Price  */}
                                    <div className="small-card_price justify-between">
                                        <span className="pt-1">70%</span>
                                        <h4 className="flex items-center gap-x-1 text-lg">130,000,000 <p
                                            className="text-xs font-DanaMedium">تومان</p>
                                        </h4>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide small-card group">
                            {/* product header  */}
                            <div className="w-full flex items-center justify-between">
                                <span className="flex items-center gap-x-0.5 text-blue-400">
                                    <svg className="size-4 mb-1">
                                        <use href="#rocket"></use>
                                    </svg>
                                    <p className="text-xs">ارسال امروز</p>
                                </span>
                                <span className="text-gray-400 flex items-center justify-end text-sm gap-x-0.5">
                                    <p> 5.0 </p>
                                    <svg className="size-4 mb-1">
                                        <use href="#star"></use>
                                    </svg>
                                </span>
                            </div>
                            {/* product img  */}
                            <a href="product-details.html">
                                <img className="small-card_img" src="images/products/5.webp" alt="" />
                            </a>
                            {/* product footer  */}
                            <div className="space-y-2">
                                <a href="product-details.html" className="small-card_link">
                                    لپ تاپ 15.6 اینچی ایسوس مدل Vivobook15 X515MA-BR001-Celeron N4020-8GB DDR4
                                </a>
                                {/* Rate and Price  */}
                                <div className="product-card_price-wrapper">
                                    {/* Price  */}
                                    <div className="small-card_price justify-between">
                                        <span className="pt-1">70%</span>
                                        <h4 className="flex items-center gap-x-1 text-lg">130,000,000 <p
                                            className="text-xs font-DanaMedium">تومان</p>
                                        </h4>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide small-card group">
                            {/* product header  */}
                            <span className="w-full text-gray-400 flex items-center justify-end text-sm gap-x-0.5">
                                <p> 5.0 </p>
                                <svg className="size-4 mb-1">
                                    <use href="#star"></use>
                                </svg>
                            </span>
                            {/* product img  */}
                            <a href="product-details.html">
                                <img className="small-card_img" src="images/products/1.png" alt="" />
                            </a>
                            {/* product footer  */}
                            <div className="space-y-2">
                                <a href="product-details.html" className="small-card_link">
                                    لپ تاپ 15.6 اینچی ایسوس مدل Vivobook15 X515MA-BR001-Celeron N4020-8GB DDR4
                                </a>
                                {/* Rate and Price  */}
                                <div className="product-card_price-wrapper">
                                    {/* Price  */}
                                    <div className="small-card_price justify-between">
                                        <span className="pt-1">70%</span>
                                        <h4 className="flex items-center gap-x-1 text-lg">130,000,000 <p
                                            className="text-xs font-DanaMedium">تومان</p>
                                        </h4>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide small-card group">
                            {/* product header  */}
                            <span className="w-full text-gray-400 flex items-center justify-end text-sm gap-x-0.5">
                                <p> 5.0 </p>
                                <svg className="size-4 mb-1">
                                    <use href="#star"></use>
                                </svg>
                            </span>
                            {/* product img  */}
                            <a href="product-details.html">
                                <img className="small-card_img" src="images/products/7.webp" alt="" />
                            </a>
                            {/* product footer  */}
                            <div className="space-y-2">
                                <a href="product-details.html" className="small-card_link">
                                    لپ تاپ 15.6 اینچی ایسوس مدل Vivobook15 X515MA-BR001-Celeron N4020-8GB DDR4
                                </a>
                                {/* Rate and Price  */}
                                <div className="product-card_price-wrapper">
                                    {/* Price  */}
                                    <div className="small-card_price justify-between">
                                        <span className="pt-1">70%</span>
                                        <h4 className="flex items-center gap-x-1 text-lg">130,000,000 <p
                                            className="text-xs font-DanaMedium">تومان</p>
                                        </h4>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide small-card group">
                            {/* product header  */}
                            <span className="w-full text-gray-400 flex items-center justify-end text-sm gap-x-0.5">
                                <p> 5.0 </p>
                                <svg className="size-4 mb-1">
                                    <use href="#star"></use>
                                </svg>
                            </span>
                            {/* product img  */}
                            <a href="product-details.html">
                                <img className="small-card_img" src="images/products/3.png" alt="" />
                            </a>
                            {/* product footer  */}
                            <div className="space-y-2">
                                <a href="product-details.html" className="small-card_link">
                                    لپ تاپ 15.6 اینچی ایسوس مدل Vivobook15 X515MA-BR001-Celeron N4020-8GB DDR4
                                </a>
                                {/* Rate and Price  */}
                                <div className="product-card_price-wrapper">
                                    {/* Price  */}
                                    <div className="small-card_price justify-between">
                                        <span className="pt-1">70%</span>
                                        <h4 className="flex items-center gap-x-1 text-lg">130,000,000 <p
                                            className="text-xs font-DanaMedium">تومان</p>
                                        </h4>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide small-card group">
                            {/* product header  */}
                            <span className="w-full text-gray-400 flex items-center justify-end text-sm gap-x-0.5">
                                <p> 5.0 </p>
                                <svg className="size-4 mb-1">
                                    <use href="#star"></use>
                                </svg>
                            </span>
                            {/* product img  */}
                            <a href="product-details.html">
                                <img className="small-card_img" src="images/products/3.png" alt="" />
                            </a>
                            {/* product footer  */}
                            <div className="space-y-2">
                                <a href="product-details.html" className="small-card_link">
                                    لپ تاپ 15.6 اینچی ایسوس مدل Vivobook15 X515MA-BR001-Celeron N4020-8GB DDR4
                                </a>
                                {/* Rate and Price  */}
                                <div className="product-card_price-wrapper">
                                    {/* Price  */}
                                    <div className="small-card_price justify-between">
                                        <span className="pt-1">70%</span>
                                        <h4 className="flex items-center gap-x-1 text-lg">130,000,000 <p
                                            className="text-xs font-DanaMedium">تومان</p>
                                        </h4>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <a href="shop.html" className="swiper-slide amazing-card_last ">
                                <svg className="size-10 ">
                                    <use href="#arrow-left-circle"></use>
                                </svg>
                                <h2>مشاهده همه</h2>
                            </a>
                        </SwiperSlide>

                    </Swiper>
                    <button
                        className="slider-navigate_btn absolute right-1 top-36 border dark:border-gray-700 border-gray-200 AmazingSlider-prev-slide z-10">
                        <svg className="size-6 -rotate-90">
                            <use href="#chevron" />
                        </svg>
                    </button>
                    <button
                        className="slider-navigate_btn absolute left-1 top-36 border dark:border-gray-700 border-gray-200 AmazingSlider-next-slide z-10">
                        <svg className="size-6 rotate-90">
                            <use href="#chevron" />
                        </svg>
                    </button>
                </div>
            </section >
        </>
    )
}
