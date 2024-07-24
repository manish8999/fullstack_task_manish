import mqtt from 'mqtt';

const client = mqtt.connect('mqtt://localhost:1883');

client.on('connect', () => {
    client.subscribe('/add', (err:any) => {
        if (err) {
            console.error('Subscription error:', err);
        }
    });
});

export { client };
