import { create } from "zustand";

const useNavbarStore = create((set) => ({
  isActive: false,
  toggleActive: () => set((state) => ({ isActive: !state.isActive })),
}));

export { useNavbarStore };
