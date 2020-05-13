import { addTodo, toggleCompleted, setFilter } from "./";

export type addTodoAction = ReturnType<typeof addTodo>;
export type toggleCompletedAction = ReturnType<typeof toggleCompleted>;

export type TodoAction = addTodoAction | toggleCompletedAction;
export type setFilterAction = ReturnType<typeof setFilter>;
