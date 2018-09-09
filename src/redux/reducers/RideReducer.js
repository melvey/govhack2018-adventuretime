/**
* RideReducer.js
* Redux Reducer for Ride
**/

import actionTypes from '../actionTypes';

function handleShowComplete(state, data) {
	return Object.assign(
			{},
			state,
			{
				showComplete: data
			}
	);
}

function handleStartRide(state, data) {
	return Object.assign(
			{},
			state,
			{
					startTime: Date.now()
			}
	);
}

function handleStopRide(state, data) {
	const time = Date.now();
	return Object.assign(
			{},
			state,
			{
				lastRide: {
					start: state.startTime,
					stop: time,
					duration: time - state.startTime
				},
				startTime: null,
				showComplete: true
			}
	);
}

export default function setRideReducer(state, action) {
	switch(action.type) {
		case actionTypes.showComplete:
			return handleShowComplete(state, action.payload);
		case actionTypes.startRide:
			return handleStartRide(state, action.payload);
		case actionTypes.stopRide:
			return handleStopRide(state, action.payload);
		default:
			return state || {};
	}
}
