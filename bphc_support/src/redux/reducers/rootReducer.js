import { combineReducers } from "redux";
import { problemReducer } from "./problemReducer";
import { authReducer } from "./authReducer";
import { noticeReducer } from "./noticeReducer";
export const rootReducer = combineReducers({
  problem: problemReducer,
  auth: authReducer,
  notice: noticeReducer,
});
