import { combineReducers } from "redux";
import { taskReducer } from "./task.reducer";

const rootReducer = combineReducers({
  tasks: taskReducer,
});

export default rootReducer;
