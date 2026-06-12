'use client'
import React from 'react'

export default function ProductCard() {
    return (
        <div className="container">
            {/* Breadcrumb  */}
            <nav className="flex mt-8 mr-4" aria-label="Breadcrumb">
                <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                    <li className="inline-flex items-center">
                        <a href="main.html"
                            className="inline-flex items-center text-sm gap-x-1  text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                            <svg className="size-4 mb-0.5">
                                <use href="#home" />
                            </svg>
                            صفحه اصلی
                        </a>
                    </li>
                    <li className="inline-flex items-center">
                        <svg className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                d="m1 9 4-4-4-4" />
                        </svg>
                        <a href="shop.html"
                            className="inline-flex items-center text-sm gap-x-1  text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                            فروشگاه
                        </a>
                    </li>
                    <li aria-current="page">
                        <div className="flex items-center">
                            <svg className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="m1 9 4-4-4-4" />
                            </svg>
                            <span className="ms-1 text-sm  text-gray-500 md:ms-2 dark:text-gray-400">جزییات محصول</span>
                        </div>
                    </li>
                </ol>
            </nav>

            {/* PRODUCT DETAILS SECTION  */}
            <section
                className="mt-5 flex flex-col lg:flex-row items-start gap-4 child:rounded-lg child:bg-white child:dark:bg-gray-800 child:shadow child:p-4">
                {/* IMAGE & INFO BOX Container  */}
                <div className="w-full lg:w-3/4">
                    <div className="flex flex-col md:flex-row justify-start gap-x-8 xl:gap-x-2 items-start">
                        {/* IMAGE SLIDER  */}
                        <div className="w-2/4 hidden md:flex flex-col justify-center items-center gap-y-4">
                            <span className="open-sliderModal">
                                <img src="images/products/11.png" className="cursor-pointer object-cover" alt="" />
                            </span>
                            <div className="grid grid-cols-12 child:col-span-3 child:app-border gap-x-4 child:size-16 child:rounded-lg child:cursor-pointer">
                                <div className="p-1 open-sliderModal">
                                    <img src="images/products/11.png" className="object-cover  rounded-lg" />
                                </div>
                                <div className="p-1 open-sliderModal">
                                    <img src="images/products/12.webp" className="object-cover  rounded-lg" />
                                </div>
                                <div className="p-1 open-sliderModal">
                                    <img src="images/products/13.webp" className="object-cover  rounded-lg" />
                                </div>
                                <div className="overflow-hidden relative open-sliderModal">
                                    <svg className="absolute size-8 text-gray-100 top-4 left-4 z-10">
                                        <use href="#ellipsis"></use>
                                    </svg>
                                    <img src="images/products/14.webp" className="object-cover rounded-lg blur-sm" />
                                </div>
                            </div>
                        </div>
                        <div className="slider-modal">
                            <div className="flex w-full h-fit items-center justify-between">
                                <h1 className="font-DanaMedium text-lg">
                                    تصاویر گوشی موبایل اپل مدل iPhone 16 دو سیم کارت
                                </h1>
                                <svg className="size-6 cursor-pointer close-sliderModal">
                                    <use href="#x-mark"></use>
                                </svg>
                            </div>

                            <div className="swiper ProductDetailsSlider mt-14 px-10 w-96 relative">
                                <div className="swiper-wrapper w-[50%] child:w-full child:rounded-lg child:overflow-hidden">
                                    <div className="swiper-slide">
                                        <img src="images/products/11.png" alt="" />
                                    </div>
                                    <div className="swiper-slide">
                                        <img src="images/products/12.webp" alt="" />
                                    </div>
                                    <div className="swiper-slide">
                                        <img src="images/products/13.webp" alt="" />
                                    </div>
                                    <div className="swiper-slide">
                                        <img src="images/products/14.webp" alt="" />
                                    </div>
                                </div>
                            </div>
                            <button className="slider-navigate_btn absolute right-40 top-[17rem] border dark:border-gray-700 border-gray-200 button-prev-ProductDetailsSlider z-20">
                                <svg className="size-6 -rotate-90">
                                    <use href="#chevron" />
                                </svg>
                            </button>
                            <button
                                className="slider-navigate_btn absolute left-40 top-[17rem] border dark:border-gray-700 border-gray-200 button-next-ProductDetailsSlider z-10">
                                <svg className="size-6 rotate-90">
                                    <use href="#chevron" />
                                </svg>
                            </button>
                        </div>
                        {/* INFOS  */}
                        <div className="w-full md:w-3/4 flex flex-col gap-y-7">
                            <div className="flex items-center justify-between">
                                <a href="shop.html" className="font-DanaMedium text-sky-400">اپل / گوشی موبایل اپل</a>
                                <div className="hidden md:flex items-center gap-x-2">
                                    <div className="tooltip">
                                        <button className="rounded-full p-1.5 app-border app-hover">
                                            <svg className="size-4 md:size-5">
                                                <use href="#share"></use>
                                            </svg>
                                        </button>
                                        <div className="tooltiptext">
                                            اشتراک‌گذازی
                                        </div>
                                    </div>
                                    <div className="tooltip">
                                        <button className="rounded-full p-1.5 app-border app-hover">
                                            <svg className="size-4 md:size-5">
                                                <use href="#heart"></use>
                                            </svg>
                                        </button>
                                        <div className="tooltiptext">
                                            علاقه مندی
                                        </div>
                                    </div>
                                    <div className="tooltip">
                                        <button className="rounded-full p-1.5 app-border app-hover">
                                            <svg className="size-4 md:size-5">
                                                <use href="#arrows-up-down"></use>
                                            </svg>
                                        </button>
                                        <div className="tooltiptext">
                                            مقایسه
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* MOBILE SLIDER  */}
                            <div className="flex md:hidden">
                                <div className="swiper MobileProductSlider w-full">
                                    <div className="swiper-wrapper w-full child:w-full child:overflow-hidden child:rounded-lg">
                                        <div className="swiper-slide">
                                            <img src="images/products/11.png" alt="" />
                                        </div>
                                        <div className="swiper-slide">
                                            <img src="images/products/12.webp" alt="" />
                                        </div>
                                        <div className="swiper-slide">
                                            <img src="images/products/13.webp" alt="" />
                                        </div>
                                        <div className="swiper-slide">
                                            <img src="images/products/14.webp" alt="" />
                                        </div>
                                    </div>
                                    <div className="swiper-pagination MobileProductSlider-pagination"></div>
                                </div>
                            </div>

                            <div className="flex flex-col gap-y-3">
                                <p className="text-lg font-DanaDemiBold dark:text-gray-300">
                                    گوشی موبایل اپل مدل iPhone 16 دو سیم کارت ظرفیت 128 گیگابایت و رم 8
                                </p>
                                <p className="text-sm text-gray-300 dark:text-gray-500">
                                    Apple iPhone 16 CH Dual SIM Storage 128GB And RAM 8GB Mobile Phone
                                </p>
                                <div className="flex items-center gap-x-2">
                                    <span className="flex items-center gap-x-1 text-sm">
                                        <svg className="size-4 text-yellow-400 mb-1.5">
                                            <use href="#star"></use>
                                        </svg>
                                        4.4 <span className="text-gray-300 dark:text-gray-500">(امتیاز 849 خریدار)</span>
                                    </span>

                                    <span className="h-6 bg-slate-100 text-gray-400 dark:bg-slate-700 dark:text-gray-400 flex items-center justify-center rounded-full px-2 text-xs font-DanaMedium pt-1">
                                        410 دیدگاه
                                    </span>

                                </div>
                            </div>
                            {/* COLOR  */}
                            <div className="flex flex-col gap-y-4">
                                <h1 className="font-DanaDemiBold text-lg color-title dark:text-gray-200">رنگ : سبز</h1>
                                <div className="flex items-center gap-x-3 child:rounded-full child:size-9 child:p-1">
                                    <button className="color-select-btn ring-4 ring-blue-400 transition-all duration-300 ease-in-out">
                                        <span className="bg-black w-full h-full rounded-full flex"></span>
                                    </button>
                                    <button className="color-select-btn ring-1 ring-gray-400 transition-all duration-300 ease-in-out">
                                        <span className="bg-white app-border w-full h-full rounded-full flex"></span>
                                    </button>
                                    <button className="color-select-btn ring-1 ring-gray-400 transition-all duration-300 ease-in-out">
                                        <span className="bg-green-400 w-full h-full rounded-full flex"></span>
                                    </button>
                                    <button className="color-select-btn ring-1 ring-gray-400 transition-all duration-300 ease-in-out">
                                        <span className="bg-blue-500 w-full h-full rounded-full flex"></span>
                                    </button>
                                </div>
                            </div>
                            {/* Features Box   */}
                            <div className="w-full flex flex-col gap-y-4">
                                <h1 className="font-DanaDemiBold text-lg dark:text-gray-200">ویژگی‌ها</h1>
                                <div className="grid grid-cols-12 gap-2 child:p-2 child:h-16 child:bg-gray-100 dark:child:bg-gray-900 child:rounded-lg child:flex child:flex-col child:gap-y-1.5">
                                    <div className="col-span-12 md:col-span-6 xl:col-span-4">
                                        <p className="text-sm text-gray-500">فناوری صفحه‌ نمایش </p>
                                        <p className="line-clamp-1 font-DanaDemiBold text-sm text-slate-800 dark:text-slate-200">LTPO Super Retina XDR</p>
                                    </div>
                                    <div className="col-span-12 md:col-span-6 xl:col-span-4">
                                        <p className="text-sm text-gray-500">نسخه سیستم عامل </p>
                                        <p className="line-clamp-1 font-DanaDemiBold text-sm text-slate-800 dark:text-slate-200">iOS 18</p>
                                    </div>
                                    <div className="col-span-12 md:col-span-6 xl:col-span-4">
                                        <p className="text-sm text-gray-500">رزولوشن دوربین اصلی </p>
                                        <p className="line-clamp-1 font-DanaDemiBold text-sm text-slate-800 dark:text-slate-200">48 مگاپیکسل</p>
                                    </div>
                                    <div className="col-span-12 md:col-span-6 xl:col-span-4">
                                        <p className="text-sm text-gray-500">اندازه</p>
                                        <p className="line-clamp-1 font-DanaDemiBold text-sm text-slate-800 dark:text-slate-200">6.1</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-10 lg:mr-2 grid grid-cols-12 child:col-span-6 xl:child:col-span-3 gap-x-1 gap-y-2 lg:gap-4 child:border child:text-gray-400 child:dark:border-white/20 child:border-gray-200 child:rounded-lg child:h-12  child:p-2 child:flex child:items-center child:gap-x-1 lg:child:gap-x-2 child:text-sm lg:text-base">
                        <span>
                            <svg className="w-4 h-4 lg:w-6 lg:h-6">
                                <use href="#arrow-path-rounded-square"></use>
                            </svg>
                            <p>ضمانت بازگشت کالا</p>
                        </span>
                        <span>
                            <svg className="w-4 h-4 lg:w-6 lg:h-6">
                                <use href="#check-badge"></use>
                            </svg>
                            <p>
                                تضمین اصالت کالا
                            </p>
                        </span>
                        <span>
                            <svg className="w-4 h-4 lg:w-6 lg:h-6">
                                <use href="#calender-day"></use>
                            </svg>
                            <p>پشتیبانی کل هفته</p>
                        </span>
                        <span>
                            <svg className="w-4 h-4 lg:w-6 lg:h-6">
                                <use href="#truke"></use>
                            </svg>
                            <p>ارسال به سراسر ایران </p>
                        </span>
                    </div>
                </div>
                {/* PRICE & ADD TO CART BOX  */}
                <div className="w-full lg:w-1/4 lg:sticky top-5 flex flex-col gap-y-6">
                    {/* PRICE  */}
                    <div className="flex items-center gap-x-1">
                        <p className="text-2xl font-DanaDemiBold">۹۹,۸۹۹,۰۰۰</p>
                        <p className="">تومان</p>
                    </div>
                    <button
                        className="w-full flex items-center justify-between gap-x-1 rounded-lg border border-gray-200 dark:border-white/20 py-2 px-3">
                        <svg className="w-6 h-6 increment text-green-600">
                            <use href="#plus"></use>
                        </svg>
                        <input type="number" name="customInput" id="customInput" min="1" max="20" 
                            className="custom-input mr-4 text-lg bg-transparent" />
                        <svg className="w-6 h-6 decrement text-red-500">
                            <use href="#minus"></use>
                        </svg>
                    </button>

                    <button
                        className="w-full flex items-center gap-x-1 justify-between dark:bg-gray-900 dark:text-gray-400  bg-gray-100 transition-all rounded-lg py-2 px-2 xl:px-3 font-DanaMedium text-sm xl:text-base">
                        <p>مجموع خرید :</p>
                        <p>۹۹,۸۹۹,۰۰۰ تومان</p>
                    </button>

                    <div className="relative overflow-hidden text-sm font-DanaDemiBold text-right">
                        <div id="slider-text" className="transition-all duration-700 ease-in-out">
                            <p>🔥 ۱۰۰۰+ فروش در هفته گذشته</p>
                        </div>
                    </div>
                    <button
                        className="w-full flex items-center gap-x-1 justify-center bg-blue-500 text-white hover:bg-blue-600 transition-all rounded-lg shadow py-2">
                        افزودن به سبد
                        <svg className="w-5 h-5">
                            <use href="#shopping-bag"></use>
                        </svg>
                    </button>

                    <div className="text-sm  text-gray-400 flex xl:items-center gap-x-1">
                        <svg className="w-5 h-5">
                            <use href="#info"></use>
                        </svg>
                        <p>ارسال رایگان برای خریدهای بالای 400 هزار تومان</p>
                    </div>
                </div>
            </section>
            {/* Best-selling products  */}

            <section className="mx-4 mt-10 lg:mt-20">
                {/* SECTION TITLE  */}
                <div
                    className="flex flex-col gap-y-4 xs:flex-row items-center justify-between w-full text-center xs:text-start">
                    <div className="flex items-center gap-x-2 sm:gap-x-4">
                        <span className="size-12 hidden xs:flex rounded-lg bg-white shadow-lg dark:bg-gray-800 flex-center">
                            <svg className="size-7 text-gray-700 dark:text-gray-100">
                                <use href="#mobile"></use>
                            </svg>
                        </span>
                        <div className="space-y-1 md:space-y-1">
                            <h3 className="text-xl md:text-2xl font-MorabbaMedium text-gray-800 dark:text-gray-50">محصولات
                                <span className="text-blue-600 dark:text-blue-500">مرتبط</span>
                            </h3>
                            <p className="text-sm text-gray-500 dark:text-gray-300">جدیدترین و بروزترین محصولات</p>
                        </div>
                    </div>
                    <div className="w-full xs:w-auto flex justify-between xs:justify-end  items-center gap-x-2">
                        <div className="flex items-center gap-x-2">
                            <button className="slider-navigate_btn BestSelling-prev-slide">
                                <svg className="size-6 -rotate-90">
                                    <use href="#chevron" />
                                </svg>
                            </button>
                            <button className="slider-navigate_btn BestSelling-next-slide">
                                <svg className="size-6 rotate-90">
                                    <use href="#chevron" />
                                </svg>
                            </button>
                        </div>
                        <a href="#"
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
                {/* Latest products Slider  */}
                <div className="swiper BestSelling mt-5 w-full">
                    <div className="swiper-wrapper py-5">
                        {/* PRODUCT ITEM  */}
                        <div className="swiper-slide product-card group">
                            {/* product header  */}
                            <div className="product-card_header">
                                <div className="flex items-center gap-x-2">
                                    <div className="tooltip">
                                        <button className="rounded-full p-1.5 app-border app-hover">
                                            <svg className="size-4">
                                                <use href="#shopping-cart"></use>
                                            </svg>
                                        </button>
                                        <div className="tooltiptext">
                                            سبد خرید
                                        </div>
                                    </div>
                                    <div className="tooltip">
                                        <button className="rounded-full p-1.5 app-border app-hover">
                                            <svg className="size-4">
                                                <use href="#heart"></use>
                                            </svg>
                                        </button>
                                        <div className="tooltiptext">
                                            علاقه مندی
                                        </div>
                                    </div>
                                    <div className="tooltip">
                                        <button className="rounded-full p-1.5 app-border app-hover">
                                            <svg className="size-4">
                                                <use href="#arrows-up-down"></use>
                                            </svg>
                                        </button>
                                        <div className="tooltiptext">
                                            مقایسه
                                        </div>
                                    </div>
                                </div>
                                {/* badge offer  */}
                                <span className="product-card_badge">70% تخفیف‌</span>
                            </div>
                            {/* product img  */}
                            <a href="product-details.html">
                                <img className="product-card_img group-hover:opacity-0 absolute" src="images/products/1.png"
                                    alt="" />
                                <img className="product-card_img opacity-0 group-hover:opacity-100"
                                    src="images/products/2.png" alt="" />
                            </a>
                            {/* product footer  */}
                            <div className="space-y-2">
                                <a href="product-details.html" className="product-card_link">
                                    لپ تاپ 15.6 اینچی ایسوس مدل Vivobook15 X515MA-BR001-Celeron N4020-8GB DDR4
                                </a>
                                {/* Rate and Price  */}
                                <div className="product-card_price-wrapper">
                                    {/* RATE  */}
                                    <div className="product-card_rate">
                                        <span className="flex items-center gap-x-0.5">
                                            <svg className="size-4 text-blue-500 mb-0.5">
                                                <use href="#rocket"></use>
                                            </svg>
                                            <p className="text-xs">ارسال امروز</p>
                                        </span>
                                        <span className="text-gray-400 flex items-center text-sm gap-x-0.5">
                                            <p> 5.0 </p>
                                            <svg className="size-4 mb-1">
                                                <use href="#star"></use>
                                            </svg>
                                        </span>
                                    </div>
                                    {/* Price  */}
                                    <div className="product-card_price">
                                        <del>70,000,000 <h6>تومان</h6></del>
                                        <p>70,000,000</p>
                                        <span>تومان</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-slide product-card group">
                            {/* product header  */}
                            <div className="product-card_header">
                                <div className="flex items-center gap-x-2">
                                    <div className="tooltip">
                                        <button className="rounded-full p-1.5 app-border app-hover">
                                            <svg className="size-4">
                                                <use href="#shopping-cart"></use>
                                            </svg>
                                        </button>
                                        <div className="tooltiptext">
                                            سبد خرید
                                        </div>
                                    </div>
                                    <div className="tooltip">
                                        <button className="rounded-full p-1.5 app-border app-hover">
                                            <svg className="size-4">
                                                <use href="#heart"></use>
                                            </svg>
                                        </button>
                                        <div className="tooltiptext">
                                            علاقه مندی
                                        </div>
                                    </div>
                                    <div className="tooltip">
                                        <button className="rounded-full p-1.5 app-border app-hover">
                                            <svg className="size-4">
                                                <use href="#arrows-up-down"></use>
                                            </svg>
                                        </button>
                                        <div className="tooltiptext">
                                            مقایسه
                                        </div>
                                    </div>
                                </div>
                                {/* badge offer  */}
                                <span className="product-card_badge">70% تخفیف‌</span>
                            </div>
                            {/* product img  */}
                            <a href="product-details.html">
                                <img className="product-card_img group-hover:opacity-0 absolute" src="images/products/3.png"
                                    alt="" />
                                <img className="product-card_img opacity-0 group-hover:opacity-100"
                                    src="images/products/4.png" alt="" />
                            </a>
                            {/* product footer  */}
                            <div className="space-y-2">
                                <a href="product-details.html" className="product-card_link">
                                    لپ تاپ 15.6 اینچی ایسوس مدل Vivobook15 X515MA-BR001-Celeron N4020-8GB DDR4
                                </a>
                                {/* Rate and Price  */}
                                <div className="product-card_price-wrapper">
                                    {/* RATE  */}
                                    <div className="product-card_rate">
                                        <span className="flex items-center gap-x-0.5">
                                            <svg className="size-4 text-blue-500 mb-0.5">
                                                <use href="#rocket"></use>
                                            </svg>
                                            <p className="text-xs">ارسال امروز</p>
                                        </span>
                                        <span className="text-gray-400 flex items-center text-sm gap-x-0.5">
                                            <p> 5.0 </p>
                                            <svg className="size-4 mb-1">
                                                <use href="#star"></use>
                                            </svg>
                                        </span>
                                    </div>
                                    {/* Price  */}
                                    <div className="product-card_price">
                                        <del>70,000,000 <h6>تومان</h6></del>
                                        <p>70,000,000</p>
                                        <span>تومان</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-slide product-card group">
                            {/* product header  */}
                            <div className="product-card_header">
                                <div className="flex items-center gap-x-2">
                                    <div className="tooltip">
                                        <button className="rounded-full p-1.5 app-border app-hover">
                                            <svg className="size-4">
                                                <use href="#shopping-cart"></use>
                                            </svg>
                                        </button>
                                        <div className="tooltiptext">
                                            سبد خرید
                                        </div>
                                    </div>
                                    <div className="tooltip">
                                        <button className="rounded-full p-1.5 app-border app-hover">
                                            <svg className="size-4">
                                                <use href="#heart"></use>
                                            </svg>
                                        </button>
                                        <div className="tooltiptext">
                                            علاقه مندی
                                        </div>
                                    </div>
                                    <div className="tooltip">
                                        <button className="rounded-full p-1.5 app-border app-hover">
                                            <svg className="size-4">
                                                <use href="#arrows-up-down"></use>
                                            </svg>
                                        </button>
                                        <div className="tooltiptext">
                                            مقایسه
                                        </div>
                                    </div>
                                </div>
                                {/* badge offer  */}
                                <span className="product-card_badge">70% تخفیف‌</span>
                            </div>
                            {/* product img  */}
                            <a href="product-details.html">
                                <img className="product-card_img group-hover:opacity-0 absolute" src="images/products/5.webp"
                                    alt="" />
                                <img className="product-card_img opacity-0 group-hover:opacity-100"
                                    src="images/products/6.webp" alt="" />
                            </a>
                            {/* product footer  */}
                            <div className="space-y-2">
                                <a href="product-details.html" className="product-card_link">
                                    لپ تاپ 15.6 اینچی ایسوس مدل Vivobook15 X515MA-BR001-Celeron N4020-8GB DDR4
                                </a>
                                {/* Rate and Price  */}
                                <div className="product-card_price-wrapper">
                                    {/* RATE  */}
                                    <div className="product-card_rate">
                                        <span className="flex items-center gap-x-0.5">
                                            <svg className="size-4 text-blue-500 mb-0.5">
                                                <use href="#rocket"></use>
                                            </svg>
                                            <p className="text-xs">ارسال امروز</p>
                                        </span>
                                        <span className="text-gray-400 flex items-center text-sm gap-x-0.5">
                                            <p> 5.0 </p>
                                            <svg className="size-4 mb-1">
                                                <use href="#star"></use>
                                            </svg>
                                        </span>
                                    </div>
                                    {/* Price  */}
                                    <div className="product-card_price">
                                        <del>70,000,000 <h6>تومان</h6></del>
                                        <p>70,000,000</p>
                                        <span>تومان</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-slide product-card group">
                            {/* product header  */}
                            <div className="product-card_header">
                                <div className="flex items-center gap-x-2">
                                    <div className="tooltip">
                                        <button className="rounded-full p-1.5 app-border app-hover">
                                            <svg className="size-4">
                                                <use href="#shopping-cart"></use>
                                            </svg>
                                        </button>
                                        <div className="tooltiptext">
                                            سبد خرید
                                        </div>
                                    </div>
                                    <div className="tooltip">
                                        <button className="rounded-full p-1.5 app-border app-hover">
                                            <svg className="size-4">
                                                <use href="#heart"></use>
                                            </svg>
                                        </button>
                                        <div className="tooltiptext">
                                            علاقه مندی
                                        </div>
                                    </div>
                                    <div className="tooltip">
                                        <button className="rounded-full p-1.5 app-border app-hover">
                                            <svg className="size-4">
                                                <use href="#arrows-up-down"></use>
                                            </svg>
                                        </button>
                                        <div className="tooltiptext">
                                            مقایسه
                                        </div>
                                    </div>
                                </div>
                                {/* badge offer  */}
                                <span className="product-card_badge">70% تخفیف‌</span>
                            </div>
                            {/* product img  */}
                            <a href="product-details.html">
                                <img className="product-card_img group-hover:opacity-0 absolute" src="images/products/7.webp"
                                    alt="" />
                                <img className="product-card_img opacity-0 group-hover:opacity-100"
                                    src="images/products/8.webp" alt="" />
                            </a>
                            {/* product footer  */}
                            <div className="space-y-2">
                                <a href="product-details.html" className="product-card_link">
                                    لپ تاپ 15.6 اینچی ایسوس مدل Vivobook15 X515MA-BR001-Celeron N4020-8GB DDR4
                                </a>
                                {/* Rate and Price  */}
                                <div className="product-card_price-wrapper">
                                    {/* RATE  */}
                                    <div className="product-card_rate">
                                        <span className="flex items-center gap-x-0.5">
                                            <svg className="size-4 text-blue-500 mb-0.5">
                                                <use href="#rocket"></use>
                                            </svg>
                                            <p className="text-xs">ارسال امروز</p>
                                        </span>
                                        <span className="text-gray-400 flex items-center text-sm gap-x-0.5">
                                            <p> 5.0 </p>
                                            <svg className="size-4 mb-1">
                                                <use href="#star"></use>
                                            </svg>
                                        </span>
                                    </div>
                                    {/* Price  */}
                                    <div className="product-card_price">
                                        <del>70,000,000 <h6>تومان</h6></del>
                                        <p>70,000,000</p>
                                        <span>تومان</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-slide product-card group">
                            {/* product header  */}
                            <div className="product-card_header">
                                <div className="flex items-center gap-x-2">
                                    <div className="tooltip">
                                        <button className="rounded-full p-1.5 app-border app-hover">
                                            <svg className="size-4">
                                                <use href="#shopping-cart"></use>
                                            </svg>
                                        </button>
                                        <div className="tooltiptext">
                                            سبد خرید
                                        </div>
                                    </div>
                                    <div className="tooltip">
                                        <button className="rounded-full p-1.5 app-border app-hover">
                                            <svg className="size-4">
                                                <use href="#heart"></use>
                                            </svg>
                                        </button>
                                        <div className="tooltiptext">
                                            علاقه مندی
                                        </div>
                                    </div>
                                    <div className="tooltip">
                                        <button className="rounded-full p-1.5 app-border app-hover">
                                            <svg className="size-4">
                                                <use href="#arrows-up-down"></use>
                                            </svg>
                                        </button>
                                        <div className="tooltiptext">
                                            مقایسه
                                        </div>
                                    </div>
                                </div>
                                {/* badge offer  */}
                                <span className="product-card_badge">70% تخفیف‌</span>
                            </div>
                            {/* product img  */}
                            <a href="product-details.html">
                                <img className="product-card_img group-hover:opacity-0 absolute" src="images/products/1.png"
                                    alt="" />
                                <img className="product-card_img opacity-0 group-hover:opacity-100"
                                    src="images/products/2.png" alt="" />
                            </a>
                            {/* product footer  */}
                            <div className="space-y-2">
                                <a href="product-details.html" className="product-card_link">
                                    لپ تاپ 15.6 اینچی ایسوس مدل Vivobook15 X515MA-BR001-Celeron N4020-8GB DDR4
                                </a>
                                {/* Rate and Price  */}
                                <div className="product-card_price-wrapper">
                                    {/* RATE  */}
                                    <div className="product-card_rate">
                                        <span className="flex items-center gap-x-0.5">
                                            <svg className="size-4 text-blue-500 mb-0.5">
                                                <use href="#rocket"></use>
                                            </svg>
                                            <p className="text-xs">ارسال امروز</p>
                                        </span>
                                        <span className="text-gray-400 flex items-center text-sm gap-x-0.5">
                                            <p> 5.0 </p>
                                            <svg className="size-4 mb-1">
                                                <use href="#star"></use>
                                            </svg>
                                        </span>
                                    </div>
                                    {/* Price  */}
                                    <div className="product-card_price">
                                        <del>70,000,000 <h6>تومان</h6></del>
                                        <p>70,000,000</p>
                                        <span>تومان</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-slide product-card group">
                            {/* product header  */}
                            <div className="product-card_header">
                                <div className="flex items-center gap-x-2">
                                    <div className="tooltip">
                                        <button className="rounded-full p-1.5 app-border app-hover">
                                            <svg className="size-4">
                                                <use href="#shopping-cart"></use>
                                            </svg>
                                        </button>
                                        <div className="tooltiptext">
                                            سبد خرید
                                        </div>
                                    </div>
                                    <div className="tooltip">
                                        <button className="rounded-full p-1.5 app-border app-hover">
                                            <svg className="size-4">
                                                <use href="#heart"></use>
                                            </svg>
                                        </button>
                                        <div className="tooltiptext">
                                            علاقه مندی
                                        </div>
                                    </div>
                                    <div className="tooltip">
                                        <button className="rounded-full p-1.5 app-border app-hover">
                                            <svg className="size-4">
                                                <use href="#arrows-up-down"></use>
                                            </svg>
                                        </button>
                                        <div className="tooltiptext">
                                            مقایسه
                                        </div>
                                    </div>
                                </div>
                                {/* badge offer  */}
                                <span className="product-card_badge">70% تخفیف‌</span>
                            </div>
                            {/* product img  */}
                            <a href="product-details.html">
                                <img className="product-card_img group-hover:opacity-0 absolute" src="images/products/3.png"
                                    alt="" />
                                <img className="product-card_img opacity-0 group-hover:opacity-100"
                                    src="images/products/4.png" alt="" />
                            </a>
                            {/* product footer  */}
                            <div className="space-y-2">
                                <a href="product-details.html" className="product-card_link">
                                    لپ تاپ 15.6 اینچی ایسوس مدل Vivobook15 X515MA-BR001-Celeron N4020-8GB DDR4
                                </a>
                                {/* Rate and Price  */}
                                <div className="product-card_price-wrapper">
                                    {/* RATE  */}
                                    <div className="product-card_rate">
                                        <span className="flex items-center gap-x-0.5">
                                            <svg className="size-4 text-blue-500 mb-0.5">
                                                <use href="#rocket"></use>
                                            </svg>
                                            <p className="text-xs">ارسال امروز</p>
                                        </span>
                                        <span className="text-gray-400 flex items-center text-sm gap-x-0.5">
                                            <p> 5.0 </p>
                                            <svg className="size-4 mb-1">
                                                <use href="#star"></use>
                                            </svg>
                                        </span>
                                    </div>
                                    {/* Price  */}
                                    <div className="product-card_price">
                                        <del>70,000,000 <h6>تومان</h6></del>
                                        <p>70,000,000</p>
                                        <span>تومان</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}
