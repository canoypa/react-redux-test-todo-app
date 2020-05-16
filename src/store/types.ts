export type TodoType = { readonly id: number; text: string; complete: boolean };

export type TodoStateType = Map<number, TodoType> | undefined;
export type FilterStateType = "ALL" | "COMPLETED" | "ACTIVE" | undefined;

export type StoreType = {
  todo: TodoStateType;
  filter: FilterStateType;
};
