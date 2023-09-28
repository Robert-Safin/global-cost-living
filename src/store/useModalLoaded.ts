import { create } from "zustand";

interface State {
  modalLoaded: boolean;
  setModalLoaded: (modalLoaded: boolean) => void;
}

const useModalLoaded = create<State>((set) => ({
  modalLoaded: false,
  setModalLoaded: (modalLoaded) => set({ modalLoaded }),
}));

export default useModalLoaded;
