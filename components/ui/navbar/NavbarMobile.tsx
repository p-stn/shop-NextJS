import React from 'react'

export default function NavbarMobile() {
    return (
        <>
            <div className="flex justify-center lg:hidden">
                {/* Top Navbar  */}
                <nav
                    className="absolute top-0 inset-x-0 w-full h-16 px-4 shadow-sm dark:bg-gray-800 flex items-center justify-between">
                    {/* Menu  */}
                    <button className="open-menu-mobile flex-center p-2 app-border rounded-full">
                        <svg className=" size-6">
                            <use href="#bars" />
                        </svg>
                    </button>
                    <div className="mobile-menu z-50 flex flex-col">
                        {/* MENU MOBILE header  */}
                        <div className="flex w-full items-center justify-between border-b-normal pb-4">
                            <a href="main.html" className="text-xl font-MorabbaMedium">
                                <span className="text-blue-500">کارین</span> شاپ
                            </a>
                            <button className="close-menu-mobile">
                                <svg className="size-5 text-gray-500 dark:text-gray-200">
                                    <use href="#x-mark" />
                                </svg>
                            </button>
                        </div>
                        {/* MENU MOBILE CATEGORY & ACTION  */}
                        <ul className="flex flex-col gap-y-2 text-gray-800 dark:text-gray-100 mt-4">
                            <li>
                                <span className="open-category mobile-menu-item">
                                    <svg className="size-5">
                                        <use href="#squares" />
                                    </svg>
                                    <a href="#">دسته بندی</a>
                                </span>
                                {/* MENU CATEGORY SLIDE  */}
                                <div className="category-slide">
                                    <div className=" w-full border-b-normal pb-4">
                                        <span className="close-category-slide flex items-center gap-x-1 cursor-pointer">
                                            <svg className="size-4">
                                                <use href="#arrow" />
                                            </svg>
                                            دسته بندی
                                        </span>
                                    </div>
                                    <ul className="child:flex pt-4 child:cursor-pointer space-y-2">
                                        <li>
                                            <div className="relative open-detail-category">
                                                <span className="mobile-menu-category-badge">
                                                    موبایل
                                                </span>
                                                <img src="images/category/1.webp" className="h-28 w-full object-cover rounded"
                                                    alt="" />
                                            </div>
                                            {/* Mobile SLIDE  */}
                                            <div className="detail-category">
                                                <span
                                                    className="close-detail-category flex-center gap-x-1 mx-4 bg-gray-100 dark:bg-gray-900 rounded p-2 cursor-pointer">
                                                    موبایل
                                                    <svg className="size-4">
                                                        <use href="#arrow" />
                                                    </svg>
                                                </span>
                                                <ul
                                                    className="mt-5 flex flex-col child:py-3 divide-y-2 dark:divide-gray-700 child:px-4">
                                                    <li>
                                                        <span className="flex group items-center justify-between open-submenu">
                                                            <a href="#">گوشی‌های هوشمند</a>
                                                            <svg className="size-4 rotate-90">
                                                                <use href="#chevron" />
                                                            </svg>
                                                        </span>
                                                        <ul
                                                            className="menu-category-submenu child:list-disc child-hover:mr-2 child:transition-all child:duration-300">
                                                            <li >آیفون</li>
                                                            <li >سامسونگ</li>
                                                            <li >شیائومی</li>
                                                            <li className="text-red-500">پرفروش‌ها</li>
                                                            <li >نوکیا</li>
                                                        </ul>
                                                    </li>
                                                    <li>
                                                        <span className="flex group items-center justify-between open-submenu">
                                                            <a href="#">لوازم جانبی</a>
                                                            <svg className="size-4 rotate-90">
                                                                <use href="#chevron" />
                                                            </svg>
                                                        </span>
                                                        <ul
                                                            className="menu-category-submenu child:list-disc child-hover:mr-2 child:transition-all child:duration-300">
                                                            <li >قاب موبایل</li>
                                                            <li >محافظ صفحه</li>
                                                            <li >پاوربانک</li>
                                                            <li className="text-red-500">تخفیف‌ها</li>
                                                            <li >شارژر</li>
                                                        </ul>
                                                    </li>
                                                    <li>
                                                        <span className="flex group items-center justify-between open-submenu">
                                                            <a href="#">گجت‌های پوشیدنی</a>
                                                            <svg className="size-4 rotate-90">
                                                                <use href="#chevron" />
                                                            </svg>
                                                        </span>
                                                        <ul
                                                            className="menu-category-submenu child:list-disc child-hover:mr-2 child:transition-all child:duration-300">
                                                            <li >ساعت هوشمند</li>
                                                            <li >دستبند هوشمند</li>
                                                            <li >هدفون بی‌سیم</li>
                                                            <li className="text-red-500">جدیدترین‌ها</li>
                                                            <li >هدست</li>
                                                        </ul>
                                                    </li>
                                                    <li>
                                                        <span className="flex group items-center justify-between open-submenu">
                                                            <a href="#">لوازم مخصوص بازی</a>
                                                            <svg className="size-4 rotate-90">
                                                                <use href="#chevron" />
                                                            </svg>
                                                        </span>
                                                        <ul
                                                            className="menu-category-submenu child:list-disc child-hover:mr-2 child:transition-all child:duration-300">
                                                            <li >کنترلر بازی</li>
                                                            <li >دسته بازی موبایل</li>
                                                            <li >لوازم جانبی گیمرها</li>
                                                            <li className="text-red-500">محصولات جدید</li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="relative open-detail-category">
                                                <span className="mobile-menu-category-badge">
                                                    لپ تاپ
                                                </span>
                                                <img src="images/category/2.jpg" className="h-28 w-full object-cover rounded"
                                                    alt="" />
                                            </div>
                                            <div className="detail-category">
                                                <span
                                                    className="close-detail-category flex-center gap-x-1 mx-4 bg-gray-100 dark:bg-gray-900 rounded p-2 cursor-pointer">
                                                    لپ تاپ
                                                    <svg className="size-4">
                                                        <use href="#arrow" />
                                                    </svg>
                                                </span>
                                                <ul
                                                    className="mt-5 flex flex-col child:py-3 divide-y-2 dark:divide-gray-700 child:px-4">
                                                    <li>
                                                        <span className="flex group items-center justify-between open-submenu">
                                                            <a href="#">لپ‌تاپ‌ها</a>
                                                            <svg className="size-4 rotate-90">
                                                                <use href="#chevron" />
                                                            </svg>
                                                        </span>
                                                        <ul
                                                            className="menu-category-submenu child:list-disc child-hover:mr-2 child:transition-all child:duration-300">
                                                            <li >ایسر</li>
                                                            <li >دل</li>
                                                            <li >اچ‌پی</li>
                                                            <li className="text-red-500">پرفروش‌ها</li>
                                                            <li >لنوو</li>
                                                        </ul>
                                                    </li>
                                                    <li>
                                                        <span className="flex group items-center justify-between open-submenu">
                                                            <a href="#">لوازم جانبی</a>
                                                            <svg className="size-4 rotate-90">
                                                                <use href="#chevron" />
                                                            </svg>
                                                        </span>
                                                        <ul
                                                            className="menu-category-submenu child:list-disc child-hover:mr-2 child:transition-all child:duration-300">
                                                            <li >کیبورد</li>
                                                            <li >ماوس</li>
                                                            <li >کوله لپ‌تاپ</li>
                                                            <li className="text-red-500">محصولات تخفیف‌دار</li>
                                                            <li >پایه خنک‌کننده</li>
                                                        </ul>
                                                    </li>
                                                    <li>
                                                        <span className="flex group items-center justify-between open-submenu">
                                                            <a href="#">قطعات و تجهیزات</a>
                                                            <svg className="size-4 rotate-90">
                                                                <use href="#chevron" />
                                                            </svg>
                                                        </span>
                                                        <ul
                                                            className="menu-category-submenu child:list-disc child-hover:mr-2 child:transition-all child:duration-300">
                                                            <li >هارد اکسترنال</li>
                                                            <li >رم لپ‌تاپ</li>
                                                            <li >شارژر لپ‌تاپ</li>
                                                            <li className="text-red-500">قطعات ویژه</li>
                                                            <li >کارت گرافیک</li>
                                                        </ul>
                                                    </li>
                                                    <li>
                                                        <span className="flex group items-center justify-between open-submenu">
                                                            <a href="#">نرم‌افزارها</a>
                                                            <svg className="size-4 rotate-90">
                                                                <use href="#chevron" />
                                                            </svg>
                                                        </span>
                                                        <ul
                                                            className="menu-category-submenu child:list-disc child-hover:mr-2 child:transition-all child:duration-300">
                                                            <li >آنتی‌ویروس</li>
                                                            <li >نرم‌افزارهای اداری</li>
                                                            <li >نرم‌افزارهای طراحی</li>
                                                            <li className="text-red-500">جدیدترین نرم‌افزارها</li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="relative open-detail-category">
                                                <span className="mobile-menu-category-badge">
                                                    هدفون
                                                </span>
                                                <img src="images/category/4.webp" className="h-28 w-full object-cover rounded"
                                                    alt="" />
                                            </div>
                                            <div className="detail-category">
                                                <span
                                                    className="close-detail-category flex-center gap-x-1 mx-4 bg-gray-100 dark:bg-gray-900 rounded p-2 cursor-pointer">
                                                    هدفون
                                                    <svg className="size-4">
                                                        <use href="#arrow" />
                                                    </svg>
                                                </span>
                                                <ul
                                                    className="mt-5 flex flex-col child:py-3 divide-y-2 dark:divide-gray-700 child:px-4">
                                                    <li>
                                                        <span className="flex group items-center justify-between open-submenu">
                                                            <a href="#">هدفون‌های بی‌سیم</a>
                                                            <svg className="size-4 rotate-90">
                                                                <use href="#chevron" />
                                                            </svg>
                                                        </span>
                                                        <ul
                                                            className="menu-category-submenu child:list-disc child-hover:mr-2 child:transition-all child:duration-300">
                                                            <li >ایرپاد</li>
                                                            <li >هدفون‌های بلوتوثی</li>
                                                            <li >هدفون‌های ورزشی</li>
                                                            <li className="text-red-500">محصولات تخفیف‌دار</li>
                                                            <li >هدفون‌های نویزگیر</li>
                                                        </ul>
                                                    </li>
                                                    <li>
                                                        <span className="flex group items-center justify-between open-submenu">
                                                            <a href="#">هدفون‌های باسیم</a>
                                                            <svg className="size-4 rotate-90">
                                                                <use href="#chevron" />
                                                            </svg>
                                                        </span>
                                                        <ul
                                                            className="menu-category-submenu child:list-disc child-hover:mr-2 child:transition-all child:duration-300">
                                                            <li >هدفون‌های استودیویی</li>
                                                            <li >هدفون‌های گیمینگ</li>
                                                            <li >هدفون‌های اقتصادی</li>
                                                            <li className="text-red-500">مدل‌های ویژه</li>
                                                            <li >هدفون‌های حرفه‌ای</li>
                                                        </ul>
                                                    </li>
                                                    <li>
                                                        <span className="flex group items-center justify-between open-submenu">
                                                            <a href="#">لوازم جانبی هدفون</a>
                                                            <svg className="size-4 rotate-90">
                                                                <use href="#chevron" />
                                                            </svg>
                                                        </span>
                                                        <ul
                                                            className="menu-category-submenu child:list-disc child-hover:mr-2 child:transition-all child:duration-300">
                                                            <li >کیس شارژ</li>
                                                            <li >پد گوش</li>
                                                            <li >کابل و مبدل</li>
                                                            <li className="text-red-500">محصولات تخفیف‌دار</li>
                                                            <li >هولدر هدفون</li>
                                                        </ul>
                                                    </li>
                                                    <li>
                                                        <span className="flex group items-center justify-between open-submenu">
                                                            <a href="#">برندها</a>
                                                            <svg className="size-4 rotate-90">
                                                                <use href="#chevron" />
                                                            </svg>
                                                        </span>
                                                        <ul
                                                            className="menu-category-submenu child:list-disc child-hover:mr-2 child:transition-all child:duration-300">
                                                            <li >سونی</li>
                                                            <li >بوز</li>
                                                            <li >جبرا</li>
                                                            <li className="text-red-500">برندهای تخفیف‌دار</li>
                                                            <li >انکر</li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="relative open-detail-category">
                                                <span className="mobile-menu-category-badge">
                                                    پرفروش ها
                                                </span>
                                                <img src="images/category/3.webp" className="h-28 w-full object-cover rounded"
                                                    alt="" />
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className="mobile-menu-item">
                                <svg className="size-5">
                                    <use href="#user" />
                                </svg>
                                <a href="dashboard.html">حساب کاربری</a>
                            </li>
                            <li className="mobile-menu-item">
                                <svg className="size-5">
                                    <use href="#heart" />
                                </svg>
                                <a href="dashboard-favorite.html">علاقه مندی ها</a>
                            </li>
                            <li className="mobile-menu-item">
                                <svg className="size-5">
                                    <use href="#shopping-cart" />
                                </svg>
                                <a href="shopping-cart.html">سبد خرید</a>
                            </li>
                            <li className="mobile-menu-item">
                                <svg className="size-5">
                                    <use href="#check-badge" />
                                </svg>
                                <a href="#">دربـاره مـا</a>
                            </li>
                            <li className="mobile-menu-item">
                                <svg className="size-5">
                                    <use href="#phone" />
                                </svg>
                                <a href="contact-us.html">تـماس بـا مـا</a>
                            </li>
                        </ul>
                    </div>
                    {/* Logo  */}
                    <a href="main.html" className="flex flex-col text-center">
                        <span className="font-MorabbaMedium text-3xl flex items-center">
                            <span className="text-blue-500">کارین</span> شاپ
                        </span>
                    </a>
                    {/* Toggle theme  */}
                    <button className="toggle-theme flex-center p-2 app-border rounded-full ">
                        <svg className="inline-block dark:hidden size-6">
                            <use href="#moon" />
                        </svg>
                        <svg className="hidden dark:inline size-6">
                            <use href="#sun" />
                        </svg>
                    </button>
                </nav>
                {/* Search baer  */}
                <button className="open-mobile_search-modal">
                    <svg className=" size-6">
                        <use href="#search" />
                    </svg>
                    <p>جستجو در <span className="font-MorabbaMedium">کارین شاپ</span></p>
                </button>
                {/* Search Moadal  */}
                <div className="mobile_search-modal">
                    {/* TOP  */}
                    <div className="w-full flex items-center gap-x-2">
                        <button
                            className="w-full flex items-center gap-x-1 bg-gray-200 dark:bg-gray-800 text-gray-500 py-2 px-4 rounded-3xl">
                            <svg className="size-6">
                                <use href="#search" />
                            </svg>
                            <input type="text" placeholder="جستجو در همه کالاها" />
                        </button>
                        <svg className="size-6 close-mobile_search-modal">
                            <use href="#x-mark" />
                        </svg>
                    </div>
                    <div className="w-full space-y-4">
                        {/* Result  */}
                        <div >
                            <span className=" flex items-center text-sm gap-x-1 text-gray-600 dark:text-gray-200">
                                <p>نتیجه جستجو : <span className="font-DanaMedium text-blue-400">iphone</span></p>
                            </span>
                            <ul
                                className="pt-4 text-gray-500 dark:text-gray-300 flex flex-col gap-y-4 child:flex-between child:cursor-pointer">
                                <li>
                                    <a href="#" className="flex items-center gap-x-2">
                                        <svg className="size-5">
                                            <use href="#search" />
                                        </svg>
                                        آیفون 14
                                    </a>
                                    <svg className="size-4">
                                        <use href="#arrow-up-right" />
                                    </svg>
                                </li>
                                <li>
                                    <a href="#" className="flex items-center gap-x-2">
                                        <svg className="size-5">
                                            <use href="#search" />
                                        </svg>
                                        قاب آیفون
                                    </a>
                                    <svg className="size-4">
                                        <use href="#arrow-up-right" />
                                    </svg>
                                </li>
                                <li>
                                    <a href="#" className="flex items-center gap-x-2">
                                        <svg className="size-5">
                                            <use href="#search" />
                                        </svg>
                                        کاور ایفون 16
                                    </a>
                                    <svg className="size-4">
                                        <use href="#arrow-up-right" />
                                    </svg>
                                </li>
                            </ul>
                        </div>
                        {/* Trend  */}
                        <div className="pt-4">
                            <span className="flex items-center gap-x-1 text-sm text-gray-500 dark:text-gray-200">
                                <svg className="size-4">
                                    <use href="#fire" />
                                </svg>
                                <p>جستجو های پرطرفدار :</p>
                            </span>
                            <ul className="w-full flex items-center gap-1.5 mt-3 child:search-modal-list-item">
                                <li>
                                    <a href="#">#آیفون</a>
                                </li>
                                <li>
                                    <a href="#">#لپ تاپ</a>
                                </li>
                                <li>
                                    <a href="#">#هدفون</a>
                                </li>
                                <li>
                                    <a href="#">#هلدر</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* bottom Navbar- */}
                <ul className="bottom-navbar">
                    <li className="dark:text-sky-400 text-blue-500 font-DanaMedium">
                        <svg className="size-5">
                            <use href="#home" />
                        </svg>
                        <a href="main.html">خانه</a>
                    </li>
                    <li>
                        <svg className="size-5">
                            <use href="#squares" />
                        </svg>
                        <a href="shop.html">فروشگاه</a>
                    </li>
                    <li>
                        <svg className="size-5">
                            <use href="#shopping-bag" />
                        </svg>
                        <a href="shopping-cart.html">سبد خرید</a>
                    </li>
                    <li>
                        <svg className="size-5">
                            <use href="#user" />
                        </svg>
                        <a href="dashboard.html">حساب من</a>
                    </li>
                </ul>
            </div>
        </>
    )
}
