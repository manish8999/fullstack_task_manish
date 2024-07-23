import express from 'express';
import bodyParser from 'body-parser';
import mqttService from './services/mqttService';
import taskRoutes from './routes/task.router';
import cors from 'cors';

const app = express();
app.use(bodyParser.json());

app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
}));

const PORT = process.env.PORT || 3000;

app.use('/', taskRoutes);


mqttService.start();

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
