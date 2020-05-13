import { addTodo, toggleCompleted, setFilter, deleteTodo } from "./";

export type addTodoAction = ReturnType<typeof addTodo>;
export type toggleCompletedAction = ReturnType<typeof toggleCompleted>;
export type DeleteTodoAction = ReturnType<typeof deleteTodo>;

export type TodoAction =
  | addTodoAction
  | toggleCompletedAction
  | DeleteTodoAction;
export type setFilterAction = ReturnType<typeof setFilter>;
