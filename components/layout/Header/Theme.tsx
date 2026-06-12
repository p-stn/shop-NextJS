import { DARK_THEME, useThemeStore } from '@/store/themeStore'
import React, { useEffect } from 'react'

export default function Theme() {
    const { theme, toggleTheme } = useThemeStore()

    useEffect(() => {
        const savedTheme = useThemeStore.getState().theme
        document.documentElement.classList.toggle(DARK_THEME, savedTheme === DARK_THEME)
    }, [])
    return (
        <>
            <button onClick={toggleTheme}
                className="toggle-theme flex-center p-2 app-border rounded-full app-hover">
                <svg className="inline-block dark:hidden size-6">
                    <use href="#moon" />
                </svg>
                <svg className="hidden dark:inline size-6">
                    <use href="#sun" />
                </svg>
            </button>
        </>
    )
}
