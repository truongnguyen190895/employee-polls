import { combineReducers } from "redux";
import { authReducer } from "./reducers/authReducer";
import { questionReducer } from "./reducers/questionReducer";

export const rootReducer = combineReducers({
  auth: authReducer,
  question: questionReducer,
});
