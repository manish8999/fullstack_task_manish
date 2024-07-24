import {
    FETCH_TASKS_REQUEST,
    FETCH_TASKS_SUCCESS,
    FETCH_TASKS_FAILURE,
    ADD_TASK_REQUEST,
    ADD_TASK_SUCCESS,
    ADD_TASK_FAILURE,
  } from "../actionType/user.actiontype";
  
  interface TaskState {
    tasks: any[];
    loading: boolean;
    error: string | null;
  }
  
  const initialState: TaskState = {
    tasks: [],
    loading: false,
    error: null,
  };
  
  export const taskReducer = (state = initialState, action: any): TaskState => {
    switch (action.type) {
      case FETCH_TASKS_REQUEST:
        return { ...state, loading: true, error: null };
      case FETCH_TASKS_SUCCESS:
        return { ...state, loading: false, tasks: action.payload };
      case FETCH_TASKS_FAILURE:
        return { ...state, loading: false, error: action.payload };
      case ADD_TASK_REQUEST:
        return { ...state, loading: true, error: null };
      case ADD_TASK_SUCCESS:
        return {
          ...state,
          loading: false,
          tasks: [action.payload, ...state.tasks],
        };
      case ADD_TASK_FAILURE:
        return { ...state, loading: false, error: action.payload };
      default:
        return state;
    }
  };
  