import { create } from "zustand";

const useNavbarStore = create((set) => ({
  isActive: false,
  toggleActive: () => set((state) => ({ isActive: !state.isActive })),
  isSearchActive: false,
  toggleSearchActive: () =>
    set((state) => ({ isSearchActive: !state.isSearchActive })),
}));

const useTopAnimeStore = create((set) => ({
  isTopAnimeLoading: true,
  setTopAnimeLoading: (isTopAnimeLoading) => set({ isTopAnimeLoading }),
  topAnime: null,
  setTopAnime: (topAnime) => set({ topAnime }),
}));

export { useNavbarStore, useTopAnimeStore };
