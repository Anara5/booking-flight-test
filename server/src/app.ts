import express from 'express';
import routes from './routes';

const app = express();

app.use(express.json());

routes(app);

app.listen(8080, () => {
    console.log('Server is running on port 8080!');
});