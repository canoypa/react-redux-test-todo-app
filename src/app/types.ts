export type TodoType = { readonly id: number; text: string; complete: boolean };
export type TodoListType = Map<number, TodoType>;

export type filterType = "ALL" | "COMPLETED" | "ACTIVE";
