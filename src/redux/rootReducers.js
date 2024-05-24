import { combineReducers } from "redux";
import UserReducer from "./reducer/UserReducer";
const rootReducer = combineReducers({
  auth: UserReducer,
});
export default rootReducer;
