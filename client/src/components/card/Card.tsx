import { FlightData } from "../interface";
import './Card.css';

interface Props {
    flight: FlightData,
}

const Card = ({ flight }: Props) => {

    /*
    // here is the method to filter nested fetched flight data 
    // by availableSeats, date...
    // just had problem with importing users input "depat" from SearchForm.tsx
    // to Card.tsx.

    const { depatureDestination, arrivalDestination, itineraries } = flight;
    const filterData = itineraries.filter((item) => {
        if (item.avaliableSeats > 0 && item.depatureAt.includes(depat)) {
        return item;
    }});
    */

    return (
        <>
            <div className="card">
                <div className="card-header">
                    <h2>{flight.depatureDestination} {'--->'} {flight.arrivalDestination}</h2>
                </div>
            </div>

            <div className="card-body">
                <div className="card-body-content">
                    {
                        flight.itineraries.map((itinerary, i) => {
                            return (
                                <div key={i} className="card-body-content-row">
                                    <p>Depature: {itinerary.depatureAt} </p>
                                    <p>Arrival: {itinerary.arriveAt} </p>
                                    <p>Seats: {itinerary.avaliableSeats} </p>
                                    <p>Price: {itinerary.prices[0].currency} </p>
                                    <p>adult: {itinerary.prices[0].adult} </p>
                                    <p>child: {itinerary.prices[0].child} </p>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        </>
    );
};

export default Card;
