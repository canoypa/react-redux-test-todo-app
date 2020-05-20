import { Action, Dispatch } from "redux";
import { TodoAction } from "../../actions/todo/types";
import { SetFilterAction } from "../../actions/filter/types";
import { StoreType } from "../../store/types";

type AllActions = TodoAction | SetFilterAction;

declare module "react-redux" {
  function useDispatch<A extends Action = AllActions>(): Dispatch<A>;

  function useSelector<S = StoreType, Se = unknown>(
    selector: (state: S) => Se
  ): Se;
}
