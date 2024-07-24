import mqtt from 'mqtt';
import redisService from './redisService';

const client = mqtt.connect('mqtt://localhost:1883');

client.on('connect', () => {
    client.subscribe('/add', (err:any) => {
        if (err) {
            console.error('Subscription error:', err);
        }
    });
});

client.on('message', async (topic: string, message: Buffer) => {
    if (topic === '/add') {
        const newTask = message.toString();
        console.log("New task received:", newTask);
        await redisService.addTask(newTask);
    }
});

const publishTask = (task: string) => {
    client.publish('/add', task);
};

export default {
    start: () => client.connect(),
    publishTask,
};
