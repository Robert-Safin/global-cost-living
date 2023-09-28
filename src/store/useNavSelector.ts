import { create } from "zustand";


interface State {
  selectedNav: string;
  setSelectedNav: (selectedNav: string) => void;
}


const useNavSelector = create<State>((set) => ({
  selectedNav: "map",
  setSelectedNav: (selectedNav) => set({ selectedNav: selectedNav }),
}));

export default useNavSelector;
