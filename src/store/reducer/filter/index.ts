import Redux from "redux";
import { SET_FILTER } from "../../../actions/filter";
import { setFilterAction } from "../../../actions/filter/types";
import { FilterStateType } from "./types";

const filterReducer: Redux.Reducer<FilterStateType, setFilterAction> = (
  state = "ALL",
  action
) => {
  if (action.type === SET_FILTER) return action.data;

  return state;
};

export default filterReducer;
