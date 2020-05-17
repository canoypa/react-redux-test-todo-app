import { addTodo, toggleCompleted, deleteTodo } from "./todo";
import { setFilter } from "./filter";

export type addTodoAction = ReturnType<typeof addTodo>;
export type toggleCompletedAction = ReturnType<typeof toggleCompleted>;
export type DeleteTodoAction = ReturnType<typeof deleteTodo>;

export type TodoAction =
  | addTodoAction
  | toggleCompletedAction
  | DeleteTodoAction;
export type setFilterAction = ReturnType<typeof setFilter>;
