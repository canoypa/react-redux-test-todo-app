export type TodoType = { readonly id: number; text: string; complete: boolean };

export type TodoStateType = Map<number, TodoType>;
export type FilterStateType = "ALL" | "COMPLETED" | "ACTIVE";