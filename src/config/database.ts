import { MongoClient } from 'mongodb';

const MONGO_URI = process.env.MONGODB_URI || "mongodb+srv://assignment_user:HCgEj5zv8Hxwa4xO@test-cluster.6f94f5o.mongodb.net/";
const DB_NAME = process.env.DB_NAME || "todoApp";

let mongoClient: MongoClient | null = null;

export const connect = async (): Promise<void> => {
    if (!mongoClient) {
        mongoClient = new MongoClient(MONGO_URI);
    }

    try {
        await mongoClient.connect();
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('MongoDB connection error:', error);
        throw error;
    }
};

export const getDb = () => {
    if (!mongoClient) {
        throw new Error('MongoClient not initialized');
    }
    return mongoClient.db(DB_NAME);
};

export const close = async (): Promise<void> => {
    if (mongoClient) {
        await mongoClient.close();
        mongoClient = null;
    }
};
