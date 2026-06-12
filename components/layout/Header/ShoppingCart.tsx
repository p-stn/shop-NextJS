import { useOpenCart } from '@/store/openCart'
import React from 'react'

export default function ShoppingCart() {
    const { isOpen, toggle } = useOpenCart()
    const isCartOpen = isOpen['opencart'] ?? false

    return (
        <>
            <div onClick={() => toggle('opencart')}
                className={`overlay ${isCartOpen ? 'active' : ''}`}></div >
            <button onClick={() => toggle('opencart')} className="flex-center p-2 bg-blue-600 text-gray-100 rounded-full open-cart relative">
                <svg className="size-6">
                    <use href="#shopping-bag" />
                </svg>
                <span className="absolute -top-1 -right-1 flex h-4 w-4">
                    <span
                        className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-600 opacity-75"></span>
                    <span
                        className="relative inline-flex rounded-full h-4 w-4 bg-red-500 text-xs pt-1 flex-center text-white">2</span>
                </span>
            </button>
            {/* Cart  */}
            <div className={`cart ${isCartOpen ? 'active' : ''}`}>
                {/* HEADER  */}
                <div
                    className="flex items-center justify-between pb-2 border-b-2 border-gray-200 dark:border-gray-600 text-gray-800 dark:text-gray-300">
                    <h2 className="font-DanaMedium text-lg">سبد خرید <span className="text-sm text-gray-400 font-Dana">
                        (2
                        مورد)</span></h2>
                    <svg onClick={() => toggle('opencart')}
                    className="size-5 cursor-pointer close-cart mb-.5">
                        <use href="#x-mark" />
                    </svg>
                </div>
                {/* MAIN  */}
                <div className="flex flex-col divide-y-2 divide-gray-200 dark:divide-gray-600 my-4">
                    {/* CART ITEM  */}
                    <div className="grid grid-cols-12 gap-x-2 w-full py-4 cursor-pointer">
                        {/* img  */}
                        <div className="col-span-4 w-24 h-20">
                            <img src="images/products/5.webp" className="rounded-lg" alt="product" />

                        </div>
                        {/* detail  */}
                        <div className="col-span-8 flex flex-col justify-between">
                            <h2 className="font-DanaMedium line-clamp-2">
                                گوشی موبایل اپل مدل iPhone 13 CH دو سیم‌ کارت ظرفیت 256 گیگابایت و رم 4 گیگابایت
                                - نات اکتیو
                            </h2>
                            <div className="flex items-center justify-between gap-x-2 mt-2">
                                <button
                                    className="w-20 flex items-center justify-between gap-x-1 rounded-lg border border-gray-200 dark:border-white/20 py-1 px-2">
                                    <svg className="size-4 increment text-green-600">
                                        <use href="#plus"></use>
                                    </svg>
                                    {/* value="2" */}
                                    <input type="number" name="customInput" id="customInput" min="0" max="20"
                                        className="custom-input w-4 mr-2 text-sm" />
                                    <svg className="size-4 decrement text-red-500">
                                        <use href="#minus"></use>
                                    </svg>
                                </button>
                                <p className="text-lg text-blue-500 dark:text-blue-400 font-DanaMedium">1,130,000
                                    <span className="font-Dana text-sm">تومان</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* CART ITEM  */}
                    <div className="grid grid-cols-12 gap-x-2 w-full py-4 cursor-pointer">
                        {/* img  */}
                        <div className="col-span-4 w-24 h-20">
                            <img src="images/products/1.png" className="rounded-lg" alt="product" />
                        </div>
                        {/* detail  */}
                        <div className="col-span-8 flex flex-col justify-between">
                            <h2 className="font-DanaMedium line-clamp-2">
                                گوشی موبایل اپل مدل iPhone 13 CH دو سیم‌ کارت ظرفیت 256 گیگابایت و رم 4 گیگابایت
                                - نات اکتیو
                            </h2>
                            <div className="flex items-center justify-between gap-x-2 mt-2">
                                <button
                                    className="w-20 flex items-center justify-between gap-x-1 rounded-lg border border-gray-200 dark:border-white/20 py-1 px-2">
                                    <svg className="size-4 increment text-green-600">
                                        <use href="#plus"></use>
                                    </svg>
                                    {/* value="2" */}
                                    <input type="number" name="customInput" id="customInput" min="0" max="20"
                                        className="custom-input w-4 mr-2 text-sm" />
                                    <svg className="size-4 decrement text-red-500">
                                        <use href="#minus"></use>
                                    </svg>
                                </button>
                                <p className="text-lg text-blue-500 dark:text-blue-400 font-DanaMedium">1,130,000
                                    <span className="font-Dana text-sm">تومان</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* FOOTER  */}
                <div
                    className="w-[90%] fixed bottom-2 flex items-center justify-between border-t-2 border-gray-200 dark:border-gray-600 pt-4">
                    <div>
                        <p className="text-gray-500 dark:text-gray-300 text-sm">مبلغ قابل پرداخت :</p>
                        <p className="text-lg text-blue-500 dark:text-blue-400 font-DanaDemiBold">1,130,000
                            <span className="font-Dana text-sm">تومان</span>
                        </p>
                    </div>
                    <a href="shopping-cart.html"
                        className="py-2 px-4 bg-blue-600 flex-center hover:bg-blue-700 transition-all rounded-lg text-gray-200">
                        ثبت سفارش
                    </a>
                </div>
            </div>
        </>
    )
}
