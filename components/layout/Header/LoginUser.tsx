import React from 'react'

export default function LoginUser() {
    return (
        <>
            {/* LOGIN  */}
            <button className="flex-center py-2 px-4  app-border rounded-full app-hover">
                <a href="#" className="flex items-center gap-x-2">
                    <p>ورود | ثبت‌نام</p>
                    <svg className="size-5">
                        <use href="#arrow-left-end" />
                    </svg>
                </a>
            </button>
            {/* Account Btn  */}
            <button className="hidden group relative flex-center py-2 px-4 app-border rounded-full app-hover delay-75">
                <a href="dashboard.html" className="flex items-center gap-x-1">
                    <svg className="size-5">
                        <use href="#user" />
                    </svg>
                    <p>حساب کاربری</p>
                </a>
                <div
                    className="absolute dark:border-none border border-gray-100 w-52 p-2 bg-white text-gray-900 dark:text-gray-100 flex flex-col gap-y-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:top-12 transition-all delay-100 dark:bg-gray-700 top-20 rounded-lg text-base shadow child:transition-all duration-300 child:py-1.5 child:px-2 z-30 child:rounded-lg child:w-full">
                    <a href="dashboard-orders.html"
                        className="flex items-center gap-x-2  hover:bg-blue-500 hover:text-gray-100">
                        <svg className="h-5 w-5">
                            <use href="#user"></use>
                        </svg>
                        سفارشات من
                    </a>
                    <a href="dashboard-messages.html"
                        className="flex items-center gap-x-2  hover:bg-blue-500 hover:text-gray-100">
                        <svg className="h-5 w-5">
                            <use href="#envelope"></use>
                        </svg>
                        لیست پیام ها
                    </a>
                    <a href="dashboard-account.html"
                        className="flex items-center gap-x-2  hover:bg-blue-500 hover:text-gray-100">
                        <svg className="h-5 w-5">
                            <use href="#cog"></use>
                        </svg>
                        اطلاعات کاربری
                    </a>
                    <a href="#"
                        className="flex items-center gap-x-2  hover:bg-red-500 dark:hover:bg-red-500 hover:text-gray-100">
                        <svg className="h-5 w-5">
                            <use href="#arrow-left-end"></use>
                        </svg>
                        خروج از حساب
                    </a>
                </div>
            </button>
        </>
    )
}
