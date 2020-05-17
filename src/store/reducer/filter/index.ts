import Redux from "redux";
import { SetFilterType } from "../../../actions/filter";
import { setFilterAction } from "../../../actions/filter/types";
import { FilterStateType } from "./types";

const filterReducer: Redux.Reducer<FilterStateType, setFilterAction> = (
  state = "ALL",
  action
) => {
  if (action.type === SetFilterType) return action.data;

  return state;
};

export default filterReducer;