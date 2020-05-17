import Redux from "redux";
import {
  AddTodoType,
  ToggleCompletedType,
  DeleteTodoType,
} from "../../actions/todo";
import { SetFilterType } from "../../actions/filter";
import { TodoAction, setFilterAction } from "../../actions/types";
import { TodoStateType, FilterStateType } from "../types";
import { combineReducers } from "redux";

const todoReducer: Redux.Reducer<TodoStateType, TodoAction> = (
  state = new Map(),
  action
) => {
  switch (action.type) {
    case AddTodoType:
      return new Map(state.set(action.data.id, action.data));

    case ToggleCompletedType:
      const todo = state.get(action.data.id);

      if (todo) {
        return new Map(
          state.set(todo.id, { ...todo, complete: action.data.isCompleted })
        );
      }
      return state;

    case DeleteTodoType:
      state.delete(action.data);
      return new Map(state);

    default:
      const __check: never = action;
  }
};

const filterReducer: Redux.Reducer<FilterStateType, setFilterAction> = (
  _state = "ALL",
  action
) => {
  if (action.type === SetFilterType) return action.data;
};

export default combineReducers({
  todo: todoReducer,
  filter: filterReducer,
});
