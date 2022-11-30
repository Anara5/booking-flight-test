import { Request, Response, NextFunction } from 'express';
import data from '../../data.json';

// search flights by from and to
function getFromToHandler(req: Request, res: Response, next: NextFunction) {
    const { from, to } = req.params;
    const flights = data.filter(flight => flight.depatureDestination === from && flight.arrivalDestination === to);
    return res.send(flights);
}

export default getFromToHandler;