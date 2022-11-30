export interface FlightProps {
    depatureDestination: string;
    arrivalDestination: string;
    itineraries: [{
        depatureAt: string;
        arriveAt: string;
        avaliableSeats: number;
        prices: [{
            currency: string;
            adult: number;
            child: number;
        }],
    }],
};
