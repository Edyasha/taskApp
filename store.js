import { v1 } from "uuid";
import { create } from "zustand";

const useStore = create((set) => ({
  tasks: [],
  addTasks: (task) =>
    set((state) => ({
      tasks: [{ id: v1(), text: task.text }, ...state.tasks],
    })),
}));

export default useStore;
