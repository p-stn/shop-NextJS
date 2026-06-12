import { useUIStore } from '@/store/uiStore'
import React from 'react'

export default function SearchBar() {
    const { isOpen, toggle } = useUIStore()
    const isDropdownOpen = isOpen['dropdown'] ?? false
    return (
        <>
            <div onClick={() => toggle('dropdown')}
            className={`search-overlay ${isDropdownOpen ? 'active' : ''}`}></div >
            <div className="relative z-20">
                {/* INPUT  */}

                <div onClick={() => toggle('dropdown')}
                    className="search-btn-open flex gap-x-2 app-border bg-gray-50 dark:bg-gray-700 p-1 rounded-full cursor-pointer ring-blue-400 w-84 transition-all">
                    <svg className="size-6 p-1.5 flex-center text-gray-100 bg-blue-600 rounded-full w-9 h-9">
                        <use href="#search" />
                    </svg>
                    <input placeholder="جستجو در کارین..." type="text" />
                </div>
                {/* Search Modal  */}
                <div className={`search-modal space-y-4 ${isDropdownOpen ? 'active' : ''} `} >
                    {/* Result  */}
                    <div>
                        <span className="flex items-center text-sm gap-x-1 text-gray-600 dark:text-gray-200">
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
        </>
    )
}
