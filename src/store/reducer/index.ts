import { AddTodoType, ToggleCompletedType, SetFilterType } from "../../actions";
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
    default:
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
      return state;
  }
};

export default combineReducers({
  todo: todoReducer,
  filter: filterReducer,
});
