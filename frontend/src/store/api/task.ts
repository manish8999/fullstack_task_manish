import axios from "axios";
import { Dispatch } from "redux";
import {
    fetchTasksRequest,
    fetchTasksSuccess,
    fetchTasksFailure,
    addTaskRequest,
    addTaskSuccess,
    addTaskFailure
} from "../action/task.action";
import apis from './task.service';

export const fetchTasks = () => {
    return async (dispatch: Dispatch) => {
        dispatch(fetchTasksRequest());

        try {
            const response = await axios.get(apis.getTaskList(), {
                headers: {
                    'Accept': 'application/json',
                },
            });
            dispatch(fetchTasksSuccess(response.data));
            console.log(response.data);
        } catch (error: any) {
            dispatch(fetchTasksFailure(error.message));
        }
    };
};
export const addTask = (task: string) => {
    return async (dispatch: Dispatch) => {
        dispatch(addTaskRequest());

        try {
            const response = await axios.post(apis.postTask(),
                { task },
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            );
            dispatch(addTaskSuccess(response.data));
        } catch (error: any) {
            dispatch(addTaskFailure(error.message));
        }
    };
};
