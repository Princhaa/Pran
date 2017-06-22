import { SET_DEPARTURE, SET_ARRIVAL, SET_PASSENGER, SET_FLIGHT_CLASS } from './action';
import { combineReducers } from 'redux';

function setDeparture(state = '', action) {
    switch (action.type) {
        case SET_DEPARTURE: {
            return { departure: action.departure }
        }
        default: {
            return state;
        }
    }
}

function setArrival(state = '', action) {
    switch (action.type) {
        case SET_ARRIVAL : {
            return { arrival: action.arrival }
        }
        default: {
            return state;
        }
    }
}

function setPassenger(state = '', action) {
    switch (action.type) {
        case SET_PASSENGER : {
            return { passenger: action.passenger }
        }
        default: {
            return state;
        }
    }
}

function setFlightClass(state = '', action) {
    switch (action.type) {
        case SET_FLIGHT_CLASS : {
            return { flightClass: action.flightClass }
        }
        default: {
            return state
        }
    }
}

const pranState = combineReducers({
    setDeparture,
    setArrival,
    setPassenger,
    setFlightClass
});

export default pranState;
