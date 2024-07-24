import Redis from 'ioredis';
import dotenv from 'dotenv';

dotenv.config();

const redis = new Redis({
    host: process.env.REDIS_HOST || "redis-12675.c212.ap-south-1-1.ec2.cloud.redislabs.com",
    port: parseInt(process.env.REDIS_PORT || '12675'),
    username: process.env.REDIS_USERNAME || "default",
    password: process.env.REDIS_PASSWORD || "dssYpBnYQrl01GbCGVhVq2e4dYvUrKJB",
});

const REDIS_KEY = process.env.REDIS_KEY || "FULLSTACK_TASK_Manish";

redis.on('error', (err) => {
    console.error('Redis error:', err);
});

export { redis, REDIS_KEY };
