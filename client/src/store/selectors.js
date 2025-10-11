export const selectTodos = (state) => state.todos.items;
export const selectFilter = (state) => state.todos.filter;
export const selectIsAddingTodo = (state) => state.todos.isAddingTodo;

export const selectFilteredTodos = (state) => {
  const todos = state.todos.items;
  const filter = state.todos.filter;
  switch (filter) {
    case "active":
      return todos.filter((t) => !t.completed);
    case "completed":
      return todos.filter((t) => t.completed);
    default:
      return todos;
  }
};

export const selectTodosStats = (state) => {
  const todos = state.todos.items;
  const total = todos.length;
  const completed = todos.filter((t) => t.completed).length;
  const active = total - completed;
  const completionPercentage = total > 0 ? Math.round((completed / total) * 100) : 0;
  return { todos, total, completed, active, completionPercentage };
};
