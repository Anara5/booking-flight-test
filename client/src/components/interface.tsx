export interface FlightData {
    depatureDestination: [];
    arrivalDestination: [];
    itineraries: [{
        depatureAt: string;
        arriveAt: string;
        avaliableSeats: number;
        prices: [{
            currency: string;
            adult: number;
            child: number;
        }],
    }]
}

export interface SearchFormProps {
    setBackendData : (value: FlightData[]) => void;
}
