import { TodoStateType } from "./reducer/todo/types";
import { FilterStateType } from "./reducer/filter/types";

export type StoreType = {
  todo: TodoStateType;
  filter: FilterStateType;
};
