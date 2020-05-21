export const ADD_TODO = "ADD_TODO" as const;
export const TOGGLE_COMPLETED = "TOGGLE_COMPLETED" as const;
export const DELETE_TODO = "DELETE_TODO" as const;

export const addTodo = (text: string) => ({
  type: ADD_TODO,
  data: { id: Math.random(), text, complete: false },
});

export const toggleCompleted = (id: number, isCompleted: boolean) => ({
  type: TOGGLE_COMPLETED,
  data: { id, isCompleted },
});

export const deleteTodo = (id: number) => ({
  type: DELETE_TODO,
  data: id,
});
