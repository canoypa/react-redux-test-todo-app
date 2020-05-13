import { AddTodoType, ToggleCompletedType, SetFilterType } from "../actions";
import { TodoAction, setFilterAction } from "../actions/types";
import { TodoStateType, FilterStateType } from "../store/types";

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
  }
};

const filterReducer = (
  state: FilterStateType = "ALL",
  action: setFilterAction
) => {
  switch (action.type) {
    case SetFilterType:
      return action.data;
  }
};

export const appReducer = () => ({
  todo: todoReducer,
  filter: filterReducer,
});
