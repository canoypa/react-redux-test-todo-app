import { FilterStateType } from "../store/types";

export const AddTodoType: "ADD_TODO" = "ADD_TODO";
export const ToggleCompletedType: "TOGGLE_COMPLETED" = "TOGGLE_COMPLETED";
export const DeleteTodoType: "DELETE_TODO" = "DELETE_TODO";
export const SetFilterType: "SET_FILTER" = "SET_FILTER";

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

export const setFilter = (filter: FilterStateType) => ({
  type: SetFilterType,
  data: filter,
});
