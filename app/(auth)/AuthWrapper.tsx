'use client'

import { DARK_THEME, useThemeStore } from "@/store/themeStore"
import IconsSprite from "@/utils/icons-sprite"
import { useEffect } from "react"

export default function AuthWrapper({ children, }: { children: React.ReactNode }) {
    const { theme, toggleTheme } = useThemeStore()
    useEffect(() => {
        const savedTheme = useThemeStore.getState().theme
        document.documentElement.classList.toggle(DARK_THEME, savedTheme === DARK_THEME)        
    }, [])    

    return (
        <>
            <div className="relative flex items-center justify-center min-h-screen w-full">
                <div className="absolute inset-0 flex w-screen items-center justify-center overflow-hidden [mask-image:radial-gradient(circle_at_center,rgba(255,255,255,1)_0%,rgba(255,255,255,0)_85%)]">
                    <svg className="absolute left-0 top-0 h-full w-full stroke-black/10 stroke-[2] [mask-image:radial-gradient(circle_at_center,rgba(255,255,255,1)_20%,rgba(255,255,255,0)_95%)] dark:stroke-white/10">
                        <rect width="100%" height="100%" strokeWidth="0" fill="url(#grid-pattern)"></rect>
                        <defs>
                            <pattern id="grid-pattern" viewBox="0 0 64 64" width="60" height="60" patternUnits="userSpaceOnUse">
                                <path d="M64 0H0V64" fill="none"></path>
                            </pattern>
                        </defs>
                    </svg>
                    <IconsSprite />
                    <div className="relative w-[27rem] mx-5 flex flex-col justify-center py-12 px-4 md:px-8 bg-white dark:bg-gray-800 shadow-md rounded-xl">
                        <div className="flex items-center justify-center">                            
                            <button onClick={toggleTheme}
                                className="toggle-theme absolute left-2 top-2 flex-center p-1.5 rounded-full text-gray-300">
                                <svg className="inline-block dark:hidden size-5">
                                    <use href="#moon" />
                                </svg>
                                <svg className="hidden dark:inline size-5">
                                    <use href="#sun" />
                                </svg>
                            </button>
                            <a href="main.html" className="flex flex-col text-center">
                                <span className="font-MorabbaMedium text-4xl flex items-center">
                                    <span className="text-blue-500">کارین</span> شاپ
                                </span>
                            </a>
                        </div>
                        {children}
                    </div>
                </div>
            </div>

        </>
    )
}