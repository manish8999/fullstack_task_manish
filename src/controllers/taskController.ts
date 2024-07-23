import { Request, Response } from 'express';
import redisService from '../services/redisService';

export const fetchAllTasks = async (req: Request, res: Response): Promise<void> => {
    try {
        const tasks = await redisService.getTasks();
        res.status(200).json(tasks);
    } catch (error) {
        console.error('Error fetching tasks:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

export const addTask = async (req: Request, res: Response): Promise<void> => {
    const { task } = req.body;
    
    if (!task) {
        res.status(400).json({ error: 'Task is required' });
        return;
    }

    try {
        await redisService.addTask(task);
        res.status(201).json({ message: 'Tasks added successfully' });
    } catch (error) {
        console.error('Error adding tasks:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};
