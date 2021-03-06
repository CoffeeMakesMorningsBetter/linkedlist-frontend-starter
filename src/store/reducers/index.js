import { combineReducers } from "redux";
import currentUser from "./currentUser";
import errors from "./errors";
import jobs from "./jobs"

const rootReducer = combineReducers({
  currentUser,
  errors,
  jobs
});

export default rootReducer;
