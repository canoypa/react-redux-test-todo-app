export type TodoType = { id: number; text: string; complete: boolean };
export type TodoListType = Array<TodoType>;

export type filterType = "ALL" | "COMPLETED" | "ACTIVE";
