import { v1 } from "uuid";
import { create } from "zustand";

const useStore = create((set) => ({
  tasks: [],
  addTasks: (task) =>
    task.text.trim() !== ""
      ? set((state) => ({
          tasks: [
            {
              id: v1(),
              text: task.text,
              completed: false,
              created: new Date().toLocaleString(),
            },
            ...state.tasks,
          ],
        }))
      : null,
  removeTasks: (id) =>
    set((state) => ({
      tasks: state.tasks.filter((task) => task.id !== id),
    })),
  toggleTasks: (id) =>
    set((state) => ({
      tasks: state.tasks.map((task) =>
        id === task.id ? { ...task, completed: !task.completed } : task
      ),
    })),
}));

export default useStore;
