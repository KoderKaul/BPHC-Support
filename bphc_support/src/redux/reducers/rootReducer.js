import { combineReducers } from "redux";
import { problemReducer } from "./problemReducer";
import { authReducer } from "./authReducer";
import { noticeReducer } from "./noticeReducer";
import { courierReducer } from "./courierReducer";
import { userReducer } from "./userReducer";
export const rootReducer = combineReducers({
  problem: problemReducer,
  auth: authReducer,
  notice: noticeReducer,
  courier: courierReducer,
  user: userReducer,
});
