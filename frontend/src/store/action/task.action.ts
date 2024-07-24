import {
    FETCH_TASKS_REQUEST,
    FETCH_TASKS_SUCCESS,
    FETCH_TASKS_FAILURE,
    ADD_TASK_REQUEST,
    ADD_TASK_SUCCESS,
    ADD_TASK_FAILURE,
} from "../actionType/task.actiontype";


export const fetchTasksRequest = () => ({
    type: FETCH_TASKS_REQUEST,
});

export const fetchTasksSuccess = (tasks: any) => ({
    type: FETCH_TASKS_SUCCESS,
    payload: tasks,
});

export const fetchTasksFailure = (error: string) => ({
    type: FETCH_TASKS_FAILURE,
    payload: error,
});


export const addTaskRequest = () => ({
    type: ADD_TASK_REQUEST,
});

export const addTaskSuccess = (task: any) => ({
    type: ADD_TASK_SUCCESS,
    payload: task,
});

export const addTaskFailure = (error: string) => ({
    type: ADD_TASK_FAILURE,
    payload: error,
});