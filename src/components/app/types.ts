export type TodoType = { readonly id: number; text: string; complete: boolean };
export type TodoListType = Map<number, TodoType>;

export type FilterType = "ALL" | "COMPLETED" | "ACTIVE";
