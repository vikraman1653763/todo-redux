import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  filter: "all",          // "all" | "active" | "completed"
  isAddingTodo: false,    // controls the Add form visibility
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    setIsAddingTodo: (state, action) => {
      state.isAddingTodo = action.payload;
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
    addTodo: (state, action) => {
      const text = String(action.payload || "").trim();
      if (!text) return;
      const newTodo = {
        id: crypto.randomUUID(),
        text,
        completed: false,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };
      state.items.unshift(newTodo);
      state.isAddingTodo = false;
    },
    toggleTodoCompleted: (state, action) => {
      const t = state.items.find((i) => i.id === action.payload);
      if (t) {
        t.completed = !t.completed;
        t.updatedAt = new Date().toISOString();
      }
    },
    updateTodoText: (state, action) => {
      const { id, text } = action.payload || {};
      const t = state.items.find((i) => i.id === id);
      if (t && typeof text === "string") {
        t.text = text.trim();
        t.updatedAt = new Date().toISOString();
      }
    },
    deleteTodo: (state, action) => {
      state.items = state.items.filter((i) => i.id !== action.payload);
    },
    clearCompleted: (state) => {
      state.items = state.items.filter((i) => !i.completed);
    },
    markAllCompleted: (state) => {
      state.items.forEach((i) => {
        i.completed = true;
        i.updatedAt = new Date().toISOString();
      });
    },
  },
});

export const {
  setIsAddingTodo,
  setFilter,
  addTodo,
  toggleTodoCompleted,
  updateTodoText,
  deleteTodo,
  clearCompleted,
  markAllCompleted,
} = todoSlice.actions;

export default todoSlice.reducer;
