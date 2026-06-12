import { create } from "zustand"

interface UIState {
    isOpen: Record<string, boolean>

    toggle: (key: string) => void
    open: (key: string) => void
    close: (key: string) => void
    closeAll: () => void
}
export const useOpenCart = create<UIState>((set) => ({
    isOpen: {},

    toggle: (key) =>
        set((state) => ({
            isOpen: {
                ...state.isOpen,
                [key]: !state.isOpen[key]
            }
        })),

    open: (key) =>
        set((state) => ({
            isOpen: { ...state.isOpen, [key]: true }
        })),

    close: (key) =>
        set((state) => ({
            isOpen: { ...state.isOpen, [key]: false }
        })),

    closeAll: () => set({ isOpen: {} })
}))