import { addTodo, toggleCompleted, deleteTodo } from ".";

export type AddTodoAction = ReturnType<typeof addTodo>;
export type ToggleCompletedAction = ReturnType<typeof toggleCompleted>;
export type DeleteTodoAction = ReturnType<typeof deleteTodo>;

export type TodoAction =
  | AddTodoAction
  | ToggleCompletedAction
  | DeleteTodoAction;
