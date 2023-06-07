import { create } from "zustand";

const useNavbarStore = create((set) => ({
  isActive: false,
  toggleActive: () => set((state) => ({ isActive: !state.isActive })),
  isSearchActive: false,
  toggleSearchActive: () =>
    set((state) => ({ isSearchActive: !state.isSearchActive })),
}));

export { useNavbarStore };
