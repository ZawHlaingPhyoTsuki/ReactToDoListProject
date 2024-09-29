import { create } from "zustand";

const useTaskStore = create((set) => ({
  tasks: [
    { id: 1, task: "Finish JavaScript Cash Register App", isDone: true },
    { id: 2, task: "Study for 'Creative Thinking' Class Exam", isDone: false },
    { id: 3, task: "Set Up VirtualBox for Arch Linux", isDone: false },
    {
      id: 4,
      task: "Research Marketing Strategies for Cybercafe",
      isDone: false,
    },
    {
      id: 5,
      task: "Work on Pokémon Search App (freeCodeCamp Project)",
      isDone: false,
    },
  ],
  addTask: (task) =>
    set((state) => ({
      tasks: [...state.tasks, task],
    })),
  removeTask: (id) =>
    set((state) => ({
      tasks: state.tasks.filter((task) => task.id !== id),
    })),
  doneTask: (id) =>
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === id ? { ...task, isDone: !task.isDone } : task
      ),
    })),
}));

export default useTaskStore;