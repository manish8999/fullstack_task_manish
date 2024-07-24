import { BASE_URL } from './api';

export default {
    getTaskList: () => `${BASE_URL}/fetchAllTasks`,
    postTask: () => `${BASE_URL}/addTask`
}