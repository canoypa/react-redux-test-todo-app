import Redux from "redux";
import { ADD_TODO, TOGGLE_COMPLETED, DELETE_TODO } from "../../../actions/todo";
import { TodoActions } from "../../../actions/todo/types";
import { TodoStateType } from "./types";

const todoReducer: Redux.Reducer<TodoStateType, TodoActions> = (
  state = new Map(),
  action
) => {
  switch (action.type) {
    case ADD_TODO:
      return new Map(state.set(action.data.id, action.data));

    case TOGGLE_COMPLETED:
      const todo = state.get(action.data.id);

      if (todo) {
        return new Map(
          state.set(todo.id, { ...todo, complete: action.data.isCompleted })
        );
      }
      return state;

    case DELETE_TODO:
      state.delete(action.data);
      return new Map(state);

    default:
      const __check: never = action;
      return state;
  }
};

export default todoReducer;
