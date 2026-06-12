import { useSelectCountry } from '@/store/selectCountryStore'
import React from 'react'

export default function Navbar() {
    const { isOpen, toggle } = useSelectCountry()
    const isSelectCountry = isOpen['selectcountry'] ?? false

    return (
        <>
            <div onClick={() => toggle('selectcountry')}
                className={`overlay ${isSelectCountry ? 'active' : ''}`}></div >
            <div className="relative flex-between h-16 bg-gray-900 dark:bg-gray-800 rounded-full text-gray-200 px-10">
                {/* MENU  */}
                <ul className="flex items-center gap-x-8">
                    <li className="menu-item">
                        <a href="main.html" className="menu-item_link">
                            صفحه اصلی
                        </a>
                    </li>
                    {/* MENU ITEM --- Mega Menu  */}
                    <li className="menu-item megamenu-link">
                        <a href="#" className="menu-item_link flex items-center justify-center gap-x-1">
                            دسته بندی ها
                            <svg className="size-4">
                                <use href="#chevron" />
                            </svg>
                        </a>
                        <div
                            className="megamenu">
                            {/* RIGHT MENU  */}
                            <ul className="megamenu_category">
                                <li className="megamenu_category-item active">
                                    <svg className="w-5 h-5">
                                        <use href="#mobile"></use>
                                    </svg>
                                    <a href="#">موبایل</a>
                                </li>
                                <li className="megamenu_category-item ">
                                    <svg className="w-5 h-5">
                                        <use href="#tv"></use>
                                    </svg>
                                    <a href="#">لپتاپ</a>
                                </li>
                                <li className="megamenu_category-item ">
                                    <svg className="w-5 h-5">
                                        <use href="#tablet"></use>
                                    </svg>
                                    <a href="#">تبلت</a>
                                </li>
                                <li className="megamenu_category-item ">
                                    <svg className="w-5 h-5">
                                        <use href="#headphone"></use>
                                    </svg>
                                    <a href="#">هدفون</a>
                                </li>
                                <li className="megamenu_category-item ">
                                    <svg className="w-5 h-5">
                                        <use href="#tag"></use>
                                    </svg>
                                    <a href="#">تخفیف</a>
                                </li>
                                <li className="megamenu_category-item ">
                                    <svg className="w-5 h-5">
                                        <use href="#tv"></use>
                                    </svg>
                                    <a href="#">کامپیوتر</a>
                                </li>
                            </ul>

                            <div className="megamenu_left">
                                <a href="shop.html" className="text-blue-400 flex items-center gap-x-0.5 text-sm mb-4">
                                    مشاهده همه
                                    <svg className="size-4 rotate-90">
                                        <use href="#chevron" />
                                    </svg>
                                </a>
                                <ul className="megamenu_left-item active">
                                    <div className="megamenu_left-menu">
                                        <h2 className="megamenu_left-title">برندهای مختلف :</h2>
                                        <li>
                                            <a href="shop.html">گوشی آیفون</a>
                                        </li>
                                        <li>
                                            <a href="shop.html">گوشی سامسونگ</a>
                                        </li>
                                        <li>
                                            <a href="shop.html">گوشی هواووی</a>
                                        </li>
                                        <li>
                                            <a href="shop.html">گوشی شیامی</a>
                                        </li>
                                        <li>
                                            <a href="shop.html">گوشی نوکیا</a>
                                        </li>
                                        <li>
                                            <a href="shop.html">گوشی آنر</a>
                                        </li>
                                        <li>
                                            <a href="shop.html">گوشی آیفون</a>
                                        </li>
                                    </div>
                                    <div className="megamenu_left-menu">
                                        <h2 className="megamenu_left-title">گوشی بر اساس قیمت</h2>
                                        <li><a href="shop.html">گوشی ارزان</a></li>
                                        <li><a href="shop.html">گوشی موبایل قسطی</a></li>
                                        <li><a href="shop.html">گوشی تا ۲ میلیون تومان</a></li>
                                        <li><a href="shop.html">گوشی تا ۵ میلیون تومان</a></li>
                                        <li><a href="shop.html">گوشی تا ۷ میلیون تومان</a></li>
                                        <li><a href="shop.html">گوشی تا ۱۵ میلیون تومان</a></li>
                                        <li><a href="shop.html">گوشی بالای ۱۵ میلیون تومان</a></li>
                                    </div>
                                    <div className="megamenu_left-menu">
                                        <h2 className="megamenu_left-title">لوازم جانبی موبایل</h2>
                                        <li><a href="shop.html">شارژر گوشی</a></li>
                                        <li><a href="shop.html">شارژر وایرلس</a></li>
                                        <li><a href="shop.html">قاب و کاور گوشی</a></li>
                                        <li><a href="shop.html">گلس گوشی</a></li>
                                        <li><a href="shop.html">هولدر گوشی موبایل</a></li>
                                        <li><a href="shop.html">کابل شارژ و مبدل</a></li>
                                        <li><a href="shop.html">پاوربانک (شارژر همراه)</a></li>
                                    </div>

                                </ul>
                                <ul className="megamenu_left-item ">
                                    <div className="megamenu_left-menu">
                                        <h2 className="megamenu_left-title">برندهای مختلف :</h2>
                                        <li><a href="shop.html">لپ‌تاپ اپل (MacBook)</a></li>
                                        <li><a href="shop.html">لپ‌تاپ ایسوس</a></li>
                                        <li><a href="shop.html">لپ‌تاپ لنوو</a></li>
                                        <li><a href="shop.html">لپ‌تاپ اچ‌پی</a></li>
                                        <li><a href="shop.html">لپ‌تاپ دل</a></li>
                                        <li><a href="shop.html">لپ‌تاپ ام‌اس‌آی</a></li>
                                        <li><a href="shop.html">لپ‌تاپ ایسر</a></li>
                                    </div>

                                    <div className="megamenu_left-menu">
                                        <h2 className="megamenu_left-title">لپ‌تاپ بر اساس قیمت</h2>
                                        <li><a href="shop.html">لپ‌تاپ اقتصادی</a></li>
                                        <li><a href="shop.html">لپ‌تاپ تا ۱۰ میلیون تومان</a></li>
                                        <li><a href="shop.html">لپ‌تاپ تا ۲۰ میلیون تومان</a></li>
                                        <li><a href="shop.html">لپ‌تاپ تا ۳۰ میلیون تومان</a></li>
                                        <li><a href="shop.html">لپ‌تاپ تا ۵۰ میلیون تومان</a></li>
                                        <li><a href="shop.html">لپ‌تاپ بالای ۵۰ میلیون تومان</a></li>
                                    </div>

                                    <div className="megamenu_left-menu">
                                        <h2 className="megamenu_left-title">لوازم جانبی لپ‌تاپ</h2>
                                        <li><a href="shop.html">کیف و کوله لپ‌تاپ</a></li>
                                        <li><a href="shop.html">کابل و آداپتور لپ‌تاپ</a></li>
                                        <li><a href="shop.html">استند و پایه خنک‌کننده</a></li>
                                        <li><a href="shop.html">ماوس و کیبورد</a></li>
                                        <li><a href="shop.html">هارد اکسترنال و SSD</a></li>
                                        <li><a href="shop.html">پد ماوس</a></li>
                                    </div>

                                </ul>
                                <ul className="megamenu_left-item">
                                    <div className="megamenu_left-menu">
                                        <h2 className="megamenu_left-title">برندهای مختلف تبلت</h2>
                                        <li><a href="shop.html">تبلت اپل (iPad)</a></li>
                                        <li><a href="shop.html">تبلت سامسونگ</a></li>
                                        <li><a href="shop.html">تبلت لنوو</a></li>
                                        <li><a href="shop.html">تبلت مایکروسافت (Surface)</a></li>
                                        <li><a href="shop.html">تبلت هواوی</a></li>
                                        <li><a href="shop.html">تبلت شیائومی</a></li>
                                    </div>

                                    <div className="megamenu_left-menu">
                                        <h2 className="megamenu_left-title">لوازم جانبی تبلت</h2>
                                        <li><a href="shop.html">کیف و کاور تبلت</a></li>
                                        <li><a href="shop.html">قلم لمسی</a></li>
                                        <li><a href="shop.html">کیبورد و استند</a></li>
                                        <li><a href="shop.html">گلس و محافظ صفحه</a></li>
                                        <li><a href="shop.html">کابل و شارژر</a></li>
                                        <li><a href="shop.html">پاوربانک</a></li>
                                    </div>

                                </ul>
                                <ul className="megamenu_left-item">
                                    <li>منوی4  </li>
                                </ul>
                                <ul className="megamenu_left-item">
                                    <li>منوی5  </li>
                                </ul>
                                <ul className="megamenu_left-item">
                                    <li>منوی6  </li>
                                </ul>
                            </div>
                        </div>
                    </li>

                    <li className="menu-item">
                        <a href="shop.html" className="menu-item_link">
                            فروشگاه
                        </a>
                    </li>
                    <li className="menu-item">
                        <a href="articles.html" className="menu-item_link">
                            وبلاگ
                        </a>
                    </li>
                    {/* MENU ITEM --- Solid submenu  */}
                    <li className="menu-item group">
                        <a className="menu-item_link cursor-pointer">
                            منوی ساده
                            <svg className="size-4 group-hover:rotate-180 duration-300">
                                <use href="#chevron" />
                            </svg>
                        </a>
                        <ul className="solid-menu">
                            <li>
                                <a href="aboute-us.html">درباره ما</a>
                            </li>
                            <li>
                                <a href="questions.html">سوالات متداول</a>
                            </li>
                            <li>
                                <a href="contact-us.html">تماس با ما</a>
                            </li>
                            <li className="solid-submenu_link">
                                <a href="#">صفحات</a>
                                <svg className="size-4 rotate-90 duration-300">
                                    <use href="#chevron" />
                                </svg>
                                <ul className="solid-submenu">
                                    <li>
                                        <a href="shop.html">فروشگاه</a>
                                    </li>
                                    <li>
                                        <a href="product-details.html">جزئیات محصول</a>
                                    </li>
                                    <li>
                                        <a href="dashboard.html">پنل کاربری</a>
                                    </li>
                                    <li>
                                        <a href="shopping-cart.html">سبد خرید</a>
                                    </li>
                                    <li>
                                        <a href="login.html">صفحه ورود</a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                </ul>
                {/* Addres  */}
                <div className="relative">
                    <button onClick={() => toggle('selectcountry')}
                        className="flex items-center gap-x-1 citylist-open">
                        <svg className="size-6">
                            <use href="#map" />
                        </svg>
                        <p>آدرس خود را انتخاب کنید</p>
                    </button>
                    <div className={`citylist-menu z-30 ${isSelectCountry ? 'active' : ''}`}>
                        {/* Search city  */}
                        <button className="flex bg-gray-200 dark:bg-gray-700 gap-x-1 w-full items-center p-2 rounded-lg">
                            <svg className="size-6 text-gray-400">
                                <use href="#search" />
                            </svg>
                            <input type="text" className="w-full placeholder:text-gray-400" placeholder="جستجوی شهر..." />
                        </button>
                        <h2 className="my-3 pr-1.5 font-DanaMedium">شهرهای پرتکرار :</h2>
                        {/* City list  */}
                        <ul className="city-list">
                            <li>
                                <a href="#">
                                    <svg className="size-5">
                                        <use href="#map" />
                                    </svg>
                                    تهران
                                </a>
                                <svg className="size-4 rotate-90">
                                    <use href="#chevron" />
                                </svg>
                            </li>
                            <li>
                                <a href="#">
                                    <svg className="size-5">
                                        <use href="#map" />
                                    </svg>
                                    اصفهان
                                </a>
                                <svg className="size-4 rotate-90">
                                    <use href="#chevron" />
                                </svg>
                            </li>
                            <li>
                                <a href="#">
                                    <svg className="size-5">
                                        <use href="#map" />
                                    </svg>
                                    مشهد
                                </a>
                                <svg className="size-4 rotate-90">
                                    <use href="#chevron" />
                                </svg>
                            </li>
                            <li>
                                <a href="#">
                                    <svg className="size-5">
                                        <use href="#map" />
                                    </svg>
                                    شیراز
                                </a>
                                <svg className="size-4 rotate-90">
                                    <use href="#chevron" />
                                </svg>
                            </li>
                            <li>
                                <a href="#">
                                    <svg className="size-5">
                                        <use href="#map" />
                                    </svg>
                                    تبریز
                                </a>
                                <svg className="size-4 rotate-90">
                                    <use href="#chevron" />
                                </svg>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}
