import { Request, Response, NextFunction } from 'express';
import data from '../../data.json';

function getFlightsHandler(req: Request, res: Response, next: NextFunction) {
    return res.send(data);
}

export default getFlightsHandler;