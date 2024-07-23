import { WithId, Document } from 'mongodb';
import { connect, getDb, close } from '../config/database';
import { Task } from '../types/task';

const COLLECTION_NAME = process.env.MONGODB_COLLECTION || "assignment_Manish";

const insertTasks = async (tasks: string[]): Promise<void> => {
    await connect();
    const db = getDb();
    const collection = db.collection(COLLECTION_NAME);
    await collection.insertMany(tasks.map(task => ({ task })));
};

const getAllTasks = async (): Promise<Task[]> => {
    await connect();
    const db = getDb();
    const collection = db.collection(COLLECTION_NAME);
    const tasks = await collection.find().toArray();
    return tasks.map((doc: WithId<Document>) => ({
        task: doc.task,
    }));
};

export default {
    insertTasks,
    getAllTasks,
    close,
};
