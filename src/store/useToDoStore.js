import { create } from "zustand";

const useTodoStore = create((set) => ({
  todos: [],

  addTodo: (tasks) => {
    set((state) => ({
      todos: [
        ...state.todos,
        { id: Date.now(), name: tasks, completed: false },
      ],
    }));
  },
  toggleTodo: (id) =>
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.id === id ? { ...todo, feito: !todo.feito } : todo,
      ),
    })),

  removeTodo: (id) =>
    set((state) => ({
      todos: state.todos.filter((todo) => todo.id !== id),
    })),
}));

export default useTodoStore;
