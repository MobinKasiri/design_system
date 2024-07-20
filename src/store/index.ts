import { create } from "zustand";

type modeTypeProps = "light" | "dark";

type Store = {
  mode: modeTypeProps;
  changeMode: (mode: modeTypeProps) => void;
};

export const useDesignSystemStore = create<Store>()((set) => ({
  mode: "light",
  changeMode: (mode: modeTypeProps) => set((state) => ({ ...state, mode })),
}));
