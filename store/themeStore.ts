// store/themeStore.ts
import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

type Theme = 'dark' | 'light'

interface ThemeState {
    theme: Theme
    toggleTheme: () => void
    setTheme: (theme: Theme) => void
}

export const DARK_THEME = 'dark'
export const LIGHT_THEME = 'light'

export const useThemeStore = create<ThemeState>()(
    persist(
        (set, get) => ({
            theme: LIGHT_THEME as Theme,

            toggleTheme: () => {
                const currentTheme = get().theme
                const newTheme = currentTheme === DARK_THEME ? LIGHT_THEME : DARK_THEME

                set({ theme: newTheme })

                if (typeof document !== 'undefined') {
                    document.documentElement.classList.toggle(DARK_THEME, newTheme === DARK_THEME)
                }
            },

            setTheme: (newTheme: Theme) => {
                set({ theme: newTheme })
                if (typeof document !== 'undefined') {
                    document.documentElement.classList.toggle(DARK_THEME, newTheme === DARK_THEME)
                }
            }
        }),
        {
            name: 'theme-storage',
            storage: createJSONStorage(() => localStorage),
            partialize: (state) => ({ theme: state.theme }),
        }
    )
)