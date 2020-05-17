import { FilterStateType } from "../../store/reducer/filter/types";

export const SET_FILTER: "SET_FILTER" = "SET_FILTER";

export const setFilter = (filter: FilterStateType) => ({
  type: SET_FILTER,
  data: filter,
});
