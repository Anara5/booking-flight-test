import { Request, Response, NextFunction } from 'express';
import data from '../../data.json';

function getFromToHandler(req: Request, res: Response, next: NextFunction) {
    const { from, to } = req.query;
    const flights = data.filter(flight => flight.depatureDestination === from
    && flight.arrivalDestination === to);
    return res.send(flights);
}

export default getFromToHandler;