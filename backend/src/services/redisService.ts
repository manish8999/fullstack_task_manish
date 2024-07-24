import { redis, REDIS_KEY } from '../config/redis';
import mongoService from './mongoService';
import { Task } from '../types/task';

const addTask = async (task: string): Promise<void> => {
    await redis.lpush(REDIS_KEY, task);
    const length = await redis.llen(REDIS_KEY);

    if (length > 50) {
        const tasks = await redis.lrange(REDIS_KEY, 0, -1);
        await redis.del(REDIS_KEY);

        await mongoService.insertTasks(tasks);
    }
};

const getTasks = async (): Promise<Task[]> => {
    const length = await redis.llen(REDIS_KEY);

    if (length > 0) {
        const tasks = await redis.lrange(REDIS_KEY, 0, -1);
        return tasks.map((task:string) => ({ task }));
    } else {
        return await mongoService.getAllTasks();
    }
};

export default {
    addTask,
    getTasks,
};
