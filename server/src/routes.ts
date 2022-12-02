import { Express } from 'express';
import getFromToHandler from './controllers/fromTo.controller';

function routes(app: Express) {
    app.get('/api', getFromToHandler);

    async function throwsError() {
        throw new Error('Error thrown');
    }
    app.get('/error', async (req, res) => {
        try {
           await throwsError();
           res.sendStatus(200);
        } catch (e) {
            res.status(400).send('something went wrong');
        }
    });
}

export default routes;