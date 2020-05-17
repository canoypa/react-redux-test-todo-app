export const ADD_TODO = Symbol();
export const TOGGLE_COMPLETED = Symbol();
export const DELETE_TODO = Symbol();

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
