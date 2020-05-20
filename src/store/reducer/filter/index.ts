import Redux from "redux";
import { SET_FILTER } from "../../../actions/filter";
import { SetFilterAction } from "../../../actions/filter/types";
import { FilterStateType } from "./types";

const filterReducer: Redux.Reducer<FilterStateType, SetFilterAction> = (
  state = "ALL",
  action
) => {
  if (action.type === SET_FILTER) return action.data;

  return state;
};

export default filterReducer;
