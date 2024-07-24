import axios from 'axios';
import apis from './task';
export const DISCLOSURE_CANCEL = 'cancel';



interface ApiResponse<T> {
    data?: T;
    error?: string;
}

export const getTaskList = async (): Promise<ApiResponse<any>> => {
    try {
        const response = await axios.get(apis.getTaskList(), {
            headers: {
                'Accept': 'application/json',
            },
        });

        return { data: response.data };
    } catch (e: any) {
        if (axios.isCancel(e)) {
            return { error: DISCLOSURE_CANCEL };
        }
        return { error: e.message || 'An unexpected error occurred' };
    }
};

export const addTask = async (task: string): Promise<ApiResponse<any>> => {
    try {
        const response = await axios.post(apis.postTask(),
            { task },
            {
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        );

        return { data: response.data };
    } catch (e: any) {
        if (axios.isCancel(e)) {
            return { error: DISCLOSURE_CANCEL };
        }
        return { error: e.message || 'An unexpected error occurred' };
    }
};
