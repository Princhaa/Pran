export const SET_DEPARTURE = 'SET_DEPARTURE';
export const SET_ARRIVAL = 'SET_ARRIVAL';
export const SET_PASSENGER = 'SET_PASSENGER';
export const SET_FLIGHT_CLASS = 'SET_FLIGHT_CLASS';

export function setDeparture(departure) {
    return {
        type: SET_DEPARTURE,
        departure
    }
}

export function setArrival(arrival) {
    return {
        type: SET_ARRIVAL,
        arrival
    }
}

export function setPassenger(passenger) {
    return {
        type: SET_PASSENGER,
        passenger
    }
}

export function setFlightClass(flightClass) {
    return {
        type: SET_FLIGHT_CLASS,
        flightClass
    }
}
