import { FilterStateType } from "../../store/reducer/filter/types";

export const SetFilterType: "SET_FILTER" = "SET_FILTER";

export const setFilter = (filter: FilterStateType) => ({
  type: SetFilterType,
  data: filter,
});
