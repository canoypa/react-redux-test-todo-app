import {
  AddTodoType,
  ToggleCompletedType,
  SetFilterType,
  DeleteTodoType,
} from "../../actions";
import { TodoAction, setFilterAction } from "../../actions/types";
import { TodoStateType, FilterStateType } from "../types";
import { combineReducers } from "redux";

const todoReducer = (state: TodoStateType = new Map(), action: TodoAction) => {
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
      return state;
  }
};

const filterReducer = (
  state: FilterStateType = "ALL",
  action: setFilterAction
) => {
  switch (action.type) {
    case SetFilterType:
      return action.data;

    default:
      const __check: never = action; // Fix: ？ エラー
      return state;
  }
};

export default combineReducers({
  todo: todoReducer,
  filter: filterReducer,
});
