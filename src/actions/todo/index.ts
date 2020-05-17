export const ADD_TODO: "ADD_TODO" = "ADD_TODO";
export const TOGGLE_COMPLETED: "TOGGLE_COMPLETED" = "TOGGLE_COMPLETED";
export const DELETE_TODO: "DELETE_TODO" = "DELETE_TODO";

export const addTodo = (text: string) => {
  const todo = { id: Math.random(), text, complete: false };

  return {
    type: ADD_TODO,
    data: todo,
  };
};

export const toggleCompleted = (id: number, isCompleted: boolean) => ({
  type: TOGGLE_COMPLETED,
  data: { id, isCompleted },
});

export const deleteTodo = (id: number) => ({
  type: DELETE_TODO,
  data: id,
});
