import Redux from "redux";
import { appReducer } from "./reducer";

export default Redux.createStore(appReducer);
