import { FilterType, TodoType } from "../components/app/types";

export const AddTodoType: "ADD_TODO" = "ADD_TODO";
export const ToggleCompletedType: "TOGGLE_COMPLETED" = "TOGGLE_COMPLETED";
export const SetFilterType: "SET_FILTER" = "SET_FILTER";

export const addTodo = (todo: TodoType) => ({
  type: AddTodoType,
  data: todo,
});

export const toggleCompleted = (id: number, isCompleted: boolean) => ({
  type: ToggleCompletedType,
  data: { id, isCompleted },
});

export const setFilter = (filter: FilterType) => ({
  type: SetFilterType,
  data: filter,
});
