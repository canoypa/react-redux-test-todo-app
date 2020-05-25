import { FilterStateType } from "../../store/types";

export const SET_FILTER = "SET_FILTER" as const;

export const setFilter = (filter: FilterStateType) => ({
  type: SET_FILTER,
  data: filter,
});
