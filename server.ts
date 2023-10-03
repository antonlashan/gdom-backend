import express, { Application } from 'express';
import Server from './src';

const app: Application = express();
const PORT: number = process.env.PORT ? parseInt(process.env.PORT, 10) : 8080;

new Server(app);

app.listen(PORT, 'localhost', function () {
    console.log(`Server is running on port ${PORT}.`);
}).on('error', (err: any) => {
    if (err.code === 'EADDRINUSE') {
        console.log('Error: address already in use');
    } else {
        console.log(err);
    }
});
