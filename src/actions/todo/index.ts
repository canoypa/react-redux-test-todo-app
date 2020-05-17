export const AddTodoType = Symbol("ADD_TODO");
export const ToggleCompletedType = Symbol("TOGGLE_COMPLETED");
export const DeleteTodoType = Symbol("DELETE_TODO");

export const addTodo = (text: string) => {
  const todo = { id: Math.random(), text, complete: false };

  return {
    type: AddTodoType,
    data: todo,
  };
};

export const toggleCompleted = (id: number, isCompleted: boolean) => ({
  type: ToggleCompletedType,
  data: { id, isCompleted },
});

export const deleteTodo = (id: number) => ({
  type: DeleteTodoType,
  data: id,
});
